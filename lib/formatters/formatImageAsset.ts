import { ContentfulImageAsset } from "shared_interfaces/post_interface";

export const formatImageAsset = (imgData) => {
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
