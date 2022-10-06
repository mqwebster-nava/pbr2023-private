import { ContentfulImageAsset } from "shared_interfaces/post_interface";
//import React from "react";
import SecondaryPatternBlock from "./SecondaryPatternBlock";
import TitleBlock from "./TitleBlock";
//import ImagePatternBlock from "./ImagePatternBlock";
import IllustrationPatternBlock from "./ImagePatternBlock";
import HomePageHeader from "./HomePageHeader";
import React from "react";
import PostTitleBlock from "./PostTitleBlock";




type PageHeaderVariant = "Primary" | "Secondary" | "Home" | "Post" | "2018" | "2019"| "2020"|"2021";

export interface PageHeaderInterface {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  variant?: PageHeaderVariant;
  image?: ContentfulImageAsset;
  pattern?: ContentfulImageAsset;
  buttonPath?:string;
  buttonText?:string;
}

const PageHeader = (props: PageHeaderInterface) => {
  if (props.variant == "Secondary" || !props.variant) {
    return (
      <header key={props.id} className="overflow-hidden">
        <div className={"bg-navy-900"}>
          <div className={`animate-titleSlide responsive-container z-10 relative pt-2xl  lg:pt-3xl `}>
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
      <header  key={props.id} className="overflow-hidden" >
        <div className={`bg-purple-900 relative `} >
          <div
            className={` responsive-container z-10 relative pt-2xl pb-3xl  lg:pt-3xl lg:pb-4xl`}
          >
            <TitleBlock
              textColor={"text-purple-200"}
              title={props.title}
              subtitle={props.subtitle}
              body={props.body}
              buttonText={props.buttonText}
              buttonPath={props.buttonPath}
            />
          </div>
        </div> 
        <IllustrationPatternBlock image={props.image} pattern={props.pattern} colorTheme={"purple"}/> 
      </header>
    );
  }
  if (props.variant == "Home") {
    return <HomePageHeader {...props} />;
  }
  if (props.variant == "Post") {
    return (
      <header key={props.id} className="overflow-hidden">
        <div className={"bg-sage-900"}>
          <div className={` responsive-container z-10 relative pt-2xl  lg:pt-3xl pb-2xl`}>
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
