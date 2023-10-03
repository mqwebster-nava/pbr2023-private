import IMAGE_FIELDS from "../IMAGE_FIELDS";
import { POST_BODY } from "../POST_FIELDS";
import CALLOUT from "./CALLOUT";
import { REPORT_BODY} from "./REPORT_BODY";


const REPORT_ILLUSTRATION_OVERLAY_STORY = `
sys {
    id
}
title
hideStory
anchor
intro {
    ${REPORT_BODY}
}
body {
    ${REPORT_BODY}
}
illustration{
    ${IMAGE_FIELDS}
}
contextIllustration{
    ${IMAGE_FIELDS}
}
storyImageStepsCollection(limit: 7) {
    items{
        ${IMAGE_FIELDS}
    }
}
featuredCallOut {
    ${CALLOUT}
}
linkedPostUrl
imageCaption
`;

export default REPORT_ILLUSTRATION_OVERLAY_STORY;