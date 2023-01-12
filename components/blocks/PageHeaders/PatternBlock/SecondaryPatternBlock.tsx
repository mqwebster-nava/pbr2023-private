
import dynamic from "next/dynamic";
import Image from "next/image";

import brandDirection1 from "public/images/brand-patterns/Nava-Brand-Pattern-Direction1-Heavy-White.svg";
import brandTerrain1 from "public/images/brand-patterns/Nava-Brand-Pattern-Terrain1-Heavy-White.svg";
export interface ImagePatternBlockInterface {
  bgColor?: string;
  bgBase?: string;
  hideHeroPattern?:boolean
}


const SecondaryPatternBlock = ({bgColor, bgBase, hideHeroPattern=false}:ImagePatternBlockInterface) => {

    return (
      <div className={`${bgColor}`}>
        <div className=" responsive-container pt-3xl">
     
     <div className={`w-1/4 ${hideHeroPattern && "opacity-0"}`}>
      <div className="flex items-stretch">
        <div className={`bg-${bgBase}-800 max-h-4xl h-full text-[0px]`}>
          <Image
            src={brandDirection1}
            className="object-cover "
            height={72}
            width={72}
            alt=""
          />
        </div>
        <div className={`bg-${bgBase}-600 max-h-4xl h-full text-[0px]`}>
          <Image
            src={brandTerrain1}
            className="object-cover"
            height={72}
            width={72}
            alt=""
          />
        </div>
        <div className={`bg-${bgBase}-200 max-h-4xl w-4xl `}> </div>
      </div>
    </div>
    </div>
    </div>);
}
    
export default SecondaryPatternBlock;