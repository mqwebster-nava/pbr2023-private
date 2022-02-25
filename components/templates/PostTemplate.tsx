
import Image from 'next/image';
//import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import PostHeader from 'components/row/PostHeader/PostHeader';
import {allTagsSlugIdPair} from "utils/utils";
import { useEffect, useState } from "react";
import AnchorLink from "components/templates/AnchorLink";
 
export default function PostTemplate({post, morePosts, preview }) {
  // need to deconstruct post 
  const doc = post.body.json;
  
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
          return ( <h2 id={children[0]} className="text-2xl font-bold font-sans pt-md">{children}</h2>)
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
 


 
const ArticleInfoComponent = () =>{
  return (<div>
    <p>Date: ______</p>
            <div>
              <h3>Authors</h3>
              {post.authorsCollection.items.map((author)=>(
              <div id={author.name}>
                <p><a className="text-blue-700 underline" href={`/authors/${author.slug}`}>{author.name}</a></p>
                <p>{author.role}</p>
              </div>
              ))}
            </div>
            <div>
            <h3>Tags</h3>
            {post.contentTags && post.contentTags.map((tag)=>{
              return (
                <p id={tag}><a className="text-blue-700 underline" href={`/tags/${allTagsSlugIdPair.revGet(tag)}`}>{tag}</a></p>
              )})}
            </div>
  </div>)
}
const SideNavComponent = () =>{
  const headers = doc.content.filter(node => node.nodeType=="heading-2").map(node=>node.content[0].value);
  console.log(headers);
  return ( 
  <div className="mt-md  p-lg sticky top-48 border-2 w-fit">
    <h3>On This Page</h3>
    {
        headers.map((header)=>{
          return ( <p className="font-sans text-blue-500 hover:text-blue-900"><AnchorLink href={`#${header}`}>{header}</AnchorLink> </p>)
        })
    }
  </div>
  )
}

    return (
      <div >
        <PostHeader title={post.title} long_summary={post.longSummary??post.shortSummary} content_type={post.contentType}/>
        <div className={"px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg my-2xl flex"}>
        {/* Article Body Section  */}
        <div id="article" className="w-2/3 pr-2">
            {documentToReactComponents(doc, options)}
          </div>
          {/* Article Sidebar Section  */}
          <div className={"w-1/3"}>
            <ArticleInfoComponent/>
            <SideNavComponent/>
          </div>
        </div>
      </div>
    );
  }

