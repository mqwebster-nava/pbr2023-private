import Image from "next/image";
import filler from "public/images/filler-image.png";

interface PostHeaderProps {
  title: string;
  longSummary: string;
  leadImage?: string; // todo make a model for assets
  contentType: string; // todo make this a type?
}


const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width || 500}&q=${quality || 75}`
}

const PostHeader = ({
  title,
  longSummary,
  leadImage,
  contentType,
}: PostHeaderProps) => {
  return (
    <div>
      <div className="bg-gray-300 w-screen pb-[160px] pt-2xl ">
        <div className=" py-4xl px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg ">
          <h3 className="pt-2xl font-sans font-light text-black"> {contentType}</h3>
          <h1 className="font-sans lg:text-4xl text-3xl font-black text-black"> {title}</h1>
          <p className="font-sans font-light pt-lg text-black">
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
