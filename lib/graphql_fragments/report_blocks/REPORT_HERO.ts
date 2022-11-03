import IMAGE_FIELDS from "../IMAGE_FIELDS";

const REPORT_HERO_FIELDS = `
sys {
    id
}
title
subtitle
variant
image {
    ${IMAGE_FIELDS}
}
buttonPath
buttonText
`;

export default REPORT_HERO_FIELDS;