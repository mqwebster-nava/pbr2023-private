// TODO Animation with arrow

import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React, { useEffect, useState } from "react";
import { Signatures } from "../ReportBody/Signatures/Signatures";
import { makeSlideUpAnimation } from "./animations";
import ArrowDown from "./Atoms/ArrowDown";
import { animationHandler, getOffsetPct } from "./utils";

export interface TextBodyInterface {
  title: string;
  anchor: string;
  richBody: any; // Rich text from contentful
  signatures: any;
  variant: string;
}

const ReportIntroductionBlock = (props: TextBodyInterface) => {
  return props.variant == "PBR 2021" ? (
    <IntroductionBlock2021 {...props} />
  ) : (
    <IntroductionBlock {...props} />
  );
};

const IntroductionBlock2021 = ({
  title,
  anchor,
  richBody,
  variant,
  signatures,
}: TextBodyInterface) => {
const nextId = 'pilots';
  return (
    <div id={`${anchor}`} className="bg-purple-50 mt-3xl">
      <div  className="responsive-container  py-2xl grid grid-cols-12 ">
        <div className="hidden lg:block lg:col-span-4">
         <div id={`${anchor}-desktop-title`}className=" text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20 ">
              <h2
                className={`font-serif font-light xl:text-7xl type-preset-1  pb-2xl`}
              >
                {title}
              </h2>
          </div> 
        </div>
        <div className="lg:col-span-7 col-start-0 col-span-11 pr-xl">
          <div id={`${anchor}-mobile-title`} className="font-serif text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20 lg:hidden ">
              <h2
                className={`font-serif font-light xl:text-7xl type-preset-1  pb-2xl`}
              >
                {title}
              </h2>
          </div>
          <div id={`${anchor}-body`}className="font-serif font-light text-purple-900 pt-sm lg:pt-xl pb-2xl ">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
          <Signatures fullerList={true} isNew={true} />
        </div>
        <div className="col-span-1 block">
                {nextId && (
                  <a
                    id={`intro-next-arrow`}
                    href={`#${nextId}`}
                    aria-label={`Skip to next section`}
                    className=" group w-full sticky top-[calc(100vh_-_150px)] px-md  mb-2xl opacity-100 motion-reduce:opacity-100 flex flex-col items-center"
                  >
                    <p className="type-preset-7  text-purple-900 opacity-0   group-hover:opacity-100 group-focus:opacity-100">
                      Next <br/>section
                    </p> 
                    <ArrowDown sectionId={`intro`} color={"purple-900"}></ArrowDown>
                  </a>
                )}
            </div>
      </div>
    </div>
  );
};

const IntroductionBlock = ({
  title,
  anchor,
  richBody,
  variant,
  signatures,
}: TextBodyInterface) => {
  return (
    <section className="bg-sage-50 " id={anchor}>
      <ResponsiveContentContainer padding="py-4xl" alignment="center">
        <div className="font-serif text-black">
          <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        <Signatures fullerList={false} isNew={false} />
      </ResponsiveContentContainer>
    </section>
  );
};

export default ReportIntroductionBlock;
