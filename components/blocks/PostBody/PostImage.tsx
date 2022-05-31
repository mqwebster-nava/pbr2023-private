import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import classNames from "classnames";
type BorderType = "none" |"gray";

interface PostImageInterface {
    border?: BorderType;
    image: ContentfulImageAsset;
}

const PostImage = ({image, border="none"}: PostImageInterface) => {
    const borderStyle = classNames({
        "bg-gray-300 p-xl rounded": border==="gray"
    })
    return (
        <div className={`${borderStyle}`}>
        <Image
          layout={"responsive"}
          src={image.url}
          height={image.height}
          width={image.width}
          alt={image.description}
          className={``}
          loading="lazy"
          placeholder="blur"
          blurDataURL={`/_next/image?url=${image.url}&w=16&q=1`}
        />
         </div>
      );
  };

export default PostImage;