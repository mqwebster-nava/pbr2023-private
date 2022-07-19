import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import classNames from "classnames";

type ImageGalleryColorTheme = "default" | "navy";
type ImageGalleryLayout = "Four image grid" | "Three image row" | "Single image";
interface ImageGalleryInterface {
  id: string;
  images?: Array<ContentfulImageAsset>;
  colorTheme?: ImageGalleryColorTheme;
  layout?: ImageGalleryLayout;
}

const ImageGalleryBlock = ({
  id,
  images,
  colorTheme = "default",
  layout="Single image",
}: ImageGalleryInterface) => {
  const bgColor = classNames({
    "bg-navy-900": colorTheme == "navy",
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
      <div className="responsive-container w-full u-py-block-default">
        {layout == "Four image grid" 
        ? <FourImageGrid /> 
       : layout == "Three image row"
        ? <ThreeImageRow />
        : <SingleImage/>}
      </div>
    </div>
  );
};

export default ImageGalleryBlock;


  /* <Image
            className=""
            src={image.url}
            layout="responsive"
            height={image.height}
            width={image.width}
            alt={image.description}
          ></Image> */

