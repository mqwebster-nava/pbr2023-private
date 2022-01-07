
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import ContentfulApi from "lib/contentful";

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactMarkdown from 'react-markdown';
import { BLOCKS } from '@contentful/rich-text-types';


//import { getPostBySlug} from '@/lib/api'
//import Post, {toPost} from "@/models/PostModel"

  export default function CaseStudyPost({post, morePosts, preview }) {
    // const router = useRouter()


    // if (!router.isFallback && !post?.path) {
    //   return <ErrorPage statusCode={404} />
    // }

    console.log(post.body)

    const getImg= (data:any) => {

      const id = data.target.sys.id;
      const assets = post.body.links.assets.block;
      const asset = assets.find(element => element.sys.id === id);
      return (`<img src="${asset.url}" height="${asset.height}" width="${asset.width}" alt="${asset.description}"/>`);
    
    }

    const options = {
      renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({ data }) => getImg(data)
              // `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
      },
    };
   const doc = post.body.json;
   // @ts-ignore
   const renderedDoc = documentToHtmlString(doc, options);

    return (
      <div className="mx-6">
         <div dangerouslySetInnerHTML={{__html: renderedDoc}} />
        {/* <ReactMarkdown>{post.body2}</ReactMarkdown> */}
      </div>
    );
  }




export async function getStaticPaths({ params, preview = null }) {

    const paths = [{ params: { slug:"/case-studies/test" } }]
    return {
      paths,
      fallback: "blocking",
    }
}

export async function getStaticProps({ params, preview = false }) {
  const post = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  });

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      preview,
      post,
    },
  };
}

// export async function getStaticPaths() {
//     return null;
//     //const post = await getPostBySlug("test");
//     //console.log(post);

//     // return {
//     //     paths: [ `/case-studies/${post.path}`],
//     //     fallback: true,
//     // }
// }
