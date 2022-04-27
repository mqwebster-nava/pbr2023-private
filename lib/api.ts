
/**
 * This class constructs GraphQL queries for blog posts, page content and other data
 * and calls out to the Contentful GraphQL API.
 *
 * Contentful GraphQL API docs:
 * https://www.contentful.com/developers/docs/references/graphql/
 *
 * Explore the GraphQL API in depth in the GraphiQL Playground:
 * https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={ACCESS_TOKEN}
 *
 */

 import { PageInterface } from "shared_interfaces/page_interface";
 import { BasicPostInterface } from "shared_interfaces/post_interface";
 import { allTagsSlugIdPair } from "utils/utils";
import getPageDataBySlug from "./contentful/getPageDataBySlug";
import getPostBySlug from "./contentful/getPostBySlug";
import getPostsByAuthor from "./contentful/getPostsByAuthor";
import getPostsByTag from "./contentful/getPostsByTag";
import { formatAuthorPage, formatPage, formatPostPage, formatTagsPage } from "./formatPage";

 // When preview is true, content that are in "draft" state will be renderered. Otherwise it is hidden
 // Preview is used to render previews of the page within the contentful interface.
 const defaultOptions = {
   preview: false,
 };
 
 type PageVariant = "default" | "post" | "tags" | "author";
 
 export interface PageQueryInterface {
   slug: string;
   variant?: PageVariant;
   preview?: boolean;
 }
 
 

export async function getPageDataFromContentful({slug, variant="default", preview =false}:PageQueryInterface) {
 
    // If it is a default page, then there should be a corresponding Page Content model in 
     // Contentful with page info
     if(variant=="default"){
       const page = await getPageDataBySlug({slug,preview });
       // Checks for errors and formats
       const formattedPage: PageInterface = formatPage(page);
       return  formattedPage;
        
      
     }
    
     // If it is a post, we create the page interface data from the post content
     if(variant=="post"){
       // Get the post data
       try{
        const res = await getPostBySlug(slug);
        const {post, morePosts}  = res;
        const formattedPage: PageInterface = formatPostPage(post, morePosts); 
        return formattedPage;
       }catch (e){
           console.log(e);
           return null;
       }
       
       
     }
 
     if (variant=="author"){
       const author = await getPostsByAuthor(slug);
       const formattedPage: PageInterface = formatAuthorPage(slug, author); 
      return formattedPage;
     }
 
     if (variant=="tags"){
       const tagName:string = allTagsSlugIdPair.get(slug);
       const posts:Array<BasicPostInterface> = await getPostsByTag(tagName);
       const formattedPage: PageInterface = formatTagsPage(slug, tagName, posts);
      return formattedPage;
     }
}
 

 
 