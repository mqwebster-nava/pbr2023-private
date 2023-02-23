
  import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import CONTENT_CARD from "lib/graphql_fragments/cards/CONTENT_CARD";
  import { POST_CORE_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
  
  export  async function getPosts(options=defaultOptions) {
    
    // first get all the typical posts
    const variables = { keepHidden:false };
    const query =
    ` query GetPosts( $keepHidden: Boolean!)
    {
      postCollection(limit: 120, where: {  keepHidden: $keepHidden }  ) 
      {
        items {
          ${POST_CORE_FIELDS}
        }
      }
    }
  `;
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    
    // then get the 'wild card' posts
    const query2 =
    ` query GetWildcardPosts( $keepHidden: Boolean!)
    {
      contentCardCollection(limit: 20, where: {  keepHidden: $keepHidden }  ) 
      {
        items {
          ${CONTENT_CARD}
        }
      }
    }
  `;
    const response2 = await callContentful(query2, variables, options);
    if ("errors" in response2){
      console.error(response2);
      return null;
    }
    const r2 = response2.data.contentCardCollection.items.map((i)=> {return {contentTags:[], ...i}})
    let posts = [...response.data.postCollection.items, ...r2];

    return posts;
  }