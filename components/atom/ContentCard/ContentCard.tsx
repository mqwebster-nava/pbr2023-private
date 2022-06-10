import classNames from "classnames";
//import CardWithImage from "./CardWithImage";
import HighlightedCard from "./HighlightedCard";
//import LargeTextCard from "./LargeTextCard";
import Image from "next/image";
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

  const ImageSquare = () => {
    return ( <Image
      layout="responsive"
      width={16}
      height={9}
      quality="50"
      className={`${backgroundColor} object-cover w-full `}
      src={ image.url }
      alt={image.description??""}
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
    <a href={`${path}`} className="group flex flex-col sm:flex-row gap-md md:flex-col h-full "
    aria-labelledby={path} 
    >
      <div className={` w-full sm:w-1/3 md:w-full group-hover:brightness-75`}>
        {image? <ImageSquare/> : <PatternSquare/>}
      </div>
      <div className="w-full sm:w-2/3 md:w-full">
      {kicker && <div className=" type-preset-8">{kicker}</div>}
        <p id={path} className={`${titleSize} mb-2  font-bold tracking-tight text-gray-900 font-sans group-hover:text-sage-400`}>
          {title}
        </p>
        <p className="type-preset-6 font-sans text-gray-700 ">
          {summary}
        </p>
      </div>
    </a>
  );
};

export default ContentCard;

