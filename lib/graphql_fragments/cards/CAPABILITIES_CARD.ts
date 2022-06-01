import IMAGE_FIELDS from "../IMAGE_FIELDS";

const CAPABILITIES_CARD = `
  sys {
    id
  }
  body
  icon{
    ${IMAGE_FIELDS}
  }
`;
export default CAPABILITIES_CARD;