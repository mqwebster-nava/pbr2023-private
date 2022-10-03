import IMAGE_FIELDS from "../IMAGE_FIELDS";

const POST_EVENT_SPEAKER =`
    name
    role
    company
    image {
        ${IMAGE_FIELDS}
    }
`;
export default POST_EVENT_SPEAKER;
