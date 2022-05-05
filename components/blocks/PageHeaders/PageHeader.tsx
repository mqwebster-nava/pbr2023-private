import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import ImagePatternBlock from "./ImagePatternBlock";

import PostHeader from "./PostHeader";

type PageHeaderVariant = "default" | "post" ;


export interface PageHeaderInterface {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  variant?: PageHeaderVariant;
  image?: ContentfulImageAsset;
}

const PageHeader = ({
  id,
  title,
  subtitle,
  body = "",
  image,
  variant = "default",
}: PageHeaderInterface) => {
  return variant == "post" ? (
    <PostHeader
      id={id}
      title={title}
      body={body}
      subtitle={subtitle}
      image={image}
    ></PostHeader>
  ) : (
    <DefaultPageHeader
      id={id}
      title={title}
      subtitle={subtitle}
    />
  );
};

const TitleBlock = ({ title, subtitle, textColor }) => {
  return (
    <div className={` ${textColor} `}>
      <h1 className={`font-sans type-preset-1 text-plum-200 font-bold`}>
        {title}
      </h1>
      <h2
        className={`font-sans  type-preset-1 sm:pr-xl pr-0 md:pr-4xl font-black mr-xl `}
      >
        {subtitle}
      </h2>
    </div>
  );
};
const DefaultPageHeader = ({
  id,
  title,
  subtitle,
}: PageHeaderInterface) => {
  return (
    <div key={id}>
      <div className={` relative bg-purple-900 lg:min-h-[60vh] lg:pb-[100px]`}>
        <div
          className={`
      responsive-container z-10 relative pt-5xl`}
        >
          <TitleBlock
            title={title}
            subtitle={subtitle}
            textColor={"text-white"}
          />
          <div className="lg:h-5xl"></div>
        </div>
      </div>
      <ImagePatternBlock variant={"illustration"}/>
    </div>
  );
};

export default PageHeader;
