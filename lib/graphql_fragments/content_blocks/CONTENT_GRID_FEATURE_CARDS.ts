
import FEATURE_CARD from "../cards/FEATURE_CARD";
const CONTENT_GRID_FEATURE_CARDS = `
sys {
    id
}
title
colorTheme
featureCardsCollection(limit:10) {
    items{
        __typename
        ... on FeatureCard {
            ${FEATURE_CARD}
        }
    }
}
`;

export default CONTENT_GRID_FEATURE_CARDS;