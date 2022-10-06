import {
  ContentfulImageAsset,
  EventInfo,
} from "shared_interfaces/post_interface";
//import React from "react";
import SecondaryPatternBlock from "./SecondaryPatternBlock";
import TitleBlock from "./TitleBlock";
//import ImagePatternBlock from "./ImagePatternBlock";
import IllustrationPatternBlock from "./ImagePatternBlock";
import HomePageHeader from "./HomePageHeader";
import React from "react";
import PostTitleBlock from "./PostTitleBlock";
import styles from "./PageHeader.module.css";
import { getEventDateStr, isDateAfterNow } from "utils/utils";
import { Button } from "components/atom";

type PageHeaderVariant =
  | "Primary"
  | "Secondary"
  | "Home"
  | "Post"
  | "Events Post";

export interface PageHeaderInterface {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  variant?: PageHeaderVariant;
  image?: ContentfulImageAsset;
  pattern?: ContentfulImageAsset;
  buttonPath?: string;
  buttonText?: string;
  eventInfo?: EventInfo;
}

const PageHeader = (props: PageHeaderInterface) => {
  if (props.variant == "Home") {
    return <HomePageHeader {...props} />;
  }
  if (props.variant == "Secondary" || !props.variant) {
    return (
      <header key={props.id} className="overflow-hidden">
        <div className={"bg-navy-900"}>
          <div
            className={`animate-titleSlide responsive-container z-10 relative pt-2xl  lg:pt-3xl `}
          >
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
      <header key={props.id} className="overflow-hidden">
        <div className={`bg-purple-900 relative `}>
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
        <IllustrationPatternBlock
          image={props.image}
          pattern={props.pattern}
          colorTheme={"purple"}
        />
      </header>
    );
  }

  if (props.variant == "Post") {
    return (
      <header key={props.id} className="overflow-hidden">
        <div className={"bg-sage-900"}>
          <div
            className={` responsive-container z-10 relative pt-2xl  lg:pt-3xl pb-2xl`}
          >
            <PostTitleBlock
              textColor={"text-sage-200"}
              title={props.title}
              subtitle={props.subtitle}
              body={props.body}
              isEvent={false}
            />
          </div>
        </div>
        {props.image != null ? (
          <IllustrationPatternBlock image={props.image} colorTheme={"sage"} />
        ) : (
          <SecondaryPatternBlock bgColor={"bg-sage-900"} bgBase={"sage"} />
        )}
      </header>
    );
  }
  if (props.variant == "Events Post") {
    const date =
      props.eventInfo && "eventTime" in props.eventInfo
        ? props.eventInfo.eventTime
        : null;
    const location =
      props.eventInfo &&
      "location" in props.eventInfo &&
      props.eventInfo.location
        ? props.eventInfo.location
        : null;
    const registrationLink =
      date &&
      "registrationLink" in props.eventInfo &&
      props.eventInfo.registrationLink &&
      isDateAfterNow(date)
        ? props.eventInfo.registrationLink
        : null;
    const recordingLink = !registrationLink && "recordingLink" in props.eventInfo ? props.eventInfo.recordingLink : null
    return (
      <header key={props.id} className="overflow-hidden">
        <div className={"bg-sage-900"}>
          <div
            className={` responsive-container z-10 relative pt-2xl  lg:pt-3xl pb-2xl flex flex-wrap`}
          >
            <div className="w-full lg:w-2/3 lg:border-r-[1px] lg:border-sage-300 lg:pr-sm">
              <PostTitleBlock
                textColor={"text-sage-200"}
                title={props.title}
                subtitle={props.subtitle}
                body={props.body}
                isEvent={true}
              />
            </div>
            <div className={`w-full lg:w-1/3 h-full flex flex-col gap-xl  lg:pl-lg`}>
              {date && (
                <div>
                  <p className={`type-preset-4 font-bold text-sage-200`}>
                    Event Date
                  </p>
                  <p
                    className={`type-preset-4 font-serif font-light text-white`}
                  >
                    {getEventDateStr(props.eventInfo.eventTime)}
                  </p>
                </div>
              )}
              {location && (
                <div>
                  <p className={`type-preset-4 font-bold text-sage-200`}>
                    Location
                  </p>
                  <p
                    className={`type-preset-4 font-serif font-light text-white`}
                  >
                    {location}
                  </p>
                </div>
              )}
              {registrationLink && (
                <Button href={registrationLink} variant={"outlined white"}>
                  Register
                </Button>
              )}
               {recordingLink && (
                <Button href={recordingLink} variant={"outlined white"}>
                  View recording
                </Button>
              )}
            </div>
          </div>
        </div>
        {props.image != null ? (
          <IllustrationPatternBlock image={props.image} colorTheme={"sage"} />
        ) : (
          <SecondaryPatternBlock bgColor={"bg-sage-900"} bgBase={"sage"} />
        )}
      </header>
    );
  }
};
export default PageHeader;
