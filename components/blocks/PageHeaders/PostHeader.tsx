import Image from "next/image";
import filler from "public/images/filler-image.png";
import { PageHeaderInterface } from "./PageHeader";

// TO DO: Alt text for images.
export interface PostHeaderInterface extends PageHeaderInterface {
  longSummary: string;
  leadImage?: string; // todo make a model for assets
  contentType: string; // todo make this a type?
}

const PostHeader = ({
  title,
  longSummary,
  leadImage,
  contentType,
}: PostHeaderInterface) => {
  return (
    <div>
      <div className="bg-gray-300 w-screen pb-[160px] pt-2xl ">
        <div className=" py-4xl px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg ">
          <h3 className="pt-2xl font-sans font-light text-navy-900">
            {" "}
            {contentType}
          </h3>
          <h1 className="font-sans lg:text-6xl text-4xl font-black text-navy-900">
            {" "}
            {title}
          </h1>
          <p className="font-sans font-light pt-lg text-navy-900">
            {longSummary}
          </p>
        </div>
      </div>
      <div className=" max-h-96 overflow-clip xl:mx-auto xl:max-w-screen-lg -mt-[160px]">
        <Image
          className="w-full  min-h-16 object-cover"
          src={filler}
          loading="eager"
          placeholder="blur"
        ></Image>
      </div>
    </div>
  );
};
export default PostHeader;
