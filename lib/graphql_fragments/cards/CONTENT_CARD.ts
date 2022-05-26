import IMAGE_FIELDS from "../IMAGE_FIELDS";

const CONTENT_CARD = `
  sys {
    id
  }
  title
  summary
  kicker
  image{
    ${IMAGE_FIELDS}
  }
  path
`;
export default CONTENT_CARD;