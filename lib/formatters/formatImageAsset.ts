import { ContentfulImageAsset } from "lib/data_models/post_interface";

export const formatImageAsset = (imgData) => {
    if(!imgData) return null;
  
    const imgAsset: ContentfulImageAsset =  {
      id:  "id" in imgData ? imgData.id : ("sys" in imgData) ? imgData.sys.id : null ,
      url: imgData.url,
      title:imgData.title,
      description:imgData.description,
      width:imgData.width,
      height:imgData.height
    } 
    return imgAsset;
  }
