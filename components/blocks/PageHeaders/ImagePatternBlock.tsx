
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import brandPatternNavy from "public/images/brand-patterns/patternblock-navy.png";
import brandPatternPlum from "public/images/brand-patterns/brand-pattern-plum.png";
import brandDefault from "public/images/header-pattern-block.png";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import ill from "public/images/illo.png";

export interface ImagePatternBlockInterface {
    pattern?:  ContentfulImageAsset;
    image?: ContentfulImageAsset;
}
  
const defaultIllustration: ContentfulImageAsset = {
    id: '6f9PYC9LuxyTeGpAQ0A4Ea',
    url: ill.src,
    width: ill.height,
    height: ill.height,
    title: 'Purple Nava Logo',
    description: 'A logo to act as a placeholder for the social image'
}

const defaultPattern: ContentfulImageAsset = {
  id: '6f9PYC9LuxyTeGpAQ0A4',
  url: brandDefault.src,
  width: brandDefault.height,
  height: brandDefault.height,
  title: 'Purple Nava Logo',
  description: 'A logo to act as a placeholder for the social image'
}


const IllustrationPatternBlock = ({image=defaultIllustration, pattern=defaultPattern}:ImagePatternBlockInterface) =>{
    return  (
        <div className=" relative responsive-container  aspect-video -mb-[50px] xl:mb-0">
            <div className="bg-purple-900 -mt-[3px]  h-1/5 w-full absolute z-0 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2 "></div>
          <Image
            className="w-full object-cover "
            src={image.url}
            width={16}
            height={9}
            layout="responsive"
          ></Image>
           <div className="w-1/3 h-full absolute z-10 top-0 ">
           <Image
            className="w-full object-cover"
            src={pattern.url}
            width={4}
            height={4}
            layout="responsive"
          ></Image>
          </div>
        
        </div>
    )
  }

export default IllustrationPatternBlock;