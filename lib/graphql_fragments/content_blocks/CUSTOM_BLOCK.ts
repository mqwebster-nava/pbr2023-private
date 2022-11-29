import { POST_BODY } from "../POST_FIELDS";

const CUSTOM_BLOCK = `
sys {
    id
}
title
type
richBody {
    ${POST_BODY}
}
colorTheme
data
`;

export default CUSTOM_BLOCK;