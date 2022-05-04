import Image from "next/image";
import filler from "public/images/filler-image.png";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import { PageHeaderInterface } from "./PageHeader";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import brandD2 from "public/images/brand-patterns/Nava-Brand Pattern-Direction1-Light-White-V01 1.png";
import ImagePatternBlock from "./ImagePatternBlock";

// TO DO: Alt text for images.
// export interface PostHeaderInterface extends PageHeaderInterface {
//   longSummary: string;
//   leadImage?: ContentfulImageAsset; // todo make a model for assets
//   contentType: string; // todo make this a type?
// }

const PostHeader = ({
  id,
  title,
  subtitle, 
  body,
  image
}: PageHeaderInterface) => {
  const hasImage: boolean = image!=null;
  return (
    <div key={id}>
      <div className={`bg-purple-900 w-screen ${image && "pb-5xl"} `}>
        <div className="responsive-container py-5xl  ">
          <h3 className="font-sans lg:text-6xl text-4xl font-black text-plum-200">
            {subtitle}
          </h3>
          <h1 className="font-sans lg:text-6xl text-4xl font-black text-white">
            {title}
          </h1>
          <p className="font-serif font-light text-2xl pt-lg text-white">
            {body}
          </p>
        </div>
      </div>
      {image && <ImagePatternBlock image={image} variant="image"></ImagePatternBlock>}
    </div>
  );
};
export default PostHeader;

