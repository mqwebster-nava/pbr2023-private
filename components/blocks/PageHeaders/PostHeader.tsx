import Image from "next/image";
import filler from "public/images/filler-image.png";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import { PageHeaderInterface } from "./PageHeader";

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
      <div className={`bg-plum-900 w-screen ${image && "pb-[160px]"} `}>
        <div className="responsive-container py-5xl  ">
          <h3 className="font-sans lg:text-6xl text-4xl font-black text-plum-200">
            {subtitle}
          </h3>
          <h1 className="font-sans lg:text-6xl text-4xl font-black text-white">
            {title}
          </h1>
          <p className="font-serif font-light pt-lg text-white">
            {body}
          </p>
        </div>
      </div>
    
      <div className="max-h-96 overflow-clip xl:mx-auto xl:max-w-screen-lg -mt-[160px]">
        <Image
          className="w-full min-h-16 object-cover"
          src={image.url}
          width={16}
          height={9}
          layout="responsive"
        ></Image>
      </div>
    </div>
  );
};
export default PostHeader;
