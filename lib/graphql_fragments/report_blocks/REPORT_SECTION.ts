import IMAGE_FIELDS from "../IMAGE_FIELDS";
import REPORT_ILLUSTRATION_OVERLAY_SUBSECTION from "./ILLUSTRATION_OVERLAY_SUBSECTION";


const REPORT_SECTION = `
sys {
    id
}
title
anchor
body
variant
image {
    ${IMAGE_FIELDS}
}
reportSubsectionsCollection(limit:7) {
    items{
     __typename
     ... on ReportIllustrationOverlaySubsection {
         ${REPORT_ILLUSTRATION_OVERLAY_SUBSECTION}
     }
     
    }
 }
`;

export default REPORT_SECTION;