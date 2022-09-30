
import PAGE_HEADER_FIELDS from "./content_blocks/PAGE_HEADER_FIELDS";
import SECTION_HEADER_FIELDS from "./content_blocks/SECTION_HEADER_FIELDS";
import TEXT_BODY_BLOCK from "./content_blocks/TEXT_BODY_BLOCK";
import  IMAGE_FIELDS  from "./IMAGE_FIELDS";
import REPORT_ILLUSTRATION_OVERLAY_SUBSECTION from "./report_blocks/ILLUSTRATION_OVERLAY_SUBSECTION";
import REPORT_HERO_FIELDS from "./report_blocks/REPORT_HERO";
import REPORT_INTRODUCTION from "./report_blocks/REPORT_INTRODUCTION";
import REPORT_SECTION_CUSTOM from "./report_blocks/REPORT_SECTION_CUSTOM";
import SPLIT_IMAGE_TEXT_SECTION from "./report_blocks/SPLIT_IMAGE_TEXT_SECTION";

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
    ${REPORT_HERO_FIELDS}
}
contentCollection(limit:8) {
    items {
        __typename
        
        ... on ReportIntroduction {
            ${REPORT_INTRODUCTION}
        }
        ... on ReportIllustrationOverlaySubsection {
            ${REPORT_ILLUSTRATION_OVERLAY_SUBSECTION}
        }
        ... on ReportSectionCustom {
            ${REPORT_SECTION_CUSTOM}
        }
        ... on ReportSectionSplitImageText {
            ${SPLIT_IMAGE_TEXT_SECTION}
        }
    }
}
`;

export default REPORT_FIELDS;

/*

*/