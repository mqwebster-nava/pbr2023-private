import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { TAG_FIELDS } from "../POST_FIELDS";

const CONTENT_CARD = `
  sys {
    id
    firstPublishedAt
  }
  title
  kicker
  date
  slug
  contentType
  keepHidden
  contentTagsV2Collection(limit:15) {
    items {
        ${TAG_FIELDS}
    }
  shortSummary
  promoImage{
    ${IMAGE_FIELDS}
  }
`;

export default CONTENT_CARD;