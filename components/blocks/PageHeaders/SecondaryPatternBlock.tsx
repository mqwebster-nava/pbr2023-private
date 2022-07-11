
import Image from "next/image";
import brandDirection from "public/images/Nava-Brand-Pattern-Direction1-Heavy-White-V01@4x-3.svg";
import brandTerrain from "public/images/Nava-Brand-Pattern-Terrain3-Medium-White-V01@4x-2.svg";


const SecondaryPatternBlock = ({bgColor, bgBase}) => {
    return (
      <div className={`${bgColor}`}>
        <div className=" responsive-container pt-3xl">
      <div className=" w-1/4">
      <div className="flex items-stretch">
        <div className={`bg-${bgBase}-800 max-h-4xl h-full text-[0px]`}>
          <Image
            src={brandDirection}
            className="object-cover "
            height={72}
            width={72}
            alt=""
          />
        </div>
        <div className={`bg-${bgBase}-600 max-h-4xl h-full text-[0px]`}>
          <Image
            src={brandTerrain}
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