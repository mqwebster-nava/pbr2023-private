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
  if(backgroundImage) console.log(backgroundImage);

  const TitleBlock = () => {
    return (
      <div className={`pb-2xl text-white `}>
        <h1 className={`font-sans  text-base font-black`}>
          {title}
        </h1>
        <h2
          className={`font-sans  lg:text-4xl md:text-3xl text-2xl font-black mr-xl `}
        >
          {subtitle}
        </h2>
      </div>
    );
  };

  return (
    <div className={` min-h-[80vh] bg-navy-900 relative`}>
      <div className={`
      responsive-container z-10
      ${textLocation=="bottom" ? "absolute bottom-0" : "relative pt-4xl"}
        
      `}>
        <TitleBlock />
      </div> 
      {brandElements=="bottom" ?
       <div className={`responsive-container z-10 absolute bottom-0 flex`}>
          <Image src={brandTerrain} height={100} width={100}></Image>
          <Image src={brandDirection} height={100} width={100}></Image>
       </div> : brandElements=="top" ?
        <div className={`responsive-container absolute top-0 z-10 flex`}>
        <Image src={brandTerrain} height={100} width={100}></Image>
        <Image src={brandDirection} height={100} width={100}></Image>
     </div> : null
    }
      {backgroundImage && (
      
       <Image 
       className="brightness-50 object-fill"
        src={backgroundImage.url} 
        layout="fill"
        objectFit="cover"></Image>
        
      )}
    </div>
  );
};
export default PlaceholderPageHeader;
