import IMAGE_FIELDS from "../IMAGE_FIELDS";

const REPORT_SIGNATURE = `
sys {
    id
}
name
title
titleAbbreviation
width
image {
    ${IMAGE_FIELDS}
}
`;

export default REPORT_SIGNATURE;