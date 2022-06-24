import dynamic from "next/dynamic";
//import ReactMarkdown from 'react-markdown';

import ArticleInfoComponent from "./ArticleInfoComponent";
import React, {useRef} from "react";
import { AuthorPostInterface } from "shared_interfaces/post_interface";
//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/
import AuthorBios from "./AuthorBiosSection";
import useCurrentSectionHook from "./useCurrentSectionHook";
import PostContent from "./PostContent";
import EventInfoComponent from "./EventInfoComponent";

const SideNavComponent  = dynamic(() => import("components/blocks/PostBody/SideNavComponent"));

export interface PostBodyInterface {
  id: string;
  body: any;
  contentTags: Array<string>;
  authors: Array<AuthorPostInterface>;
  date: string;
  hideSideNav?: boolean;
  registrationLink?: string;
  isEvent?:boolean;
}


export default function PostBody({
  id,
  body,
  contentTags,
  authors,
  date,
  hideSideNav = false,
  isEvent = false,
  registrationLink,
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

  // TODO Where should I do the rendering for this post
 

  return (
    <div
      key={id}
      className={
        "responsive-container py-2xl flex flex-col-reverse md:grid md:grid-cols-12 "
      }
    >
      <article
        id="article"
        className="w-full md:col-span-8 text-gray-900 font-serif"
      >
        {h2Sections.map((section) => (
          <section id={section.title} ref={section.ref} key={section.title}>
            <PostContent docData={section.doc} docLinks={body.links} />
          </section>
        ))}
        {<AuthorBios authors={authors}/>}
      </article>
      <div className="hidden md:block md:col-span-1"></div>
      {/* Article Sidebar Section  */}
      <div className={"w-full md:col-span-3 pt-md "}>
       { isEvent? 
       <EventInfoComponent date={date} registrationLink={registrationLink} contentTags={contentTags}/> : 
        <ArticleInfoComponent
          authors={authors}
          date={date}
          contentTags={contentTags}
        />
        }
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

