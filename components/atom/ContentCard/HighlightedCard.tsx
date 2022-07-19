
// NOTE Not currently used on the site

import Image from "next/image";
import { ContentCardInterface } from "./ContentCard";

const HighlightedCard: React.FC<ContentCardInterface> = ({
  title,
  path,
  image,
  children,
}) => {
  return (
    <div className="responsive-container py-xl">
      <a href={`${path}`} className="group h-full grid grid-cols-1 xl:grid-cols-3 gap-lg">
        <div
          className={` relative h-[272px] md:h-[450px] xl:col-span-2 mb-md group-hover:brightness-75`}
        >
          <Image
            layout={"fill"}
            className={`object-cover h-full w-full `}
            src={image.url}
            alt={image.description}
          ></Image>
        </div>
        <div className="">
            <h6 className="type-preset-6 text-sage-500 font-bold">
                Featured Post
            </h6>
          <h2 className="mb-2 type-preset-4 font-bold tracking-tight text-gray-900 font-sans group-hover:text-sage-400">
            {title}
          </h2>
          <p className=" type-preset-5 font-sans text-gray-600 ">
            {children}
          </p>
        </div>
      </a>
    </div>
  );
};
export default HighlightedCard;
