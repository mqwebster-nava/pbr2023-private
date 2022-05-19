/*
Post gets taken in by the pages
*/

import IMAGE_FIELDS from "./IMAGE_FIELDS";
import POST_CAPTION_TEXT from "./post_blocks/POST_CAPTION_TEXT";
import POST_BLOCK_QUOTE from "./post_blocks/POST_BLOCK_QUOTE";
import POST_IMAGE from "./post_blocks/POST_IMAGE";
import POST_PULL_QUOTE from "./post_blocks/POST_PULL_QUOTE";
import POST_SUMMARY_SECTION from "./post_blocks/POST_SUMMARY_SECTION";

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
                ${POST_CAPTION_TEXT}
              }
              ... on PostBlockQuote {
                ${POST_BLOCK_QUOTE}
              }
              ... on PostPullQuote {
                ${POST_PULL_QUOTE}
              }
              ... on PostSummarySection {
                ${POST_SUMMARY_SECTION}
              }
              ... on PostImage {
                ${POST_IMAGE}
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







