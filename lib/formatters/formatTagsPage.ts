import { PageInterface } from "shared_interfaces/page_interface";
import { capitalize } from "utils/utils";
import { sortPostsByDate } from "./utils";



export function formatTagsPage(slug, tagName, posts){
    
    const formattedPage: PageInterface = {
      id: slug,
      slug: `/tags/${slug}`,
      title: tagName,
      socialImage: {
          id: '37ezJD5SPWfjLlm0n4swuq',
          url: 'https://images.ctfassets.net/t2ekr6eg3fr3/37ezJD5SPWfjLlm0n4swuq/ac58529bd710971907e89e9e03b865cd/Tag-Social-V2.png',
          width: 1280,
          height: 720,
          title: 'Tag Social',
          description: ''
        },
      description:`Posts related to ${tagName}`,
      isBottomCTA: false,
      pageHeader: {
        id: `${slug}-header`,
        variant:"Secondary",
        title:"Related articles",
        subtitle:capitalize(tagName),
      },
      contentBlocks: [
        {
          __typename:"ContentBlockArticleList",
          id: `${slug}-posts`,
          items:  sortPostsByDate(posts),
          layout:"3 card row"
        }
      ],
   }
    return formattedPage; 
  }