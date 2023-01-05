
import { ContentfulImageAsset } from "lib/data_models/post_interface";
import Image from "next/image";
export interface HighlightedInfoCardProps {
    id?: string;
    icon?: ContentfulImageAsset; // TODO what to do with the icon selection (?),
    title: string;
    body: string;
}

export const defaultIcon:ContentfulImageAsset = 
    {
        "id": "3hBHof0lL9fl2Ui7QQdGnD",
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3FosxQMrAo3C045k4ndLpv/c2fb4aec736d8694bd2082df1ddf137e/Customer_experiences_icon_V2.svg",
        "width": 38,
        "height": 38,
        "title": "icon-house",
        "description": "Icon of a house"
    }


const HighlightedInfoCard = ({id, icon, title, body}:HighlightedInfoCardProps) => {
   
    icon = icon ?? defaultIcon;
    return (
    <div className={`
            bg-plum-50 h-full 
            px-2xl  
            pt-2xl  md:pb-4xl xl:pb-5xl `}>
          <Image 
            src={icon.url} 
            height={"36px"}
            width={"36px"}
            alt={""}
            ></Image>
        <p className={"type-preset-4 md:type-preset-5 lg:type-preset-4 font-sans font-bold text-purple-900 pt-lg pb-4xl xl:pb-5xl"}>
            <span className="text-purple-500 ">{`${title} `}</span>
            {body}
        </p>
    </div>
    );
}


export default HighlightedInfoCard;