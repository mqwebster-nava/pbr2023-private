
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { LinkText } from "components/atom/LinkText/LinkText";

import CaptionText from "./CaptionText";
import { liftData } from "utils/utils";
import PostBlockQuote from "./PostBlockQuote";
import PostPullQuote from "./PostPullQuote";
import PostImage from "./PostImage";
import PostSummarySection from "./PostSummarySection";
import React from "react";
import MarkdownComponent from "utils/MarkdownComponent";


const PostContent = ({docData, docLinks, }) =>{
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
          [BLOCKS.QUOTE]: (node, children) => <PostBlockQuote body={children}/>,
          [BLOCKS.UL_LIST]: (node, children) => ( <ul className=" list-style-rich">{children}</ul> ),
          [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-2xl">{children}</ol>,
          [BLOCKS.LIST_ITEM]: (node, children) => <li className="pb-sm">{children}</li>,
          [INLINES.HYPERLINK]: (node, children) => (<LinkText href={node.data.uri} variant={"underlined"}>{children}</LinkText> ),
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
              "CaptionText": (props)=><CaptionText {...props} caption={<MarkdownComponent content={props.caption}/>} />,
              "PostBlockQuote": (props)=><PostBlockQuote {...props} body={<MarkdownComponent content={props.body}/>}/>,
              "PostPullQuote":(props)=><PostPullQuote {...props} body={<MarkdownComponent content={props.body}/>}/>,
              "PostImage": (props) => <PostImage {...props}/>,
              "PostSummarySection": (props)=> <PostSummarySection {...props} body={<MarkdownComponent content={props.body}/>}/>
            }
             if(blockData.__typename in embeddedEntries) return embeddedEntries[blockData.__typename](blockData);
          },
        },
    };
    return (<>
     {documentToReactComponents(docData, options)}
    </>)
}



export default PostContent;
