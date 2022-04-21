/*
Post gets taken in by the pages
*/

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
    clientName
    promoImage {
      sys {
        id
      }
      url
      width
      height
      title
      description
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
    hideSideNav
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







