import Image from "next/image";
import { useRef } from "react";
import { ContentfulImageAsset } from "lib/data_models/post_interface";
import ColorTheme from "utils/ColorThemes";
import { useOnScreen } from "utils/useOnScreen";
import classNames from "classnames";
import CrossfadeCarousel from "components/atom/CrossfadeCarousel/CrossfadeCarousel";
import NavaLabsLogo from "components/atom/Logos/NavaLabs";

/*
Rotating Image

*/

type ImageGalleryColorTheme = "default" | "navy";
type ImageGalleryLayout =
  | "Four image grid"
  | "Three image row"
  | "Single image"
  | "Rotating image"
  | "Nava Labs";

interface ImageGalleryInterface {
  id: string;
  images?: Array<ContentfulImageAsset>;
  colorTheme?: ImageGalleryColorTheme;
  layout?: ImageGalleryLayout;
  background?: ColorTheme;
  groupAltText?: string;
}

const ImageGalleryBlock = ({
  id,
  images,
  colorTheme = "default",
  layout = "Single image",
  background,
  groupAltText = "",
}: ImageGalleryInterface) => {
  const bgColor = classNames({
    "bg-navy-900": colorTheme == "navy",
    "bg-navy-50": background == "navy",
    "bg-plum-50": background == "plum",
    "bg-sage-50": background == "sage",
    "bg-purple-50": background == "purple",
    "bg-gold-50": background == "gold",
  });

  const yPadding = classNames({
    "": layout == "Rotating image" || "Nava Labs",
    "py-4xl": layout != "Rotating image",
  });
  //TODO-  For transition - to remove once contentful is updated

  const FourImageGrid = () => {
    if (!images || images.length < 3) return <div></div>;
    return (
      <>
        <div className="flex justify-start items-end">
          <div className="w-5/12 pr-md md:pr-2xl align-bottom">
            <Image
              src={images[0].url}
              layout="responsive"
              height={images[0].height}
              width={images[0].width}
              alt={images[0].description}
            ></Image>
          </div>
          <div className="w-7/12">
            <Image
              src={images[1].url}
              layout="responsive"
              height={images[1].height}
              width={images[1].width}
              alt={images[1].description}
            ></Image>
          </div>
        </div>
        <div className="flex justify-center pt-md md:pt-2xl items-start">
          <div className="w-7/12  pr-md md:pr-2xl">
            <Image
              src={images[2].url}
              layout="responsive"
              height={images[2].height}
              width={images[2].width}
              alt={images[2].description}
            ></Image>
          </div>
          <div className="w-1/4 ">
            <Image
              src={images[3].url}
              layout="responsive"
              height={images[3].height}
              width={images[3].width}
              alt={images[3].description}
            ></Image>
          </div>
        </div>
      </>
    );
  };

  const NavaLabs = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    return (
      <div>
        <div className={`flex flex-col justify-center w-full bg-plum-900`}>
          <div className="flex flex-col md:flex-row gap-8 relative justify-between w-full responsive-container">
            <div ref={elementRef} className={`w-full h-full self-end pt-4`}>
              {isOnScreen && <div className="w-[240px] md:w-[360px]">
                <NavaLabsLogo animated />
              </div>}
            </div>

            {images && (
              <div className={`w-full aspect-square`}>
                {isOnScreen ? (
                  <div className="animate-dotOne">
                    <CrossfadeCarousel
                      interval={2000}
                      transition={1000}
                      groupAltText={groupAltText}
                      images={images.map((im) => {
                        return { src: im.url, ...im };
                      })}
                    />
                  </div>
                ) :
                <div className="opacity-0 animate-fadeOut">
                  <Image
                    className=""
                    src={images[0].url}
                    layout="responsive"
                    height={images[0].height}
                    width={images[0].width}
                    alt={images[0].description}
                  ></Image>
                </div>}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const RotatingImage = () => {
    if (!images) return <div></div>;
    // NOTE: Only works for images with a 16:9 dimension ratio
    // const ratio = (100* images[0].height / images[0].width).toPrecision(4)
    return (
      <div
        className={`pb-[56.47%] 3xl:pb-[calc(2000px_*_9_/_16)] 3xl:h-[calc(2000px_*_9_/_16)] h-[calc(100vw_*_9_/_16)] md:max-h-screen w-screen mx-auto max-w-[2000px] `}
      >
        <CrossfadeCarousel
          interval={1000}
          transition={1000}
          groupAltText={groupAltText}
          images={images.map((im) => {
            return { src: im.url, ...im };
          })}
        />
      </div>
    );
  };

  const SingleImage = () => {
    if (!images || images.length != 1) return <div></div>;
    return (
      <Image
        className=""
        src={images[0].url}
        layout="responsive"
        height={images[0].height}
        width={images[0].width}
        alt={images[0].description}
      ></Image>
    );
  };

  const ThreeImageRow = () => {
    if (!images || images.length < 2) return <div></div>;
    return (
      <div className="flex justify-start">
        <div className="hidden sm:block sm:w-5/12">
          <Image
            src={images[0].url}
            layout="responsive"
            height={images[0].height}
            width={images[0].width}
            alt={images[0].description}
          ></Image>
        </div>
        <div className="hidden sm:block sm:w-3/12 self-start  px-md md:px-2xl">
          <Image
            src={images[1].url}
            layout="responsive"
            height={images[1].height}
            width={images[1].width}
            alt={images[1].description}
          ></Image>
        </div>

        <div className="w-full sm:w-4/12  self-end">
          <Image
            src={images[2].url}
            layout="responsive"
            height={images[2].height}
            width={images[2].width}
            alt={images[2].description}
          ></Image>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full ${bgColor}`} key={id}>
      {layout == "Rotating image" ? (
        <RotatingImage />
      ) : layout == "Nava Labs" ? (
        <NavaLabs />
      ) : (
        <div className={`responsive-container w-full ${yPadding}`}>
          {layout == "Four image grid" ? (
            <FourImageGrid />
          ) : layout == "Three image row" ? (
            <ThreeImageRow />
          ) : (
            <SingleImage />
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGalleryBlock;
