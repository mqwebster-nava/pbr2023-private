

interface FeatureCardInterface {
    id?: string;
    icon?: string; // TODO what to do with the icon selection (?),
    title: string;
    body: string;
}

const FeatureCard = ({id, icon, title, body}:FeatureCardInterface) => {
    return (
    <div className="bg-navy-900 px-xl py-4xl h-full ">
        <p className={"type-preset-4 font-sans font-bold text-white"}>
            <span className="text-purple-100 ">{`${title} `}</span>
            {body}
        </p>
    </div>
    );
}


export default FeatureCard;