
import Image from 'next/image';
//import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS } from '@contentful/rich-text-types';
import PostHeader from 'components/row/PostHeader/PostHeader';
import {allTagsSlugIdPair} from "utils/utils"


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
      renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({ data }) => getImg(data)
              // `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
      },
    };
   const doc = post.body.json;
   console.log(post);
 
    return (
      <div >
        <PostHeader title={post.title} long_summary={post.long_summary} content_type={'Case Study'}/>
        <div className={"px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg my-2xl flex"}>
          <div className={"w-2/3 pr-md"}>
            {documentToReactComponents(doc, options)}
          </div>
          <div className={"w-1/3"}>
            <p>Date: ______</p>
            
            <div>
              <h3>Authors</h3>
              {post.authorsCollection.items.map((author)=>(
              <div>
                <p><a className="text-blue-700 underline" href={`/authors/${author.slug}`}>{author.name}</a></p>
                <p>{author.role}</p>
              </div>
              ))}
            </div>
            <div>
            <h3>Tags</h3>
            {post.contentTags && post.contentTags.map((tag)=>{
              
              return (
                <p><a className="text-blue-700 underline" href={`/tags/${allTagsSlugIdPair.revGet(tag)}`}>{tag}</a></p>
               
              )})}
            </div>
          </div>
         
        </div>
      </div>
    );
  }



