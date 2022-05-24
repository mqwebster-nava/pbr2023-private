
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import ArticleInfoComponent from "./ArticleInfoComponent";
import SideNavComponent from "./SideNavComponent";
import React, { useEffect, useRef, useState } from "react";
import { LinkText } from "components/atom/LinkText/LinkText";
import { AuthorPostInterface } from "shared_interfaces/post_interface";

//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/
import AuthorFiller from "public/images/author-filler.png"
import CaptionText from "./CaptionText";
import { liftData } from "utils/utils";
import PostBlockQuote from "./PostBlockQuote";
import PostPullQuote from "./PostPullQuote";
import AuthorBios from "./AuthorBiosSection";
import useCurrentSectionHook from "./useCurrentSectionHook";
import PostImage from "./PostImage";
import PostSummarySection from "./PostSummarySection";
export interface PostBodyInterface {
  id: string;
  body: any;
  contentTags: Array<string>;
  authors: Array<AuthorPostInterface>;
  date: string;
  hideSideNav?: boolean;
}


export default function PostBody({
  id,
  body,
  contentTags,
  authors,
  date,
  hideSideNav = false,
}: PostBodyInterface) {
  // need to deconstruct post
  const doc = body.json;
  let h2Sections = sortDocIntoH2Sections(doc);
  h2Sections.forEach((h2) => (h2.ref = useRef()));
  const activeSection = useCurrentSectionHook(h2Sections);

  function sortDocIntoH2Sections(doc) {
    let buffer = [];
    let sections = [];
    let titles = ["Intro"];
    doc.content.forEach((node) => {
      // if it is the end of 1 section
      if (node.nodeType == "heading-2") {
        sections.push(buffer);
        titles.push(node.content[0].value);
        buffer = [];
      }
      buffer.push(node);
    });
    sections.push(buffer);
    let i = -1;
    let output = sections.map((section) => {
      i += 1;
      return {
        title: titles[i],
        titleId: titles[i],
        doc: { ...doc, content: section },
        ref: null,
        triggerTop: 9999,
        triggerBottom: 9999,
      };
    });
    return output;
  }

  const getImg = (data: any) => {
    const id = data.target.sys.id;
    const assets = body.links.assets.block;
    const asset = assets.find((element) => element.sys.id === id);

    
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
        <p className=" py-md type-preset-5">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <p className="type-preset-3 font-bold font-sans pt-lg">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="type-preset-3 font-bold font-sans pt-lg">{children}</h2>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <p className="type-preset-4 font-bold font-sans pt-lg">{children}</p>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="type-preset-5 font-bold font-sans pt-lg">{children}</h4>
      ),
      [BLOCKS.QUOTE]: (node, children) => <PostBlockQuote body={children} isRichText={true}/>,
      [BLOCKS.UL_LIST]: (node, children) => ( <ul className=" list-disc ml-2xl">{children}</ul> ),
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-2xl">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (<LinkText href={node.data.uri} variant={"underlined"}>{children}</LinkText> ),
      [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
        const id = data.target.sys.id;
        const assets = body.links.assets.block;
        const asset = assets.find((element) => element.sys.id === id);
        return <PostImage border={"gray"} image={asset}/>
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const id = node.data.target.sys.id;
        const entryBlocks = body.links.entries.block;
        let blockData = entryBlocks.find((element) => element.sys.id === id);
        blockData = liftData(blockData); // rises ID to top of map
        const embeddedEntries = {
          "CaptionText": (props)=><CaptionText {...props}/>,
          "PostBlockQuote": (props)=><PostBlockQuote {...props}/>,
          "PostPullQuote":(props)=><PostPullQuote {...props}/>,
          "PostImage": (props) => <PostImage {...props}/>,
          "PostSummarySection": (props)=> <PostSummarySection {...props}/>
        }
         if(blockData.__typename in embeddedEntries) return embeddedEntries[blockData.__typename](blockData);
      },
    },
  };

  return (
    <div
      key={id}
      className={
        "responsive-container py-2xl flex md:flex-row flex-col-reverse "
      }
    >
      <div
        id="article"
        className="w-full md:w-2/3 pr-lg text-gray-base font-serif"
      >
        {h2Sections.map((section) => (
          <div id={section.title} ref={section.ref}>
            {documentToReactComponents(section.doc, options)}
          </div>
        ))}
        {<AuthorBios authors={authors}/>}
      </div>
      {/* Article Sidebar Section  */}
      <div className={"w-full md:w-1/3 pt-md md:pl-xl"}>
        <ArticleInfoComponent
          authors={authors}
          date={date}
          contentTags={contentTags}
        />
        {!hideSideNav && (
          <SideNavComponent
            h2Sections={h2Sections}
            activeSection={activeSection}
          />
        )}
      </div>
    </div>
  );
}

