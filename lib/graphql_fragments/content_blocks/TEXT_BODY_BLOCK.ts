
import { POST_BODY } from "../POST_FIELDS";

const TEXT_BODY_BLOCK = `
sys {
    id
  }
title
type
richBody{
  ${POST_BODY}
}
colorTheme
`;
export default TEXT_BODY_BLOCK;
