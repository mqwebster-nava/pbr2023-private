
  import Image from 'next/image';
  import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
  //import ReactMarkdown from 'react-markdown';
  import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
  import PostHeader from 'components/templates/PostTemplate/PostHeader';
  import ArticleInfoComponent from './ArticleInfoComponent';
  import SideNavComponent from './SideNavComponent';
  import { useEffect, useRef, useState } from "react";
  import { ContentBlockArticleList } from 'components/blocks';
  import {PostPageProps, sortDocIntoH2Sections} from "utils/postUtils";
import { ContentCard } from 'components/atom';
import { getContentUrl } from 'utils/utils';
import { LinkText } from 'components/atom/LinkText/LinkText';

  export default function PostTemplate({post, morePosts, preview }:PostPageProps) {
    // need to deconstruct post 
    const doc = post.body.json;
    let h2Sections = sortDocIntoH2Sections(doc);
    let refs = {};
    h2Sections.forEach(
      (h2)=> h2.ref = useRef()
    );
    const [activeSection,setActiveSection] = useState(null);
    const [interactionTime,setIntersectionTime] = useState(null);
  
  
    const callbackFunction = (entries) => {
      
      let newActiveSection = activeSection;
     // Need to deal with a range of edge cases
      entries.forEach((entry)=>{
        if(entry.isIntersecting) {
          newActiveSection = entry.target.id;
        }
       // two different sections on the page
  
       // Scrolling up logic
  
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
          [MARKS.BOLD]: text => <span className=" font-bold ">{text}</span>,
          [MARKS.ITALIC]: text => <span className="italic ">{text}</span>,
          [MARKS.UNDERLINE]: text => <span className=" underline">{text}</span>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-black font-serif py-md text-base">{children}</p>,
          [BLOCKS.HEADING_1]: (node, children) => <p className="text-3xl font-bold font-sans pt-md">{children}</p>,
          [BLOCKS.HEADING_2]: (node, children) =>{
            return ( <h2 className="text-2xl font-bold font-serif pt-md">{children}</h2>)
          },
          [BLOCKS.HEADING_3]: (node, children) => <p className="text-xl font-bold font-sans">{children}</p>,
          [BLOCKS.HEADING_4]: (node, children) => <p className="">{children}</p>,
          [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-2xl">{children}</ul>,
          [BLOCKS.OL_LIST]: (node, children) => <ol className="">{children}</ol>,
          [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
          [INLINES.HYPERLINK]:(node, children) => ( <LinkText href={node.data.uri}>{children}</LinkText> ),
          [BLOCKS.EMBEDDED_ASSET]: ({ data }) => getImg(data)
        },
    };
  
      return (
        < >
          <PostHeader title={post.title} longSummary={post.longSummary} contentType={post.contentType}/>
          <div className={"responsive-container py-2xl flex md:flex-row flex-col-reverse "}>
          {/* Article Body Section  */}
          <div id="article" className="w-full md:w-2/3 pr-lg">
           { h2Sections.map((section)=>
           <div id={section.title} ref={section.ref}>
              {documentToReactComponents(section.doc, options)}
           </div>
           )} 
            </div>
            {/* Article Sidebar Section  */}
            <div className={"w-full md:w-1/3 pt-md"}>
              <ArticleInfoComponent post={post}/>
              <SideNavComponent 
                h2Sections={h2Sections} 
                activeSection={activeSection}/>
            </div>
          </div>
          <ContentBlockArticleList
            title={"More From Nava"}>
              {morePosts.map((_post)=>
              <ContentCard title={_post.title} path={getContentUrl(_post.contentType, _post.slug)}>
                {_post.shortSummary}
              </ContentCard>)}

          </ContentBlockArticleList>
        </>
      );
    }
  
  