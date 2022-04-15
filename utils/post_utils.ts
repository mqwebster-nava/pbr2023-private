import { BasicPostInterface, ContentfulImageAsset } from "../models/post_model";



const formatImageAsset = (imgData) => {
    if(!imgData) return null;
  
    const imgAsset: ContentfulImageAsset =  {
      id: imgData.sys.id,
      url: imgData.url,
      title:imgData.title,
      description:imgData.description,
      width:imgData.width,
      height:imgData.height
    } 
    return imgAsset;
  }
  const formatPosts = (posts) =>{
    return posts.map((post)=>{
      const newPost: BasicPostInterface = {
        id: post.sys.id,
        contentTags:post.contentTags,
        slug: post.slug,
        title: post.title,
        date: post.date,
        clientName: post.clientName,
        contentType: post.contentType,
        shortSummary: post.shortSummary,
        promoImage: formatImageAsset(post.promoImage)
      }
      return newPost;
    })
  }
  
  
  