import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import classNames from "classnames";

type ImageGalleryColorTheme = "default" | "navy";
type ImageGalleryLayout = "Four image grid" | "Three image row";

import img1 from "public/images/People Family looking at laptop together Credit Kampus Production 2.png";
import img2 from "public/images/People Couple on couch looking at phone Credit Ketut Subiyanto 3.png";
import img3 from "public/images/People Family in supermarket looking at fruit Credit Greta Hoffman 4.png";
import img4 from "public/images/People Middel aged people at laptops Credit Gary Barnes 2.png";

const imgs = [
  {
    id: "1",
    url: img1.src,
    width: img1.width,
    height: img1.height,
    title: "FILLER - Careers Repeater",
    description: "",
  },
  {
    id: "2",
    url: img2.src,
    width: img2.width,
    height: img2.height,
    title: "FILLER - Careers Repeater",
    description: "",
  },
  {
    id: "3",
    url: img3.src,
    width: img3.width,
    height: img3.height,
    title: "FILLER - Careers Repeater",
    description: "",
  },
  {
    id: "4",
    url: img4.src,
    width: img4.width,
    height: img4.height,
    title: "FILLER - Careers Repeater",
    description: "",
  },
];

interface ImageGalleryInterface {
  id: string;
  images?: Array<ContentfulImageAsset>;
  colorTheme?: ImageGalleryColorTheme;
  layout?: ImageGalleryLayout;
}

const ImageGalleryBlock = ({
  id,
  images=imgs,
  colorTheme = "default",
  layout="Four image grid",
}: ImageGalleryInterface) => {
  const bgColor = classNames({
    "bg-navy-900": colorTheme == "navy",
  });

  const FourImageGrid = () => {
    if (!images || images.length < 3) return <div></div>;
    return (
      <>
        <div className="flex justify-start items-end pb-md">
          <div className="w-5/12 pr-md align-bottom">
            <Image
              src={images[0].url}
              layout="responsive"
              height={images[0].height}
              width={images[0].width}
              alt={images[0].description}
            ></Image>
          </div>
          <div className="w-7/12 pl-md">
            <Image
              src={images[1].url}
              layout="responsive"
              height={images[1].height}
              width={images[1].width}
              alt={images[1].description}
            ></Image>
          </div>
        </div>
        <div className="flex justify-center pt-md items-start">
          <div className="w-7/12 pr-md">
            <Image
              src={images[2].url}
              layout="responsive"
              height={images[2].height}
              width={images[2].width}
              alt={images[2].description}
            ></Image>
          </div>
          <div className="w-1/4 pl-md">
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
  const ThreeImageGrid = () => {
    if (!images || images.length < 2) return <div></div>;
    return (
        <div className="flex justify-start">
         
        </div>
    );
  };
  const SingleImage = () => {
    if (!images || images.length < 1) return <div></div>;
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
          <div className="w-5/12 pr-md">
            <Image
              src={images[0].url}
              layout="responsive"
              height={images[0].height}
              width={images[0].width}
              alt={images[0].description}
            ></Image>
          </div>
          <div className="w-2/12 self-start px-md">
            <Image
              src={images[1].url}
              layout="responsive"
              height={images[1].height}
              width={images[1].width}
              alt={images[1].description}
            ></Image>
          </div>
        

        <div className="w-4/12  self-end pl-md">
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
      <div className="responsive-container w-full py-3xl">
        {layout == "Four image grid" ? <FourImageGrid /> : <ThreeImageRow />}
      </div>
    </div>
  );
};

export default ImageGalleryBlock;

{
  /* <Image
            className=""
            src={image.url}
            layout="responsive"
            height={image.height}
            width={image.width}
            alt={image.description}
          ></Image> */
}
