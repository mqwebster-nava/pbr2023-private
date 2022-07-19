
import HIGHLIGHTED_INFO_CARD from "../cards/HIGHLIGHTED_INFO_CARD";
const HIGHLIGHTED_INFORMATION_LIST = `
sys {
    id
}
highlightedInfoCardsCollection(limit:10) {
    items{
        __typename
        ... on HighlightedInfoCard {
            ${HIGHLIGHTED_INFO_CARD}
        }
    }
}
`;

export default HIGHLIGHTED_INFORMATION_LIST;