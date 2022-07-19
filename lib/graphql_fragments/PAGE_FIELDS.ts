
import CAPABILITIES_SECTION from "./content_blocks/CAPABILITIES_SECTION";
import CONTENT_BLOCK_ARTICLE_LIST from "./content_blocks/CONTENT_BLOCK_ARTICLE_LIST";
import CONTENT_BLOCK from "./content_blocks/CONTENT_BLOCK_LINK_TO_PAGE";
import HIGHLIGHTED_INFORMATION_LIST from "./content_blocks/HIGHLIGHTED_INFORMATION_LIST";
import CTA_BLOCK from "./content_blocks/CTA_BLOCK";
import CUSTOM_BLOCK from "./content_blocks/CUSTOM_BLOCK";
import IMAGE_GALLERY from "./content_blocks/IMAGE_GALLERY";
import PAGE_HEADER_FIELDS from "./content_blocks/PAGE_HEADER_FIELDS";
import QUOTE_BLOCK from "./content_blocks/QUOTE_BLOCK";
import SECTION_HEADER_FIELDS from "./content_blocks/SECTION_HEADER_FIELDS";
import TEXT_BODY_BLOCK from "./content_blocks/TEXT_BODY_BLOCK";
import  IMAGE_FIELDS  from "./IMAGE_FIELDS";
import LIST_BLOCK from "./content_blocks/LIST_BLOCK";
import FLOATING_BUTTON_BLOCK from "./content_blocks/FLOATING_BUTTON_BLOCK";

/*
The page fields should contain metadata about the page as 
well as a collection of all of the content blocks that make up the page

When new content blocks are created in the ```graphql_fragments/content_blocks```, 
they should be updated below as well.

*/


const PAGE_FIELDS = `
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
contentCollection(limit:20) {
    items {
        __typename
        ... on SectionHeader {
            ${SECTION_HEADER_FIELDS}
        }
        ... on ListBlock {
            ${LIST_BLOCK}
        }
        ... on ContentBlockLinkToPage{ 
            ${CONTENT_BLOCK}
        }
        ... on ContentBlockArticleList {
            ${CONTENT_BLOCK_ARTICLE_LIST}
        }
        ... on SectionCtaBlock {
            ${CTA_BLOCK}
        }
        ... on QuoteBlock {
            ${QUOTE_BLOCK}
        }
        ... on ImageGallery {
            ${IMAGE_GALLERY}
        }
        ... on TextBodyBlock {
            ${TEXT_BODY_BLOCK}
        }
        ... on HighlightedInformationList { 
            ${HIGHLIGHTED_INFORMATION_LIST}
        }
        ... on CapabilitiesSection {
            ${CAPABILITIES_SECTION}
        }
        ... on CustomBlock {
            ${CUSTOM_BLOCK}
        }
        ... on FloatingButtonBlock {
            ${FLOATING_BUTTON_BLOCK}
        }
    }
}
`;

export default PAGE_FIELDS;