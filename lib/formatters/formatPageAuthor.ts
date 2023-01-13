import { PageInterface } from "lib/data_models/page_interface";
import { sortPostsByDate } from "./utils";

export function formatAuthorPage(slug, author){
    
    const formattedPage: PageInterface = {
      id: slug,
      slug: `/authors/${slug}`,
      title: author.name,
      description:author.bio,
      socialImage: {
        id: '1XVCel1lt0F1olfgIWgnh1',
        url: 'https://images.ctfassets.net/t2ekr6eg3fr3/1XVCel1lt0F1olfgIWgnh1/219ed4ebe26ec4528c04a834b2b77e8f/Author-Social-V2.png',
        width: 1280,
        height: 720,
        title: 'Author Social',
        description: ''
      },
      isBottomGapRemoved: false,
      pageHeader: {
        id: `${slug}-header`,
        variant:"Secondary",
        title: author.name,
        subtitle:author.role,
      },
      contentBlocks: [
        {
          __typename:"AuthorBioBlock",
          id: `${slug}-bio`,
          ...author
        },
        {
          __typename:"ContentBlockArticleList",
          id: `${slug}-posts`,
          items:  sortPostsByDate(author.linkedFrom.postCollection.items),
          layout:"3 card row"
        }
      ], 
   }
    return formattedPage; 
  }


