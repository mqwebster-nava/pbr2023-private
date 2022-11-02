import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { REPORT_BODY } from "./REPORT_BODY";

const REPORT_SECTION_W_METRICS = `
sys {
    id
}
title
anchor
image {
    ${IMAGE_FIELDS}
}
intro
colorTheme
richBody{
   ${REPORT_BODY}
  }
sectionMetrics
`;

export default REPORT_SECTION_W_METRICS;