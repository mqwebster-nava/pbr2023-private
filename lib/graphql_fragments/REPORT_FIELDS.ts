
import PAGE_HEADER_FIELDS from "./content_blocks/PAGE_HEADER_FIELDS";
import SECTION_HEADER_FIELDS from "./content_blocks/SECTION_HEADER_FIELDS";
import TEXT_BODY_BLOCK from "./content_blocks/TEXT_BODY_BLOCK";
import  IMAGE_FIELDS  from "./IMAGE_FIELDS";
import REPORT_ILLUSTRATION_OVERLAY_SUBSECTION from "./report_blocks/ILLUSTRATION_OVERLAY_SUBSECTION";
import REPORT_CONCLUSION from "./report_blocks/REPORT_CONCLUSION";

/*
The page fields should contain metadata about the page as 
well as a collection of all of the content blocks that make up the page

When new content blocks are created in the ```graphql_fragments/content_blocks```, 
they should be updated below as well.

*/


const REPORT_FIELDS = `
sys {
  id
}
title
description
slug
socialImage {
    ${IMAGE_FIELDS}
}
pageHeader {
    ${PAGE_HEADER_FIELDS}
}
contentCollection(limit:8) {
    items {
        __typename
        ... on SectionHeader {
            ${SECTION_HEADER_FIELDS}
        }
        ... on TextBodyBlock {
            ${TEXT_BODY_BLOCK}
        }
        ... on ReportIllustrationOverlaySubsection {
            ${REPORT_ILLUSTRATION_OVERLAY_SUBSECTION}
        }
        ... on ReportConclusion {
            ${REPORT_CONCLUSION}
        }
    }
}
`;

export default REPORT_FIELDS;