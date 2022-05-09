import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import brandDefault from "public/images/header-pattern-block.png";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import ill from "public/images/illo.png";

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





type PageHeaderVariant = "primary" | "secondary" | "home";

export interface PageHeaderInterface {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  variant?: PageHeaderVariant;
  image?: ContentfulImageAsset;
  pattern?: ContentfulImageAsset;
}

const PageHeader = ({
  id,
  title,
  subtitle,
  body = "",
  image,
  pattern,
  variant = "primary",
}: PageHeaderInterface) => {
  const bgColor =  "bg-purple-900"; //bg-purple-900
  return (
    <div key={id}>
      <div className={` relative ${bgColor} `}>
        <div
          className={`
      responsive-container z-10 relative pt-5xl`}
        >
          <TitleBlock
            title={title}
            body={body}
            subtitle={subtitle}
            textColor={"text-white"}
          />
          {image && <div className="h-3xl"></div> }

        </div>
      </div>

     {image ? <ImagePatternBlock image={image} pattern={pattern ?? defaultPattern}/> : <PatternBlock bgColor={bgColor}/>} 
    </div>
  );
};


export interface ImagePatternBlockInterface {
  pattern?:  ContentfulImageAsset;
  image?: ContentfulImageAsset;
}



const ImagePatternBlock = ({image=defaultIllustration, pattern=defaultPattern}:ImagePatternBlockInterface) =>{
  return  (
      <div className=" relative responsive-container  aspect-video">
          <div className="bg-purple-900 -mt-[3px] h-1/5 w-full absolute z-0 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2 "></div>
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

const PatternBlock = ({bgColor}) => {
return (
  <div className={`${bgColor}`}>
    <div className="responsive-container">
  <div className=" w-1/3">
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
</div>);
}

const TitleBlock = ({ title, subtitle, body, textColor }) => {
  return (
    <div className={` ${textColor} `}>
      <h1 className={`font-sans type-preset-1 text-plum-200 font-bold`}>
        {title}
      </h1>
      <h2
        className={`font-sans  type-preset-1 sm:pr-xl pr-0 md:pr-4xl font-black mr-xl `}
      >
        {subtitle}
      </h2>
      {body && (
        <p className="font-serif font-light type-preset-4 py-lg text-white">
          {body}
        </p>
      )}
    </div>
  );
};


export default PageHeader;
