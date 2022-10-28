import { BasicPostInterface } from "shared_interfaces/post_interface";
import { formatImageAsset } from "./formatImageAsset";

  export const formatPosts = (posts) =>{
    return posts.map((post)=>{
      const newPost: BasicPostInterface = {
        __typename:"Post",
        id: post.sys.id,
        contentTags:post.contentTags,
        slug: post.slug,
        title: post.title,
        date: post.date,
        clientName: post.clientName,
        contentType: post.contentType,
        shortSummary: post.shortSummary,
        promoImage: ("promoImage" in post) ? formatImageAsset(post.promoImage): null,
        
      }
      return newPost;
    })
  }
  
