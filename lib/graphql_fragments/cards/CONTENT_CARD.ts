import IMAGE_FIELDS from "../IMAGE_FIELDS";

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
  contentTags
  shortSummary
  promoImage{
    ${IMAGE_FIELDS}
  }
`;

export default CONTENT_CARD;