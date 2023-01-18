
import { BasicPostInterface } from "lib/data_models/post_interface";
import { formatImageAsset } from "./formatImageAsset";
  

export const formatPosts = (posts) =>{
  if(!posts) return null;
    const p =  posts.map((post)=>{
      const newPost: BasicPostInterface = {
        __typename:"Post",
        id: post.sys.id,
        contentTags:post.contentTags,
        slug: post.slug,
        title: post.title,
        date:  post.date ?? post.sys.firstPublishedAt,
        kicker: ("kicker" in post) && post.kicker,
        clientName: ("clientName" in post) && post.clientName,
        contentType: post.contentType,
        shortSummary: post.shortSummary,
        promoImage: ("promoImage" in post) ? formatImageAsset(post.promoImage): null,
      }
      return newPost;
    })
return p;
  }
  
