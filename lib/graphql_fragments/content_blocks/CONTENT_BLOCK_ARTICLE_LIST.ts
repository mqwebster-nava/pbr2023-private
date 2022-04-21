import { POST_CORE_FIELDS } from "../POST_FIELDS";


const CONTENT_BLOCK_ARTICLE_LIST = `
title
body
postsCollection(limit:10) {
    items{
        ${POST_CORE_FIELDS}
    }
}
`;

export default CONTENT_BLOCK_ARTICLE_LIST;