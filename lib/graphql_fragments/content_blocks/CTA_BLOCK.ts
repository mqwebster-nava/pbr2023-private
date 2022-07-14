import IMAGE_FIELDS from "../IMAGE_FIELDS";


const CTA_BLOCK = `
sys {
    id
}
title
body
buttonText
buttonPath
image {
    ${IMAGE_FIELDS}
}
`;

export default CTA_BLOCK;