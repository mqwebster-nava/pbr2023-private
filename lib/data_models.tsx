/*
Post gets taken in by the pages
*/
export interface BasicPostInterface{
    id:string;
    slug:string;
    title:string;
    date:string;
    contentType:string;
    contentTags:Array<string>;
    shortSummary:string;
}
export interface FullPostInterface extends BasicPostInterface{
    longSummary:string;
    authors:Array<AuthorPostInterface>;
    body:any;
}

export interface AuthorPostInterface{
    name:string;
    slug:string;
    role?:string;
    bio?:string;
    posts?:Array<BasicPostInterface>;
}


export const POST_CORE_FIELDS = `
    sys {
      id
    }
    date
    title
    slug
    contentType
    shortSummary
    contentTags
    promoImage {
      sys {
        id
      }
      url
    }
`;
export const AUTHOR_CORE_FIELDS =`
    name
    role
    bio
    slug
`
export const AUTHOR_ALL_FIELDS =`
    ${AUTHOR_CORE_FIELDS}
    linkedFrom {
        postCollection{
        items{
            ${POST_CORE_FIELDS}
        }
        }
    }
`
export const POST_ALL_FIELDS = `
    ${POST_CORE_FIELDS}
    longSummary
    authorsCollection {
        items {
            ${AUTHOR_CORE_FIELDS}
        }
    }
    body {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              width
              height
              description
            }
          }
        }
      }

`;






