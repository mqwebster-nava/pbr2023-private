import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
interface FeatureCardInterface {
    id?: string;
    icon?: ContentfulImageAsset; // TODO what to do with the icon selection (?),
    title: string;
    body: string;
}

const defaultIcon:ContentfulImageAsset = 
    {
       
        "id": "3hBHof0lL9fl2Ui7QQdGnD",
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3hBHof0lL9fl2Ui7QQdGnD/031cc4c1e72fb98b335ae54f3e2840eb/icon-house.svg",
        "width": 38,
        "height": 38,
        "title": "icon-house",
        "description": "Icon of a house"
    }


const FeatureCard = ({id, icon, title, body}:FeatureCardInterface) => {
   
    icon = icon ?? defaultIcon;
    return (
    <div className="bg-navy-900 px-xl py-4xl h-full ">
          <Image 
            src={icon.url} 
            height={"36px"}
            width={"36px"}
            alt=""
            ></Image>
        <p className={"type-preset-4 font-sans font-bold text-white pt-md"}>
            <span className="text-purple-100 ">{`${title} `}</span>
            {body}
        </p>
    </div>
    );
}


export default FeatureCard;