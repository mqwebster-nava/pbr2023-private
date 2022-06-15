import IMAGE_FIELDS from "../IMAGE_FIELDS";

const IMAGE_GALLERY = `
sys {
    id
}
colorTheme
layout
image {
    ${IMAGE_FIELDS}
}
imagesCollection {
    items {
        ${IMAGE_FIELDS}
    }
}
`;

export default IMAGE_GALLERY;