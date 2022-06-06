import { ContentfulImageAsset } from "shared_interfaces/post_interface";
//import brandDefault from "public/images/header-pattern-block.png";
//import React from "react";
import SecondaryPatternBlock from "./SecondaryPatternBlock";
import TitleBlock from "./TitleBlock";
//import ImagePatternBlock from "./ImagePatternBlock";
import IllustrationPatternBlock from "./ImagePatternBlock";
import HomePageHeader from "./HomePageHeader";
import React from "react";
import PostTitleBlock from "./PostTitleBlock";

// const defaultPattern: ContentfulImageAsset = {
//   id: '6f9PYC9LuxyTeGpAQ0A4',
//   url: brandDefault.src,
//   width: brandDefault.height,
//   height: brandDefault.height,
//   title: 'Purple Nava Logo',
//   description: 'A logo to act as a placeholder for the social image'
// }

type PageHeaderVariant = "Primary" | "Secondary" | "Home" | "Post";

export interface PageHeaderInterface {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  variant?: PageHeaderVariant;
  image?: ContentfulImageAsset;
  pattern?: ContentfulImageAsset;
}

const PageHeader = (props: PageHeaderInterface) => {
  if (props.variant == "Secondary" || !props.variant) {
    return (
      <header key={props.id}>
        <div className={"bg-navy-900"}>
          <div className={`responsive-container z-10 relative pt-5xl `}>
            <TitleBlock
              textColor={"text-navy-200"}
              title={props.title}
              subtitle={props.subtitle}
              body={props.body}
            />
          </div>
        </div>
        <SecondaryPatternBlock bgColor={"bg-navy-900"} bgBase={"navy"} />
      </header>
    );
  }
  if (props.variant == "Primary") {
    return (
      <header key={props.id}>
        <div className={`bg-plum-900 relative `}>
          <div
            className={`responsive-container z-10 relative pt-3xl md:pt-5xl pb-2xl`}
          >
            <TitleBlock
              textColor={"text-plum-200"}
              title={props.title}
              subtitle={props.subtitle}
              body={props.body}
            />
          </div>
        </div>
        <IllustrationPatternBlock />
      </header>
    );
  }
  if (props.variant == "Home") {
    return <HomePageHeader {...props} />;
  }
  if (props.variant == "Post") {
    return (
      <header key={props.id}>
        <div className={"bg-sage-900"}>
          <div className={`responsive-container z-10 relative pt-5xl pb-2xl`}>
            <PostTitleBlock
              textColor={"text-sage-200"}
              title={props.title}
              subtitle={props.subtitle}
              body={props.body}
            />
          </div>
        </div>
        { props.image!=null ? 
        <IllustrationPatternBlock image={props.image} colorTheme={"sage"}/>
        : <SecondaryPatternBlock bgColor={"bg-sage-900"} bgBase={"sage"} />
        }
      </header>
    );
  }
};
export default PageHeader;
// || (props.variant=="Post" && props.image!=null)
// const bgBase = props.variant=="Post"? "sage": "navy";
// const bg = props.variant=="Post"? "bg-sage-900": "bg-navy-900";
// const titleColor = props.variant=="Post"? "text-sage-200": "text-navy-200";
//{props.variant=="Post"? <IllustrationPatternBlock image={props.image} colorTheme={"sage"}/> :  <IllustrationPatternBlock/>}
//(props.variant=="Post" && props.image==null)||
