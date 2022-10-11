import IMAGE_FIELDS from "../IMAGE_FIELDS";
import POST_BLOCK_QUOTE from "../post_blocks/POST_BLOCK_QUOTE";
import POST_IMAGE from "../post_blocks/POST_IMAGE";
import POST_PULL_QUOTE from "../post_blocks/POST_PULL_QUOTE";
import CALLOUT from "./CALLOUT";

export const REPORT_BODY = `
json
links {
  entries {
    block {
      sys {
        id
      }
      __typename
      ... on PostBlockQuote {
        ${POST_BLOCK_QUOTE}
      }
      ... on PostImage {
        ${POST_IMAGE}
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

export const REPORT_BODY_2021 = `
json
links {
  entries {
    block {
      sys {
        id
      }
      __typename
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

export const REPORT_BODY_2019 = `
json
links {
  entries {
    block {
      sys {
        id
      }
      __typename
      ... on PostImage {
        ${POST_IMAGE}
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