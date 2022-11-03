import { ContentfulImageAsset } from "shared_interfaces/post_interface";

export const sortPostsByDate= (posts) =>  posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());


const defaultSocialImage: ContentfulImageAsset = {
  id: '6f9PYC9LuxyTeGpAQ0A4Ea',
  url: 'https://images.ctfassets.net/t2ekr6eg3fr3/1XVCel1lt0F1olfgIWgnh1/219ed4ebe26ec4528c04a834b2b77e8f/Author-Social-V2.png',
  width: 1280,
  height: 720,
  title: 'Purple Nava Logo',
  description: 'A logo to act as a placeholder for the social image'
}
export {defaultSocialImage};
