
import CONTENT_BLOCK_ARTICLE_LIST from "./content_blocks/CONTENT_BLOCK_ARTICLE_LIST";
import CONTENT_BLOCK_LINK_TO_PAGE from "./content_blocks/CONTENT_BLOCK_LINK_TO_PAGE";
import CONTENT_BLOCK_TEXT from "./content_blocks/CONTENT_BLOCK_TEXT";
import CTA_BLOCK from "./content_blocks/CTA_BLOCK";
import PAGE_HEADER_FIELDS from "./content_blocks/PAGE_HEADER_FIELDS";
import QUOTE_BLOCK from "./content_blocks/QUOTE_BLOCK";
import SECTION_HEADER_FIELDS from "./content_blocks/SECTION_HEADER_FIELDS";
import { IMAGE_FIELDS } from "./IMAGE_FIELDS";

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
contentCollection {
    items {
        __typename
        ... on SectionHeader {
            ${SECTION_HEADER_FIELDS}
        }
        ... on SectionContentBlockText {
            ${CONTENT_BLOCK_TEXT}
        }
        ... on ContentBlockLinkToPage{
            ${CONTENT_BLOCK_LINK_TO_PAGE}
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
      
    }
}
`;

export default PAGE_FIELDS;