import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React from "react";
import { Signatures } from "../ReportBody/Signatures/Signatures";

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
  return (
    <div className="bg-purple-50 mt-3xl ">
      <div className="responsive-container  py-2xl grid grid-cols-12" id={"intro"}>
        <div className="hidden lg:block lg:col-span-4">
         <div className="font-serif text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20 ">
            {title && (
              <h2
                className={`font-serif font-light md:text-7xl type-preset-1  pb-2xl`}
              >
                {title}
              </h2>
            )}
          </div> 
        </div>
        <div className="lg:col-span-7 col-start-0 col-span-11 pr-xl">
          <div className="font-serif text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20 lg:hidden ">
            {title && (
              <h2
                className={`font-serif font-light md:text-7xl type-preset-1  pb-2xl`}
              >
                {title}
              </h2>
            )}
          </div>
          <div className="font-serif text-purple-900 py-2xl">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
          <Signatures fullerList={true} isNew={true} />
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
