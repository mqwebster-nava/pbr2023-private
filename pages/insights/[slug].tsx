
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
//import { getPostBySlug} from '@/lib/api'
//import Post, {toPost} from "@/models/PostModel"

  export default function InsightsPost({post, morePosts, preview }) {
    //const router = useRouter()

    // if (!router.isFallback && !post?.path) {
    //   return <ErrorPage statusCode={404} />
    // }
  
    return (
      <div>
        Post
      </div>
    );
  }




export async function getStaticProps({ params, preview = null }) {
  //const post = await getPostBySlug("test");
//   return {
//     props: {
//       preview,
//       post: post,
//     },
//   }
    return {};
}

export async function getStaticPaths() {
    return null;
    //const post = await getPostBySlug("test");
    //console.log(post);

    // return {
    //     paths: [ `/case-studies/${post.path}`],
    //     fallback: true,
    // }
}
