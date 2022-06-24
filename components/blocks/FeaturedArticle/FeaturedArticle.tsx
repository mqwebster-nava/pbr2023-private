import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";

interface  FeaturedArticleInterface {
    title: string;
    path: string;
    summary?: any;
    kicker?:string;
    promoImage?: ContentfulImageAsset;
}

const  FeaturedArticle = ({
  title,
  path,
  summary,
  kicker,
  promoImage
}: FeaturedArticleInterface) => {
 
  return (
    <section className={`w-full`}>
      <a href={path} className="group responsive-container py-2xl md:py-4xl grid grid-cols-3 gap-x-md md:gap-x-2xl ">
      <div className={`group-hover:brightness-75 col-span-3 md:col-span-2`}>
        <Image src={promoImage.url}  />
       </div>
        <div className={`col-span-3 md:col-span-1 `}>
          <div className="">
            {kicker && <small className="text-gray-500 type-preset-7 mb-sm">{kicker}</small>}
            <p
              className={`font-sans type-preset-4  text-gray-900 group-hover:text-sage-400 font-bold py-md`}
            >
             {title}
            </p>
            <p className={`font-sans type-preset-6 text-gray-900`}>
             {summary}
            </p>
          </div>
        </div>
      </a>
    </section>
  );
};

export default  FeaturedArticle;
