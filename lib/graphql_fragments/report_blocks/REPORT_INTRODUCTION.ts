import { POST_BODY } from "../POST_FIELDS";
import { REPORT_BODY } from "./REPORT_BODY";
import REPORT_SIGNATURE from "./REPORT_SIGNATURE";

const REPORT_INTRODUCTION = `
sys {
    id
}
title
anchor
variant
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

export default REPORT_INTRODUCTION;