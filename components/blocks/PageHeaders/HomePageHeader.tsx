import { PageHeaderInterface } from "./PageHeader";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";

import ill from "public/images/header-img.png";
import pat from "public/images/HeaderPattern2.svg";
import { Button } from "components/atom";


const defaultIllustration: ContentfulImageAsset = {
    id: "2noBSMs0a4cEnhGkcWIxdC",
    url: ill.src,
    width: ill.width,
    height: ill.height,
    title: "Purple Nava Logo",
    description: "An illustration of an old man",
  };
const headers = [
{
    bg:"bg-plum-900",
    pattern:"/images/HeaderPattern2.svg",
    illustration:defaultIllustration
},
{
    bg:"bg-purple-900",
    pattern:"/images/home-patterns-purple.png",
    illustration:defaultIllustration

},
{
    bg:"bg-gold-900",
    pattern:"/images/home-patterns-gold.png",
    illustration:defaultIllustration
},
{
    bg:"bg-sage-900",
    pattern:"/images/home-patterns-gold.png",
    illustration:defaultIllustration
},



]


// const defaultPattern: ContentfulImageAsset = {
//   id: "cWIxdC",
//   url: pat.src,
//   width: pat.width,
//   height: pat.height,
//   title: "Purple Nava Logo",
//   description: "A logo to act as a placeholder for the social image",
// };

const HomePageHeader = ({ id, title }: PageHeaderInterface) => {

    const header = headers[Math.floor(headers.length*Math.random())];

  return (
    <header key={id}>
      <div className={`${header.bg}`}>
        <div className={`responsive-container relative z-10  `}>
        <div className="z-5 w-full sm:w-3/4 lg:w-1/2 ml-auto ">
              <img
                className="object-cover w-full"
                src={header.pattern}
                alt={""}
                height="300"
                width="300"
              ></img>
          </div>
          <div className={` absolute  z-10 top-[72px] lg:top-[128px]  h-full pr-xl md:pr-4xl 2xl:pr-0 2xl:mx-auto 2xl:max-w-screen-xl `}>
            <h1 className={`font-sans type-preset-1 text-white font-black pb-md w-3/4`}>{title}</h1>
            <Button variant="white" href={"/services"}>Our Work</Button>
          </div>
        </div>
      </div>
      <div className=" relative responsive-container ">
        <div className={`${header.bg} -mt-[3px]  h-1/2 w-full absolute z-0 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2`}></div>
        <div className="w-3/4 lg:w-1/2 ml-auto">
          <Image
            className="object-cover "
            src={defaultIllustration.url}
            width={defaultIllustration.width}
            height={defaultIllustration.height}
            layout="responsive"
            alt={defaultIllustration.description}
          ></Image>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
