import { PageHeaderInterface } from "./PageHeader";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";

import ill from "public/images/homeheader1.svg";
import pat from "public/images/HeaderPattern2.svg";
import { Button } from "components/atom";

const defaultIllustration: ContentfulImageAsset = {
  id: "2noBSMs0a4cEnhGkcWIxdC",
  url: ill.src,
  width: ill.width,
  height: ill.height,
  title: "Purple Nava Logo",
  description: "A logo to act as a placeholder for the social image",
};
const defaultPattern: ContentfulImageAsset = {
  id: "cWIxdC",
  url: pat.src,
  width: pat.width,
  height: pat.height,
  title: "Purple Nava Logo",
  description: "A logo to act as a placeholder for the social image",
};

const HomePageHeader = ({ id, title }: PageHeaderInterface) => {
  return (
    <header key={id}>
      <div className={`bg-plum-900`}>
        <div className={`responsive-container relative z-10  `}>
        <div className="z-5 w-full sm:w-3/4 lg:w-1/2 ml-auto ">
              <Image
                className="object-cover "
                src={defaultPattern.url}
                width={defaultPattern.width}
                height={defaultPattern.height}
                layout="responsive"
              ></Image>
          </div>
          <div className={` absolute  z-10 top-[72px] lg:top-[128px]  h-full pr-xl md:pr-4xl 2xl:pr-0 2xl:mx-auto 2xl:max-w-screen-xl `}>
            <h1 className={`font-sans type-preset-1 text-white font-black pb-md`}>{title}</h1>
            <Button variant="white" href={"/services"}>Our Work</Button>
          </div>
        </div>
      </div>
      <div className=" relative responsive-container ">
        <div className="bg-plum-900 -mt-[3px]  h-1/2 w-full absolute z-0 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2 "></div>
        <div className="w-3/4 lg:w-1/2 ml-auto">
          <Image
            className="object-cover "
            src={defaultIllustration.url}
            width={defaultIllustration.width}
            height={defaultIllustration.height}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
