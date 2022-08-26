import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { POST_BODY } from "../POST_FIELDS";


const REPORT_ILLUSTRATION_OVERLAY_STORY = `
sys {
    id
}
title
shortTitle
anchor
intro {
    ${POST_BODY}
}
body {
    ${POST_BODY}
}
illustration{
    ${IMAGE_FIELDS}
}
contextIllustration{
    ${IMAGE_FIELDS}
}
callOut {
    ${IMAGE_FIELDS}
}
`;

export default REPORT_ILLUSTRATION_OVERLAY_STORY;