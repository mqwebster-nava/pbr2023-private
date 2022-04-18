
import { ContentCardInterface } from "models/component_models";
import Image from "next/image";

const HighlightedCard: React.FC<ContentCardInterface> = ({
  title,
  path,
  promoImage,
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
            src={promoImage.url}
          ></Image>
        </div>
        <div className="">
            <h6 className="text-base text-sage-500 font-bold">
                Featured Post
            </h6>
          <h2 className="mb-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 font-sans group-hover:text-sage-400">
            {title}
          </h2>
          <p className=" text-lg font-sans text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </div>
      </a>
    </div>
  );
};
export default HighlightedCard;
