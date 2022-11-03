import { REPORT_BODY } from "./REPORT_BODY";
import REPORT_SIGNATURE from "./REPORT_SIGNATURE";

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
  signaturesCollection {
    items {
        ${REPORT_SIGNATURE}
    }
}
`;

export default REPORT_SECTION_CUSTOM;
