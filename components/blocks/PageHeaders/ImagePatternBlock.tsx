
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import brandDefault from "public/images/Article-Pattern.png";
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
    description: 'A logo to act as a placeholder for the social image' // TODO create good descriptions
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
            <div className="bg-sage-900 -mt-[15px]  h-1/5 w-full absolute z-0 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2 "></div>
          <Image
            className="w-full object-cover "
            src={image.url}
            width={16}
            height={9}
            layout="responsive"
            alt={image.description}
            priority
          ></Image>
           <div className="w-1/5 h-full absolute z-10 top-0 ">
           <Image
            className="w-full object-cover"
            src={pattern.url}
            width={8}
            height={4}
            layout="responsive"
            alt={pattern.description??""}
            priority
          ></Image>
          </div>
        </div>
    )
  }

export default IllustrationPatternBlock;