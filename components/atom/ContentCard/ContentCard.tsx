import classNames from "classnames";
//import CardWithImage from "./CardWithImage";
import HighlightedCard from "./HighlightedCard";
//import LargeTextCard from "./LargeTextCard";
import Image from "next/image";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";

// import brandTerrain1 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain1-Medium-White-V01@4x 1.png";
// import brandTerrain2 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain2-Medium-White-V01@4x 1.png";
// import brandTerrain3 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.png";
// import brandDirectional from "public/images/brand-patterns/Nava-Brand Pattern-Direction1-Medium-White-V01@4x 2.png";

const brandTerrain1 = "/images/brand-patterns/Nava-Brand Pattern-Terrain1-Medium-White-V01@4x 1.png";
const brandTerrain2 = "/images/brand-patterns/Nava-Brand Pattern-Terrain2-Medium-White-V01@4x 1.png";
const brandTerrain3 = "/images/brand-patterns/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.png";
const brandDirectional = "/images/brand-patterns/Nava-Brand Pattern-Direction1-Medium-White-V01@4x 2.png";

import { ContentfulImageAsset } from "shared_interfaces/post_interface";


type CardSize = "half" |"quarter" | "full" | "third";
export interface ContentCardInterface {
  title: string;
  path: string;
  summary?: any;
  kicker?:string;
  size?:CardSize
  image?: ContentfulImageAsset;
  cycleNum?: number;
}

const ContentCard = (props: ContentCardInterface) => {
  if (props.size=="full") return <HighlightedCard {...props} />;
  //if (props.type === "Toolkit") return <LargeTextCard {...props} />;
  return <DefaultContentCard {...props} />;
};

const DefaultContentCard  = ({
  title,
  path,
  image = null,
  cycleNum = Math.floor(Math.random() * 4),
  summary,
  size = "quarter",
  kicker
}: ContentCardInterface) => {

  cycleNum = cycleNum % 3;
  let color = "navy"
  const backgroundColor = "bg-navy-700";

  const titleSize = classNames({
    "type-preset-6": size=="quarter" ||size=="third",
    "type-preset-6 lg:type-preset-4 ":  size=="half",
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
      src={image ? image.url : pattern}
      alt={image.description}
    ></Image>)
  }
  const PatternSquare = () => {
    return ( <div
      className={`${backgroundColor} aspect-[16/9] flex flex-col`}
    >
      <div className={`bg-${color}-900 h-1/3 w-full flex justify-end`}>
        <div className={`bg-${color}-800 h-full aspect-[1/1] `}></div>
        <div className={`bg-${color}-500 h-full aspect-[1/1]`}></div>
        <div className={`bg-${color}-200 h-full aspect-[1/1]`}></div>
      </div>
      <div className="flex h-2/3 justify-end">
      <div className={`bg-${color}-800 h-full aspect-[1/1] `}></div>
       
      </div>
    </div>)
  }
 

  return (
    <a href={`${path}`} className="group flex flex-col sm:flex-row gap-md md:flex-col h-full ">
      <div className={` w-full sm:w-1/3 md:w-full group-hover:brightness-75`}>
        {image? <ImageSquare/> : <PatternSquare/>}
      </div>
      <div className="w-full sm:w-2/3 md:w-full">
      {kicker && <div className=" type-preset-8">{kicker}</div>}
        <h5 className={`${titleSize} mb-2  font-bold tracking-tight text-gray-900 font-sans group-hover:text-sage-400`}>
          {title}
        </h5>
        <p className="type-preset-6 font-sans text-gray-700 ">
          {summary}
        </p>
      </div>
    </a>
  );
};

export default ContentCard;

