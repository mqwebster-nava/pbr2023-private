import CONTENT_CARD from "../cards/CONTENT_CARD";
import { POST_CORE_FIELDS } from "../POST_FIELDS";


const CONTENT_BLOCK_ARTICLE_LIST = `
sys {
    id
}
title
body
layout
buttonPath
buttonText
type
postsCollection(limit:10) {
    items{
        __typename
        ... on Post {
            ${POST_CORE_FIELDS}
        }
        ... on ContentCard {
            ${CONTENT_CARD}
        }
    }
}
`;

export default CONTENT_BLOCK_ARTICLE_LIST;