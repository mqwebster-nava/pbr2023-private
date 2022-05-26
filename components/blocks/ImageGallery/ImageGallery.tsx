
import { Button } from "../../atom/Button/Button";
import { MarkdownComponent } from "utils/utils";
import ill from "public/images/Illustrations-for-website-V019 1.png";
import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import classNames from "classnames";


type ImageGalleryColorTheme = "default"|"navy";


interface ImageGalleryInterface {
  id: string;
  image: ContentfulImageAsset;
  colorTheme?:ImageGalleryColorTheme;
}

const ImageGalleryBlock  = ({
  id,
  image,
  colorTheme="default",
}:ImageGalleryInterface) => {

  const bgColor= classNames({
    "bg-navy-900": colorTheme=="navy",
  })

  return (
    <div className={`w-full ${bgColor}`} key={id}>
      <div className="responsive-container w-full py-3xl">
          <Image
            className=""
            src={image.url}
            layout="responsive"
            height={image.height}
            width={image.width}
          ></Image>
      </div>
    </div>
  );
};

export default ImageGalleryBlock;
