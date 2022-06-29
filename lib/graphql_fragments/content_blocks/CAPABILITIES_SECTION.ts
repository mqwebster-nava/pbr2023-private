import CAPABILITIES_CARD from "../cards/CAPABILITIES_CARD";

const CAPABILITIES_SECTION = `
sys {
    id
}
title
capabilityTitle
body
capabilitiesCollection(limit:7) {
   items{
    __typename
    ... on CapabilitiesCard {
        ${CAPABILITIES_CARD}
    }
    
   }
}
`;

export default CAPABILITIES_SECTION;