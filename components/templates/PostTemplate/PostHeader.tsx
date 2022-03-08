import Image from "next/image";
import filler from "public/images/filler-image.png";

interface PostHeaderProps {
  title: string;
  longSummary: string;
  leadImage?: string; // todo make a model for assets
  contentType: string; // todo make this a type?
}

const PostHeader = ({
  title,
  longSummary,
  leadImage,
  contentType,
}: PostHeaderProps) => {
  return (
    <div>
      <div className="bg-gray-300 w-screen pb-4xl">
        <div className=" py-4xl px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg ">
          <h3 className="pt-2xl font-sans font-light text-black"> {contentType}</h3>
          <h1 className="font-sans text-4xl font-black text-black"> {title}</h1>
          <p className="font-sans font-light pt-lg text-black">
            {longSummary}
          </p>
        </div>
      </div>
      <div className=" max-h-96 overflow-clip xl:mx-auto xl:max-w-screen-lg -mt-4xl"> 
        <Image className="max-w-full max-h-16" src={filler}></Image>
      </div>
    </div>
  );
};
export default PostHeader;
