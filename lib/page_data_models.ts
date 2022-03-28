/*
Post gets taken in by the pages
*/

import { POST_CORE_FIELDS } from "./post_data_models";

export interface PageComponentInterface {
  title: string;
  body: string;
  buttonText?: string;
  buttonUrl?: string;
  componentType: string;
}
export interface PageHeaderInterface {
  
  title: string;
  subtitle:string;
  backgroundImage:any;

}

export interface PageInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  pageHeader: PageHeaderInterface;
  contentBlocks: any;
}

export const PAGE_HEADER_FIELDS = `
    title
    subtitle
    backgroundImage {
        sys {
          id
        }
        url
        width
        height
        title
        description
    }
`;

const SECTION_HEADER_FIELDS = `
    title
    subtitle
`;
const CONTENT_BLOCK_TEXT = `
    title
    body
`;
const CONTENT_BLOCK_LINK_TO_PAGE = `
    title
    buttonText
    buttonPath
    type
    body
    image {
        sys {
          id
        }
        url
        width
        height
        title
        description
    }

`;
const CONTENT_BLOCK_ARTICLE_LIST = `
    title
    body
    postsCollection(limit:10) {
        items{
            ${POST_CORE_FIELDS}
        }
    }
`;

const CTA_BLOCK = `
    title
    body
    type
    buttonText
    buttonPath
`;

const QUOTE_BLOCK = `
    body
    authorName
    authorRole
`;

export const PAGE_FIELDS = `
    sys {
      id
    }
    title
    description
    slug
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

   // ... on ContentBlockArticleList {
            //     ${CONTENT_BLOCK_ARTICLE_LIST}
            // }
            