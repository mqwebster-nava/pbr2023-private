import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { REPORT_BODY, REPORT_BODY_2019 } from "./REPORT_BODY";

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
    ${REPORT_BODY_2019}
}
richBody {
    ${REPORT_BODY_2019}
}
`;

export default SPLIT_IMAGE_TEXT_SECTION;