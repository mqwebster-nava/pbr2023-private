import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { POST_BODY } from "../POST_FIELDS";
import CALLOUT from "./CALLOUT";
import { REPORT_BODY, REPORT_BODY_2021 } from "./REPORT_BODY";


const REPORT_ILLUSTRATION_OVERLAY_STORY = `
sys {
    id
}
title
hideStory
anchor
intro {
    ${REPORT_BODY_2021}
}
body {
    ${REPORT_BODY_2021}
}
illustration{
    ${IMAGE_FIELDS}
}
contextIllustration{
    ${IMAGE_FIELDS}
}
featuredCallOut {
    ${CALLOUT}
}
`;

export default REPORT_ILLUSTRATION_OVERLAY_STORY;