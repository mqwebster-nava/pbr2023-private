import { REPORT_BODY } from "./REPORT_BODY";

const REPORT_SECTION_CUSTOM = `
sys {
    id
}
title
anchor
type
colorTheme
richBody{
   ${REPORT_BODY}
  }
`;

export default REPORT_SECTION_CUSTOM;