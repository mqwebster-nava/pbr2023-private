import { IMAGE_FIELDS } from "../IMAGE_FIELDS";

const PAGE_HEADER_FIELDS = `
sys {
    id
}
title
subtitle
variant
image {
    ${IMAGE_FIELDS}
}
pattern {
    ${IMAGE_FIELDS}
}
`;

export default PAGE_HEADER_FIELDS;