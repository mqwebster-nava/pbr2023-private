import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import { ContentfulImageAsset } from "lib/data_models/post_interface";
import classNames from "classnames";

type ContentBlockType = "default" | "left repeater" | "right repeater";
type ImageShapeType = "" | "square" | "portrait";

export interface ContentBlockInterface {
  id: string;
  title?: string;
  body?: any;
  buttonText?: string;
  buttonPath?: string;
  buttonAriaLabel?: string;
  type?: ContentBlockType;
  image: ContentfulImageAsset;
  imageShape?: ImageShapeType;
  useSerifInBody?:boolean;
}

const ContentBlock = ({
  id,
  title,
  body,
  type = "left repeater",
  image,
  imageShape="",
  buttonPath,
  buttonText,
  buttonAriaLabel,
  useSerifInBody=false
}: ContentBlockInterface) => {
  const direction = classNames({
    "md:flex-row-reverse": type == "left repeater",
    "md:flex-row": type == "right repeater",
  });
  const imagePadding = classNames({
    "pb-2xl pl-0 md:pb-0 md:pl-2xl": type == "left repeater",
    "pb-2xl  pr-0 md:pb-0 md:pr-2xl": type == "right repeater",
  });
  if (image == null) {
    console.error("Content Block image cannot be null", title);
    return null;
  }
  return (
    <section className={"responsive-container py-3xl"} key={id}>
      <div className={`w-full flex flex-col justify-between ${direction}`}>
        <div className={`w-full md:w-1/2 max-w-[478px] ${imagePadding}`}>
          <Image
            objectFit={"fill"}
            height={imageShape==="square" ? 1 : imageShape==="portrait" ? 1.2 : image.height}
            width={(imageShape==="square" || imageShape==="portrait")?  1: image.width}
            layout={"responsive"}
            src={image.url}
            alt={image.description}
            sizes={`(max-width: 768px) 100vw,
            (max-width: 1264px) 50vw,
            600px`}
          />
        </div>
        <div className={`w-full md:w-1/2 flex justify-center flex-col`}>
          {title && (
            <h3 className={`font-sans type-preset-3 font-bold `}>{title} </h3>
          )}
          <div
            className={`${useSerifInBody?"font-serif":"font-sans"} pt-lg type-preset-5 text-gray-700 pb-lg md:pb-xl`}
          >
            {body}
          </div>
          {buttonText && (
            <Button
              href={buttonPath}
              variant="outlined"
              buttonAriaLabel={buttonAriaLabel}
              analyticsLabel={"content-and-image-block"}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
