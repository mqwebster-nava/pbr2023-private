import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { REPORT_BODY } from "./REPORT_BODY";

const SPLIT_IMAGE_TEXT_SECTION = `
sys {
    id
}
title
anchor
textSide
colorTheme
image {
    ${IMAGE_FIELDS}
}
introduction {
    ${REPORT_BODY}
}
richBody {
    ${REPORT_BODY}
}
`;

export default SPLIT_IMAGE_TEXT_SECTION;