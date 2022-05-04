import Image from "next/image";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import brandD2 from "public/images/brand-patterns/Nava-Brand Pattern-Direction1-Light-White-V01 1.png";
import ill from "public/images/illo.png";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import classNames from "classnames";

type ImagePatternVariant = "image" | "illustration" ;
const defaultIllustration: ContentfulImageAsset = {
    id: '6f9PYC9LuxyTeGpAQ0A4Ea',
    url: ill.src,
    width: ill.height,
    height: ill.height,
    title: 'Purple Nava Logo',
    description: 'A logo to act as a placeholder for the social image'
  }


export interface ImagePatternBlockInterface {
    variant?:  ImagePatternVariant;
    image?: ContentfulImageAsset;
  }



const ImagePatternBlock = ({image=defaultIllustration, variant="illustration"}:ImagePatternBlockInterface) =>{

    return  variant==="illustration"? ( 
<div className="
    max-h-[618px] relative 
    bg-plum-50 flex  
    overflow-clip 
    lg:mx-4xl lg:-mt-5xl
    2xl:mx-auto 2xl:max-w-screen-xl">
      
      <div className="w-1/3 h-full ">
        <div className="flex items-stretch">
          <div className="bg-plum-800 max-h-5xl h-full text-[0px]">
            <Image
              src={brandDirection}
              className="object-cover "
              height={128}
              width={128}
              
              alt=""
            />
          </div>
          <div className="bg-plum-600 max-h-5xl h-full text-[0px]">
            <Image
              src={brandTerrain}
              className="object-cover"
              height={128}
              width={128}
              alt=""
            />
          </div>
          <div className="bg-plum-200 max-h-5xl w-5xl"> </div>
        </div>
        <div className="h-full w-2/3  text-[0px]">
      { variant==="illustration"&& <Image
              src={brandD2}
              className="object-contain"
              height={256}
              width={256}
              alt=""
          />}
          </div>
      </div>
      <div className="w-1/2 h-full  pr-xl pt-lg">
      { variant==="illustration"? <Image
          className=" object-cover"
          src={image.url}
          width={`${image.width}`}
          height={`${image.height}`}
          layout="responsive"
        ></Image>:
        <Image
        className=" object-cover"
        src={image.url}
        width={16}
        height={9}
        layout="responsive"
      ></Image>}
      </div>
    </div>): (
        <div className="max-h-[600px] 
        overflow-clip relative
        xl:mx-auto xl:max-w-screen-xl 
        -mt-5xl">
         
          <Image
            className="w-full min-h-16 object-cover"
            src={image.url}
            width={16}
            height={9}
            layout="responsive"
          ></Image>
           <div className="w-1/3 h-full absolute z-10 top-0 left-0">
            <div className="flex items-stretch">
              <div className="bg-plum-800 max-h-5xl h-full text-[0px]">
                <Image
                  src={brandDirection}
                  className="object-cover "
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
              <div className="bg-plum-600 max-h-5xl h-full text-[0px]">
                <Image
                  src={brandTerrain}
                  className="object-cover"
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
              <div className="bg-plum-200 max-h-5xl w-5xl "> </div>
            </div>
          
          </div>
        </div>
    )
}




export default ImagePatternBlock;

/*
type PatternVariant = "large directional" | "directional" | "solid" | "terrain" ;
interface PatternBlockInterface {
    variant?: PatternVariant;
    image?: ContentfulImageAsset;
  }

const PatternBlock = ({variant}:PatternBlockInterface) => {
     const v = classNames({
         "bg-plum-800 max-h-5xl": variant=="directional"
     })
    return (
    <div className=" max-h-5xl h-full text-[0px]">
    <Image
      src={brandTerrain}
      className="object-cover"
      height={128}
      width={128}
      alt=""
    />
  </div>)
}
*/