

interface FeatureCardInterface {
    id: string;
    icon: string; // TODO what to do with the icon selection (?),
    title: string;
    body: string;
}

const FeatureCard = ({id, icon, title, body}:FeatureCardInterface) => {
    return (<div>FEATURE CARD</div>);
}


export default FeatureCard;