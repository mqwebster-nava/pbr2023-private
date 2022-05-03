import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import brandD2 from "public/images/brand-patterns/Nava-Brand Pattern-Direction1-Light-White-V01 1.png";
import ill from "public/images/illo.png";

import PostHeader from "./PostHeader";

type BannerColor = "plum" | "purple" | "navy" | "sage" | "gold";
type PageHeaderVariant = "default" | "post";

export interface PageHeaderInterface {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  bannerColor?: BannerColor;
  variant?: PageHeaderVariant;
  image?: ContentfulImageAsset;
}

const PageHeader = ({
  id,
  title,
  subtitle,
  body = "",
  image,
  bannerColor = "purple",
  variant = "default",
}: PageHeaderInterface) => {
  bannerColor = bannerColor ?? "purple";
  return variant == "post" ? (
    <PostHeader
      id={id}
      title={title}
      body={body}
      subtitle={subtitle}
      image={image}
    ></PostHeader>
  ) : (
    <DefaultPageHeader
      id={id}
      title={title}
      subtitle={subtitle}
      bannerColor={bannerColor}
    />
  );
};

const TitleBlock = ({ title, subtitle, textColor }) => {
  return (
    <div className={`pb-2xl ${textColor} `}>
      <h1 className={`font-sans lg:text-6xl text-5xl text-plum-200 font-bold`}>
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
  id,
  title,
  subtitle,
  // textLocation,
  bannerColor,
}: PageHeaderInterface) => {
  return (
    <div key={id}>
      <div className={` relative bg-purple-900 min-h-[70vh] pb-[100px]`}>
        <div
          className={`
      responsive-container z-10 relative pt-4xl`}
        >
          <TitleBlock
            title={title}
            subtitle={subtitle}
            textColor={"text-white"}
          />
          <div className="h-[96px]"></div>
        </div>
      </div>
      <div className="max-h-[618px] relative bg-plum-50 flex  overflow-clip xl:mx-auto 2xl:max-w-screen-xl -mt-5xl">
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
            <div className="bg-plum-800 max-h-5xl h-full text-[0px]">
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
          <Image
                src={brandD2}
                className="object-cover"
                height={256}
                width={256}
                alt=""
            />
        </div>
        <div className="w-1/2 h-full  pr-xl pt-lg">
          <Image
            className=" object-cover"
            src={ill}
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
