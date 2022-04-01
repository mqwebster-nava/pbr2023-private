import Image from "next/image";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg"
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg"

type Variant = "default" | "image" | "image-pattern" | "black";
type TextLocation = "top" | "bottom" ;
type BrandElements = "none" | "top" | "bottom" | "left";
interface LargeHeroInterface {
  title: string;
  subtitle: string;
  backgroundImage?: any;
  variant?: Variant;
  textLocation?: TextLocation;
  brandElements?: BrandElements;

}

const PlaceholderPageHeader = ({
  title,
  subtitle,
  backgroundImage,
  textLocation,
  brandElements
}: LargeHeroInterface) => {
  return backgroundImage ?
   <ImagePageHeader title={title} subtitle={subtitle} backgroundImage={backgroundImage}/> 
   : <DefaultPageHeader title={title} subtitle={subtitle}/> 
};


const TitleBlock = ({title, subtitle, textColor}) => {
  return (
    <div className={`pb-2xl ${textColor} `}>
      <h1 className={`font-sans  text-base font-bold`}>
        {title}
      </h1>
      <h2
        className={`font-sans  lg:text-4xl md:text-3xl text-2xl sm:pr-xl pr-0 md:pr-4xl font-black mr-xl `}
      >
        {subtitle}
      </h2>
    </div>
  );
};
const DefaultPageHeader = ({
  title,
  subtitle,
  textLocation,
}: LargeHeroInterface) => {
  return (
    <div className={` relative bg-navy-900 min-h-[60vh]`}>
    
      <div className={`
      responsive-container z-10 relative pt-4xl`}>
        <TitleBlock title={title} subtitle={subtitle} textColor={"text-white"}  />
       <div className="h-[96px]"></div>
      </div> 
      <div className={`responsive-container absolute bottom-0 right-0 left-0 flex `}>
          <Image src={brandTerrain} height={96} width={96}></Image>
          <Image src={brandDirection} height={96} width={96}></Image>
       </div> 
       
    </div>
  );
};



const ImagePageHeader = ({
  title,
  subtitle,
  backgroundImage,
  textLocation,
  brandElements
}: LargeHeroInterface) => {
 
  return (
  
    <div className={` relative min-h-[70vh] `}>
      <div className={`
      responsive-container z-10 absolute bottom-0 left-0 right-0 `}>
        <TitleBlock title={title} subtitle={subtitle} textColor={"text-white"}  />
      </div> 
      <div className={`responsive-container absolute top-0 left-0 right-0 z-10 flex`}>
        <Image src={brandTerrain} height={96} width={96}></Image>
        <Image src={brandDirection} height={96} width={96}></Image>
      </div> 
    
      {backgroundImage && (
      
       <Image 
       className="brightness-50 object-fill " //blur-xs
        src={backgroundImage.url} 
        layout="fill"
        objectFit="cover"></Image>
        
      )}
    </div>
  );
};
export default PlaceholderPageHeader;
