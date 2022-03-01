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
      <div className="bg-sage-dark w-screen ">
        <div className=" py-xl px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg ">
          <h3 className="font-sans font-light text-white"> {contentType}</h3>
          <h1 className="font-sans text-4xl font-black text-white"> {title}</h1>
          <p className="font-sans font-light pt-lg text-white">
            {longSummary}
          </p>
        </div>
      </div>
      <div className="max-h-64 overflow-clip"> 
        <Image className="max-w-full max-h-16" src={filler}></Image>
      </div>
    </div>
  );
};
export default PostHeader;
