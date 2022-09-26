import IMAGE_FIELDS from "../IMAGE_FIELDS";
import POST_IMAGE from "../post_blocks/POST_IMAGE";
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
      ... on PostImage {
        ${POST_IMAGE}
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