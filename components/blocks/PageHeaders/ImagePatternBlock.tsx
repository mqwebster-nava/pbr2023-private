import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import brandDefault from "public/images/header-pattern-block.png";
import brandDefaultArticle from "public/images/Article-Pattern.png";
import ill from "public/images/illo.png";
import styles from "./PageHeader.module.css";

type ColorTheme = "purple" | "plum" | "sage";

export interface ImagePatternBlockInterface {
  pattern?: ContentfulImageAsset;
  image?: ContentfulImageAsset;
  colorTheme?: ColorTheme;
}

const defaultIllustration: ContentfulImageAsset = {
  id: "6f9PYC9LuxyTeGpAQ0A4Ea",
  url: ill.src,
  width: ill.height,
  height: ill.height,
  title: "Purple Nava Logo",
  description: "A logo to act as a placeholder for the social image", // TODO create good descriptions
};

const defaultPattern: ContentfulImageAsset = {
  id: "6f9PYC9LuxyTeGpAQ0A4",
  url: brandDefault.src,
  width: brandDefault.height,
  height: brandDefault.height,
  title: "Purple Nava Logo",
  description: "A logo to act as a placeholder for the social image",
};
const defaultPatternArticle: ContentfulImageAsset = {
  id: "6f9PYC9LuxyTeGpAQ0A4",
  url: brandDefaultArticle.src,
  width: brandDefaultArticle.height,
  height: brandDefaultArticle.height,
  title: "Purple Nava Logo",
  description: "A logo to act as a placeholder for the social image",
};

const IllustrationPatternBlock = ({
  image = defaultIllustration,
  pattern = defaultPattern,
  colorTheme = "purple",
}: ImagePatternBlockInterface) => {
  image ??= defaultIllustration;
  pattern ?? defaultPattern;
  //const lift =classNames({"-mt-[0px] ": colorTheme=="sage", "-mt-[1px] ": colorTheme=="plum",})
  if (colorTheme == "sage") {
    pattern = defaultPatternArticle;
  }
  return (
    <div
      className={`relative responsive-container  xl:mb-0 `}
    >
      <div
        className={`bg-${colorTheme}-900  h-[64px]   md:h-[96px] lg:h-[128px] w-full absolute z-0 top-0 left-0 right-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2 `}
      ></div>
    <div
      className={`relative aspect-video pb-[56.25%] w-full`}
    >
      
      <div className={` w-full absolute top-0 left-0  bottom-0 bg-${colorTheme}-50 `}>
        <Image
          className={`w-full object-cover animate-fadeIn`}
          src={image.url}
          width={16}
          height={9}
          layout="responsive"
          alt={image.description}
          priority
        ></Image>
        <div
          className={`${
            colorTheme == "sage"
              ? "w-[128px] md:w-[192px] lg:w-[256px]"
              : "w-[192px] md:w-[288px] lg:w-[384px]"
          } h-full absolute z-10 top-0 sm:block hidden`}
        >
          <Image
            className={`w-full object-cover ${styles.fadeIn}`}
            src={pattern.url}
            width={colorTheme == "sage" ? 8 : 12}
            height={4}
            layout="responsive"
            alt={""}
            priority
          ></Image>
        </div>
      </div>
      </div>
    </div>
  );
};

export default IllustrationPatternBlock;
