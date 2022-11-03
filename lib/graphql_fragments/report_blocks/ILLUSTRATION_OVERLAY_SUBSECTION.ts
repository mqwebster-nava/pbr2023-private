import ILLUSTRATION_OVERLAY_STORY from "./ILLUSTRATION_OVERLAY_STORY";


const REPORT_ILLUSTRATION_OVERLAY_SUBSECTION = `
sys {
    id
}
title
anchor
body
colorTheme
themeNum
storiesCollection(limit:7) {
    items{
     __typename
     ... on ReportIllustrationOverlayStory {
         ${ILLUSTRATION_OVERLAY_STORY}
     }
     
    }
 }
`;

export default REPORT_ILLUSTRATION_OVERLAY_SUBSECTION;