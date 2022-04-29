import classNames from "classnames";
//import CardWithImage from "./CardWithImage";
import HighlightedCard from "./HighlightedCard";
import LargeTextCard from "./LargeTextCard";
import Image from "next/image";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";

import brandTerrain1 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain1-Medium-White-V01@4x 1.png";
import brandTerrain2 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain2-Medium-White-V01@4x 1.png";
import brandTerrain3 from "public/images/brand-patterns/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.png";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";

export interface ContentCardInterface {
  title: String;
  path: String;
  type: String;
  isHighlighted?: Boolean;
  promoImage?: ContentfulImageAsset;
  cycleNum?: number;
}

const ContentCard: React.FC<ContentCardInterface> = (props) => {
  if (props.isHighlighted) return <HighlightedCard {...props} />;
  if (props.type === "Toolkit") return <LargeTextCard {...props} />;
  return <DefaultContentCard {...props} />;
};

const DefaultContentCard: React.FC<ContentCardInterface> = ({
  title,
  path,
  promoImage = null,
  type,
  cycleNum = Math.floor(Math.random() * 4),
  children,
}) => {
  const backgroundColor = classNames({
    "bg-purple-800": cycleNum % 4 == 0,
    "bg-plum-400": cycleNum % 4 == 1,
    "bg-sage-800": cycleNum % 4 == 2,
    "bg-gold-900": cycleNum % 4 == 3,
  });
  const pattern =
    cycleNum % 3 == 0
      ? brandTerrain1
      : cycleNum % 2 == 0
      ? brandTerrain2
      : brandTerrain3;
  return (
    <a href={`${path}`} className="group flex flex-col sm:flex-row gap-md md:flex-col h-full ">
      <div className={` w-full sm:w-1/3 md:w-full group-hover:brightness-75`}>
         <Image
          layout="responsive"
          width={16}
          height={9}
          className={`${backgroundColor} object-cover w-full `}
          src={promoImage ? promoImage.url : pattern}
          alt=""
        ></Image>
      </div>
      <div className="w-full sm:w-2/3 md:w-full">
        <h5 className="mb-2 text-lg xl:text-xl font-bold tracking-tight text-gray-900 font-sans group-hover:text-sage-400">
          {title}
        </h5>
        <p className=" text-base font-sans text-gray-700 dark:text-gray-400">
          {children}
        </p>
      </div>
    </a>
  );
};

export default ContentCard;
