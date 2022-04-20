
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import ArticleInfoComponent from "./ArticleInfoComponent";
import SideNavComponent from "./SideNavComponent";
import React, { useEffect, useRef, useState } from "react";
import { LinkText } from "components/atom/LinkText/LinkText";
import { sortDocIntoH2Sections } from "utils/page_utils";
import { AuthorPostInterface } from "models/post_model";
//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/

export interface PostBodyInterface {
    body: any;
    contentTags: Array<String>
    authors: Array<AuthorPostInterface>;
    date:String;
}


export default function PostBody({
    body,
    contentTags,
    authors,
    date
}: PostBodyInterface) {
  // need to deconstruct post
  const doc = body.json;
  let h2Sections = sortDocIntoH2Sections(doc);
  let refs = {};
  h2Sections.forEach((h2) => (h2.ref = useRef()));
  const [activeSection, setActiveSection] = useState(null);
  const [interactionTime, setIntersectionTime] = useState(null);

  const callbackFunction = (entries) => {
    let newActiveSection = activeSection;
    // Need to deal with a range of edge cases
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        newActiveSection = entry.target.id;
      }
      // two different sections on the page

      // Scrolling up logic
    });
    if (newActiveSection != activeSection) setActiveSection(newActiveSection);

    return null;
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    h2Sections.forEach((h2) => {
      if (h2.ref.current) observer.observe(h2.ref.current);
    });

    return () => {
      h2Sections.forEach((h2) => {
        if (h2.ref.current) observer.unobserve(h2.ref.current);
      });
    };
  });

  const getImg = (data: any) => {
    const id = data.target.sys.id;
    const assets = body.links.assets.block;
    const asset = assets.find((element) => element.sys.id === id);
    return (
      <Image
        src={asset.url}
        height={asset.height}
        width={asset.width}
        alt={asset.description}
        loading="lazy"
        placeholder="blur"
        blurDataURL={`/_next/image?url=${asset.url}&w=16&q=1`}
      />
    );
  };
  // TODO Where should I do the rendering for this post
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className=" font-bold ">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic ">{text}</span>,
      [MARKS.UNDERLINE]: (text) => <span className=" underline">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-navy-900 font-serif py-md text-base">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <p className="text-4xl font-bold font-sans pt-md">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="text-2xl font-bold font-serif pt-md">{children}</h2>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <p className="text-xl font-bold font-sans">{children}</p>
      ),
      [BLOCKS.HEADING_4]: (node, children) => <p className="">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-2xl">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => <ol className="">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <LinkText href={node.data.uri} variant={"underlined"}>{children}</LinkText>
      ),
      [BLOCKS.EMBEDDED_ASSET]: ({ data }) => getImg(data),
    },
  };

  return (
    <>
      
      <div
        className={
          "responsive-container py-2xl flex md:flex-row flex-col-reverse "
        }
      >
        <div id="article" className="w-full md:w-2/3 pr-lg">
          {h2Sections.map((section) => (
            <div id={section.title} ref={section.ref}>
              {documentToReactComponents(section.doc, options)}
            </div>
          ))}
        </div>
        {/* Article Sidebar Section  */}
        <div className={"w-full md:w-1/3 pt-md"}>
          <ArticleInfoComponent 
            authors={authors}
            date={date}
            contentTags={contentTags}
          />
          <SideNavComponent
            h2Sections={h2Sections}
            activeSection={activeSection}
          />
        </div>
      </div>
    </>
  );
}
