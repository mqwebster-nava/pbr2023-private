
import Image from 'next/image';
//import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import PostHeader from 'components/row/PostHeader/PostHeader';
import {allTagsSlugIdPair} from "utils/utils";

export default function PostTemplate({post, morePosts, preview }) {
  // need to deconstruct post 
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
        [MARKS.ITALIC]: text => <span className="text-blue-500 font-bold">{text}</span>,
        [MARKS.UNDERLINE]: text => <span className="text-blue-500 font-bold">{text}</span>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-black font-sans py-md text-base">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <p className="text-3xl font-bold font-sans pt-md">{children}</p>,
        [BLOCKS.HEADING_2]: (node, children) => <p className=" text-2xl font-bold font-sans pt-md">{children}</p>,
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
  
   const doc = post.body.json;
 
    return (
      <div >
        <PostHeader title={post.title} long_summary={post.longSummary??post.shortSummary} content_type={post.contentType}/>
        <div className={"px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg my-2xl flex"}>
       <div className="w-2/3 pr-2">

            {documentToReactComponents(doc, options)}
          </div>
          <div className={"w-1/3"}>
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
          </div>
         
        </div>
      </div>
    );
  }

