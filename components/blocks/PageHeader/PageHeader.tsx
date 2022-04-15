import { PageHeaderInterface } from "lib/page_data_models";
import Image from "next/image";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg"
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg"

type Variant = "default" | "image" | "image-pattern" | "black";
type TextLocation = "top" | "bottom" ;
type BrandElements = "none" | "top" | "bottom" | "left";

// interface LargeHeroInterface {
//   title: string;
//   subtitle: string;
//   backgroundImage?: any;
//   bannerColor?: BannerColor;
//   variant?: Variant;
//   textLocation?: TextLocation;
//   brandElements?: BrandElements;
// }

const PlaceholderPageHeader = ({
  title,
  subtitle,
  bannerColor = "navy",
  // backgroundImage,
  // textLocation,
  // brandElements
}: PageHeaderInterface) => {
  bannerColor = bannerColor ?? "navy";
  return  <DefaultPageHeader title={title} subtitle={subtitle} bannerColor={bannerColor}/>
};


const TitleBlock = ({title, subtitle, textColor}) => {
  return (
    <div className={`pb-2xl ${textColor} `}>
      <h1 className={`font-sans  text-base font-bold`}>
        {title}
      </h1>
      <h2
        className={`font-sans  lg:text-6xl text-5xl sm:pr-xl pr-0 md:pr-4xl font-black mr-xl `}
      >
        {subtitle}
      </h2>
    </div>
  );
};
const DefaultPageHeader = ({
  title,
  subtitle,
 // textLocation,
  bannerColor,
}: PageHeaderInterface) => {
  console.log(bannerColor)
  return (
    <div className={` relative bg-${bannerColor}-900 min-h-[70vh]`}>
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



// const ImagePageHeader = ({
//   title,
//   subtitle,
//   backgroundImage,
//   textLocation,
//   brandElements
// }: PageHeaderInterface) => {

//   return (

//     <div className={`bg-navy-900 relative min-h-[80vh] `}>
//       <div className={`
//       responsive-container z-10 relative pt-4xl `}>
//       {/* //absolute bottom-0 left-0 right-0  */}
//         <TitleBlock title={title} subtitle={subtitle} textColor={"text-white"}  />
//       </div>

//       {backgroundImage && (

//        <Image
//        quality={30}
//        className="brightness-50 opacity-80 object-fill "
//         src={backgroundImage.url}
//         layout="fill"
//         objectFit="cover"
//         priority
//         ></Image>

//       )}
//        <div className={`responsive-container absolute bottom-0 right-0 left-0 flex`}>
//       {/* //absolute top-0 left-0 right-0 z-10 flex */}
//         <Image src={brandTerrain} height={96} width={96}></Image>
//         <Image src={brandDirection} height={96} width={96}></Image>
//       </div>

//     </div>
//   );
// };
export default PlaceholderPageHeader;
