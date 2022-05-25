
import { POST_BODY } from "../POST_FIELDS";

const TIMELINE_SECTION = `
sys {
    id
  }
year
richBody{
  ${POST_BODY}
}
`;
export default TIMELINE_SECTION;
