import Image from "next/image";
import filler from "public/images/filler-image.png";

interface PostHeaderProps {
  title: string;
  long_summary: boolean;
  lead_image?: string; // todo make a model for assets
  content_type: string; // todo make this a type?
}

const PostHeader = ({
  title,
  long_summary,
  lead_image,
  content_type,
}: PostHeaderProps) => {
  return (
    <div>
      <div className="bg-sage-dark w-screen ">
        <div className=" py-xl px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg ">
          <h3 className="font-sans font-light text-white"> {content_type}</h3>
          <h1 className="font-sans text-4xl font-black text-white"> {title}</h1>
          <p className="font-sans font-light pt-lg text-white">
            {long_summary}
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
