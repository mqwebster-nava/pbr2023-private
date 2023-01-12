import IMAGE_FIELDS from "../IMAGE_FIELDS";

const CONTENT_CARD = `
  sys {
    id
    firstPublishedAt
  }
  title
  summary
  kicker
  image{
    ${IMAGE_FIELDS}
  }
  date
  path
`;
export default CONTENT_CARD;