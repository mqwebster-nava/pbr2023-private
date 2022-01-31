
import Image from 'next/image';
//import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS } from '@contentful/rich-text-types';
import PostHeader from 'components/row/PostHeader/PostHeader';


  export default function PostTemplate({post, morePosts, preview }) {
  // need to deconstruct post 
  console.log(post);
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
 
    return (
      <div >
        <PostHeader title={post.title} long_summary={post.long_summary} content_type={'Case Study'}/>
        <div className="mx-6">

         {documentToReactComponents(doc, options)}
         </div>
      </div>
    );
  }



