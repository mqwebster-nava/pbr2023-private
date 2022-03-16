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
  name: string;
  title: string;
}

export interface PageInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export const PAGE_HEADER_FIELDS = `
    title
    subtitle
`;

const SECTION_HEADER_FIELDS = `
    title
    subtitle
`;
const CONTENT_BLOCK_TEXT = `
    title
    body
`;
const CONTENT_BLOCK_ARTICLE_LIST = `
    title
    body
    postsCollection{
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
    body {
        json
        links {
            entries {
                block {
                    sys {
                        id
                    }
                    __typename
                    ... on SectionHeader {
                        ${SECTION_HEADER_FIELDS}
                    }
                    ... on SectionContentBlockText {
                        ${CONTENT_BLOCK_TEXT}
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
        }
    }
`;