
import { POST_BODY } from "../POST_FIELDS";

const TEXT_BODY_BLOCK = `
sys {
    id
  }
title
richBody{
  ${POST_BODY}
}
`;
export default TEXT_BODY_BLOCK;
