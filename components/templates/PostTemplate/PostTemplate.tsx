
import Image from 'next/image';
//import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import PostHeader from 'components/row/PostHeader/PostHeader';
import ArticleInfoComponent from './ArticleInfoComponent';
import SideNavComponent from './SideNavComponent';
import { useEffect, useRef, useState } from "react";

import {PostPageProps, sortDocIntoH2Sections} from "utils/postUtils";

export default function PostTemplate({post, morePosts, preview }:PostPageProps) {
  // need to deconstruct post 
  const doc = post.body.json;
  let h2Sections = sortDocIntoH2Sections(doc);
  let refs = {};
  h2Sections.forEach(
    (h2)=> h2.ref = useRef()
  );
  const [activeSection,setActiveSection] = useState(null);


  const callbackFunction = (entries) => {
    let newActiveSection = activeSection;
   // Need to deal with a range of edge cases
    entries.forEach((entry)=>{
      if(entry.intersectionRatio > 0 ) newActiveSection = entry.target.id;
     
    });
    if (newActiveSection!=activeSection) setActiveSection(newActiveSection);
    return null;
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold:0.2
    }
    const observer = new IntersectionObserver(callbackFunction, options)
    h2Sections.forEach(
      (h2)=> {
        if (h2.ref.current) observer.observe(h2.ref.current)
      }
    );
  
    return () => {
      h2Sections.forEach(
        (h2)=> {
          if (h2.ref.current) observer.unobserve(h2.ref.current)
        }
      );
    }
  });

  const getImg= (data:any) => {
      const id = data.target.sys.id;
      const assets = post.body.links.assets.block;
      const asset = assets.find(element => element.sys.id === id);
      return (<Image src={asset.url} height={asset.height} width={asset.width} alt={asset.description}/>);
  }
// TODO Where should I do the rendering for this post
    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <span className="text-blue-500 font-bold ">{text}</span>,
        [MARKS.ITALIC]: text => <span className="italic font-sans">{text}</span>,
        [MARKS.UNDERLINE]: text => <span className="text-blue-500 font-bold">{text}</span>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-black font-sans py-md text-base">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <p className="text-3xl font-bold font-sans pt-md">{children}</p>,
        [BLOCKS.HEADING_2]: (node, children) =>{
          return ( <h2 className="text-2xl font-bold font-sans pt-md">{children}</h2>)
        },
        [BLOCKS.HEADING_3]: (node, children) => <p className="text-xl font-bold font-sans">{children}</p>,
        [BLOCKS.HEADING_4]: (node, children) => <p className="text-blue-500">{children}</p>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-2xl">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
        [INLINES.HYPERLINK]:(node, children) => ( <a className="text-sage-dark hover:text-sage-base underline"href={node.data.uri}  target="_blank"  >{children}</a>
        ),
        [BLOCKS.EMBEDDED_ASSET]: ({ data }) => getImg(data)
      },
  };

    return (
      < >
        <PostHeader title={post.title} longSummary={post.longSummary} contentType={post.contentType}/>
        <div className={"px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg my-2xl flex"}>
        {/* Article Body Section  */}
        <div id="article" className="w-2/3 pr-2">
         { h2Sections.map((section)=>
         <div id={section.title} ref={section.ref}>
            {documentToReactComponents(section.doc, options)}
         </div>
         )} 
          </div>
          {/* Article Sidebar Section  */}
          <div className={"w-1/3"}>
            <ArticleInfoComponent post={post}/>
            <SideNavComponent 
              h2Sections={h2Sections} 
              activeSection={activeSection}/>
          </div>
        </div>
      </>
    );
  }

