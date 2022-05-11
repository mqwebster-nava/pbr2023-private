/*
Post gets taken in by the pages
*/

import IMAGE_FIELDS from "./IMAGE_FIELDS";
import CAPTION_TEXT from "./post_blocks/CAPTION_TEXT";
import POST_BLOCK_QUOTE from "./post_blocks/POST_BLOCK_QUOTE";
import POST_PULL_QUOTE from "./post_blocks/POST_PULL_QUOTE";

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
    image {
      ${IMAGE_FIELDS}
    }
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
          entries {
            block {
              sys {
                id
              }
              __typename
              ... on CaptionText {
                ${CAPTION_TEXT}
              }
              ... on PostBlockQuote {
                ${POST_BLOCK_QUOTE}
              }
              ... on PostPullQuote {
                ${POST_PULL_QUOTE}
              }
            }
          }
          assets {
            block {
              ${IMAGE_FIELDS}
            }
          }
        }
      }
`;







