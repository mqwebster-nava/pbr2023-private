/*
Post gets taken in by the pages
*/

import { IMAGE_FIELDS } from "./IMAGE_FIELDS";

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
      ${IMAGE_FIELDS}
    }
    leadImage {
      ${IMAGE_FIELDS}
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
              ${IMAGE_FIELDS}
            }
          }
        }
      }
`;







