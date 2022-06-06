import IMAGE_FIELDS from "../IMAGE_FIELDS";

const POST_IMAGE =`
    border
    image {
        ${IMAGE_FIELDS}
    }
    caption
    attribution
`;
export default POST_IMAGE;
