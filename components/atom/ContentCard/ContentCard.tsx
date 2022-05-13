import classNames from "classnames";
//import CardWithImage from "./CardWithImage";
import HighlightedCard from "./HighlightedCard";
//import LargeTextCard from "./LargeTextCard";
import Image from "next/image";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";

import brandTerrain1 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain1-Medium-White-V01@4x 1.png";
import brandTerrain2 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain2-Medium-White-V01@4x 1.png";
import brandTerrain3 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.png";
import brandDirectional from "public/images/brand-patterns/Nava-Brand Pattern-Direction1-Medium-White-V01@4x 2.png";

import { ContentfulImageAsset } from "shared_interfaces/post_interface";


type CardSize = "half" |"quarter" | "full" | "third";
export interface ContentCardInterface {
  title: string;
  path: string;
  type: string;
  kicker?:string;
  size?:CardSize
  promoImage?: ContentfulImageAsset;
  cycleNum?: number;
}

const ContentCard: React.FC<ContentCardInterface> = (props) => {
  if (props.size=="full") return <HighlightedCard {...props} />;
  //if (props.type === "Toolkit") return <LargeTextCard {...props} />;
  return <DefaultContentCard {...props} />;
};

const DefaultContentCard: React.FC<ContentCardInterface> = ({
  title,
  path,
  promoImage = null,
  type,
  cycleNum = Math.floor(Math.random() * 4),
  children,
  size = "quarter",
  kicker
}) => {

  cycleNum = cycleNum % 3;
  let colors = ["purple", "plum", "gold"];
  let color = "navy"
  //colors[cycleNum];
  // const backgroundColor = classNames({
  //   "bg-purple-800": cycleNum % 3 == 0,
  //   "bg-plum-400": cycleNum % 3 == 1,
  //   "bg-gold-800": cycleNum % 3 == 2,
  // });
  const backgroundColor = "bg-navy-700";


  const titleSize = classNames({
    "type-preset-6": size=="quarter" ||size=="third",
    "type-preset-4":  size=="half",
   
  });
  const pattern =
    cycleNum % 3 == 0
      ? brandTerrain1
      : cycleNum % 2 == 0
      ? brandTerrain2
      : brandTerrain3;

  const ImageSquare = () => {
    return ( <Image
      layout="responsive"
      width={16}
      height={9}
      className={`${backgroundColor} object-cover w-full `}
      src={promoImage ? promoImage.url : pattern}
      alt=""
    ></Image>)
  }
  const PatternSquare = () => {
    return ( <div
      className={`${backgroundColor} aspect-[16/9] flex flex-col`}
    >
      <div className={`bg-${color}-900 h-1/3 w-full flex justify-end`}>
        <div className=" h-full aspect-[1/1]">
          <Image src={brandDirectional}/>
        </div>
        <div className={`bg-${color}-500 h-full aspect-[1/1]`}> <Image src={brandTerrain1}/></div>
        <div className={`bg-${color}-200 h-full aspect-[1/1]`}></div>
      </div>
      <div className="flex h-2/3 justify-end">
        <div className={"h-full aspect-[1/1]"}>
         <Image src={brandDirectional} className="object-cover"/>
         </div>
      </div>
    </div>)
  }
 
  const ToolkitSquare = () => {
    return ( <div
      className={`bg-sage-200 aspect-[16/9] flex flex-col`}
    >
      
    </div>)
  }
 


  return (
    <a href={`${path}`} className="group flex flex-col sm:flex-row gap-md md:flex-col h-full ">
    
      <div className={` w-full sm:w-1/3 md:w-full group-hover:brightness-75`}>
     
        {promoImage? <ImageSquare/> : type==="Toolkit"? <ToolkitSquare/>: <PatternSquare/>}
      </div>
      <div className="w-full sm:w-2/3 md:w-full">
      {kicker && <div className="uppercase type-preset-8">{kicker}</div>}
        <h5 className={`${titleSize} mb-2  font-bold tracking-tight text-gray-900 font-sans group-hover:text-sage-400`}>
          {title}
        </h5>
        <p className="type-preset-6 font-sans text-gray-700 dark:text-gray-400">
          {children}
        </p>
      </div>
    </a>
  );
};



export default ContentCard;
