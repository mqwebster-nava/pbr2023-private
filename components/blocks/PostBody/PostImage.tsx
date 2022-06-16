import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import classNames from "classnames";
import CaptionText from "./CaptionText";
type BorderType = "none" |"gray";

interface PostImageInterface {
    border?: BorderType;
    image: ContentfulImageAsset;
    caption?: any;
    attribution?: string;
}

const PostImage = ({image, border="none", caption, attribution}: PostImageInterface) => {
    const borderStyle = classNames({
        "bg-gray-300 p-[1px] ": border==="gray"
    })
    const capH = classNames({
        "max-w-[500px]": (image.height/image.width)>=1
    });
    return (
        <div className={`my-md mx-auto   ${capH}`}>
       <div className={`${borderStyle}`}>
        <Image
          layout={"responsive"}
          src={image.url}
          height={image.height}
          width={image.width}
          alt={image.description}
          loading="lazy"
          placeholder="blur"
          blurDataURL={`/_next/image?url=${image.url}&w=16&q=1`}
        />
          </div>
          {caption &&
        <CaptionText id={"test"} caption={caption} attribution={attribution}></CaptionText>
          }
        </div>
      );
  };

export default PostImage;