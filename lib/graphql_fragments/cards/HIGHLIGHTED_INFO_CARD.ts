import IMAGE_FIELDS from "../IMAGE_FIELDS";

const HIGHLIGHTED_INFO_CARD = `
  sys {
    id
  }
  title
  body
  icon{
    ${IMAGE_FIELDS}
  }
`;
export default HIGHLIGHTED_INFO_CARD;