
import React from "react";
import dynamic from "next/dynamic";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { LinkText } from "components/atom/LinkText/LinkText";
import { liftData } from "utils/utils";

const PostBlockQuote  = dynamic(() => import("components/blocks/PostBody/PostBlockQuote"));
const PostPullQuote  = dynamic(() => import("components/blocks/PostBody/PostPullQuote"));
const PostImage  = dynamic(() => import("components/blocks/PostBody/PostImage"));
const CaptionText  = dynamic(() => import("components/blocks/PostBody/CaptionText"));
const PostSummarySection  = dynamic(() => import("components/blocks/PostBody/PostSummarySection"));

import MarkdownComponent from "utils/MarkdownComponent";
import EmbeddedVideo from "./EmbeddedVideo";
import Callout from "../../blocks_reports/ReportContent/Callout";

export type CONTENT_VARIANT = "post" | "report" | "report sage";
export interface PostContentInterface {
  docData:any;
  docLinks:any;
  variant: CONTENT_VARIANT
}


const PostContent = ({docData, docLinks, variant="post" }) =>{
    const options = {
        renderMark: {
          [MARKS.BOLD]: (text) => <span className=" font-bold ">{text}</span>,
          [MARKS.ITALIC]: (text) => <span className="italic ">{text}</span>,
          [MARKS.UNDERLINE]: (text) => <span className=" underline decoration-1 underline-offset-2">{text}</span>,
          [MARKS.CODE]: (text) =>  <span className=" font-mono type-preset-7 py-[2px] px-[4px] bg-gray-100">{text}</span>
            
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children!="" &&(
            <p className=" py-md type-preset-5">{children}</p>
          ),
          [BLOCKS.HEADING_1]: (node, children) => (
            <p className="type-preset-3 font-bold font-sans pt-lg">{children}</p>
          ),
          [BLOCKS.HEADING_2]: (node, children) => {
            return (
              <h2 className="type-preset-3 font-bold font-sans pt-lg pb-md">{children}</h2>
            );
          },
          [BLOCKS.HEADING_3]: (node, children) => (
            <p className="type-preset-4 font-bold font-sans pt-lg pb-md">{children}</p>
          ),
          [BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="type-preset-5 font-bold font-sans pt-lg pb-md">{children}</h4>
          ),
          
          [BLOCKS.QUOTE]: (node, children) => <PostBlockQuote body={children} variant={"post"}/>,
          [BLOCKS.UL_LIST]: (node, children) => ( <ul className="list-disc ml-lg pb-md">{children}</ul> ),
          [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-lg pb-md">{children}</ol>,
          [BLOCKS.LIST_ITEM]: (node, children) => <li className="[&>p]:py-xs">{children}</li>,
         
          [INLINES.HYPERLINK]: (node, children) => (<LinkText href={node.data.uri} variant={"underlined"}>{children}</LinkText> ),
          [INLINES.ASSET_HYPERLINK]: (node, children) =>{
            const id = node.data.target.sys.id;
            const assets = docLinks.assets.hyperlink;
            const asset = assets.find((element) => element.sys.id === id);
             return (asset&&<LinkText href={asset.url} variant={"underlined"}>{children}</LinkText>)},
          [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
            const id = data.target.sys.id;
            const assets = docLinks.assets.block;
            const asset = assets.find((element) => element.sys.id === id);
            return <PostImage border={"gray"} image={asset}/>
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            const id = node.data.target.sys.id;
            const entryBlocks =docLinks.entries.block;
            let blockData = entryBlocks.find((element) => element.sys.id === id);
            blockData = liftData(blockData); // rises ID to top of map
            
            const embeddedEntries = {
              "CaptionText": (props)=><CaptionText {...props} caption={<MarkdownComponent content={props.caption} removePadding={true}/>} />,
              "PostBlockQuote": (props)=><PostBlockQuote {...props} body={<MarkdownComponent content={props.body}/>}/>,
              "PostPullQuote":(props)=><PostPullQuote {...props} body={<MarkdownComponent content={props.body}/>}/>,
              "PostImage": (props) =>  <PostImage {...props} caption={props.caption && <MarkdownComponent content={props.caption}/>}/>,
              "PostSummarySection": (props)=> <PostSummarySection {...props} body={<MarkdownComponent content={props.body}/>}/>,
              "EmbeddedVideo": (props)=> <EmbeddedVideo {...props} />,
              "ReportCallout": (props) => <Callout {...props}/>
            }
             if(blockData.__typename in embeddedEntries) return embeddedEntries[blockData.__typename](blockData);
          },
        },
    };
    return (<>
     {documentToReactComponents(docData, options)}
    </>)
}



export const ListContent = ({docData, docLinks }) =>{
  const options = {
      renderMark: {
        [MARKS.BOLD]: (text) => <span className=" font-bold ">{text}</span>,
        [MARKS.ITALIC]: (text) => <span className="italic ">{text}</span>,
        [MARKS.UNDERLINE]: (text) => <span className=" underline decoration-1 underline-offset-2">{text}</span>,
          
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => children!="" &&(
          <p className=" py-md">{children}</p>
        ),
        [BLOCKS.UL_LIST]: (node, children) => ( <ul className="list-style">{children}</ul> ),
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="pb-sm">{children}</li>,
       
        [INLINES.HYPERLINK]: (node, children) => (<LinkText href={node.data.uri} variant={"underlined"}>{children}</LinkText> ),
        [INLINES.ASSET_HYPERLINK]: (node, children) =>{
          const id = node.data.target.sys.id;
          const assets = docLinks.assets.hyperlink;
          const asset = assets.find((element) => element.sys.id === id);
           return (asset&&<LinkText href={asset.url} variant={"underlined"}>{children}</LinkText>)},
      },
  };
  return (<>
   {documentToReactComponents(docData, options)}
  </>)
}



export default PostContent;
