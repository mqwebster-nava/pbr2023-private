import { POST_BODY } from "../POST_FIELDS";

const REPORT_SECTION_CUSTOM = `
sys {
    id
}
title
anchor
type
colorTheme
richBody{
    ${POST_BODY}
  }
`;

export default REPORT_SECTION_CUSTOM;