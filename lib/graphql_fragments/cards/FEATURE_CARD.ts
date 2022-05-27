import IMAGE_FIELDS from "../IMAGE_FIELDS";

const FEATURE_CARD = `
  sys {
    id
  }
  title
  body
  icon{
    ${IMAGE_FIELDS}
  }
`;
export default FEATURE_CARD;