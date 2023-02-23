/*
Post gets taken in by the pages
*/

import IMAGE_FIELDS from "./IMAGE_FIELDS";
import POST_CAPTION_TEXT from "./post_blocks/POST_CAPTION_TEXT";
import POST_BLOCK_QUOTE from "./post_blocks/POST_BLOCK_QUOTE";
import POST_IMAGE from "./post_blocks/POST_IMAGE";
import POST_PULL_QUOTE from "./post_blocks/POST_PULL_QUOTE";
import POST_SUMMARY_SECTION from "./post_blocks/POST_SUMMARY_SECTION";
import EMBEDDED_VIDEO from "./post_blocks/EMBEDDED_VIDEO";
import CALLOUT from "./report_blocks/CALLOUT";
import EVENT_INFO from "./post_blocks/EVENT_INFO";


export const TAG_FIELDS =`
    name
    type
`

export const POST_CORE_FIELDS = `
    sys {
      id
      firstPublishedAt
    }
    date
    title
    slug
    contentType
    shortSummary
    contentTagsV2Collection(limit:8) {
      items {
          ${TAG_FIELDS}
      }
  }
    clientName
    promoImage {
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
        postCollection(limit:10){
        items{
            __typename
            ${POST_CORE_FIELDS}
        }
        }
    }
`;
export const TAGS_POST_FIELDS =`
    ${TAG_FIELDS}
    linkedFrom {
        postCollection(limit:10){
        items{
            __typename
            ${POST_CORE_FIELDS}
        }
        }
    }
`;

export const POST_BODY = `

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
        ... on EmbeddedVideo {
          ${EMBEDDED_VIDEO}
        }
        ... on ReportCallout {
          ${CALLOUT}
        }
      }
    }
    assets {
      block {
        ${IMAGE_FIELDS}
      }
      hyperlink{
        sys {
          id
        }
        title
        contentType
        description
        url
      }
    }
  }

`


export const POST_ALL_FIELDS = `
    ${POST_CORE_FIELDS}
    longSummary
    hideSideNav
    hideHeroPattern
    authorsCollection(limit:5) {
        items {
            ${AUTHOR_CORE_FIELDS}
        }
    }
    body {
      ${POST_BODY}
    }
    socialImage {
      ${IMAGE_FIELDS}
    }
    leadImage {
      ${IMAGE_FIELDS}
    }
    eventInfo {
      ${EVENT_INFO}
    }
`;







