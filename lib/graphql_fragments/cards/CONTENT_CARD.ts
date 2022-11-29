import IMAGE_FIELDS from "../IMAGE_FIELDS";

const CONTENT_CARD = `
  sys {
    id
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