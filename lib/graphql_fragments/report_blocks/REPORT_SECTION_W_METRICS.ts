import IMAGE_FIELDS from "../IMAGE_FIELDS";
import METRIC from "./METRIC";
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
metricsCollection {
    items {
        ${METRIC}
    }
}
`;

export default REPORT_SECTION_W_METRICS;