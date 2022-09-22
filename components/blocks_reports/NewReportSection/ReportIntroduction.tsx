import PostContent from "components/blocks/PostBody/PostContent";
import React from "react";
import { Signatures } from "../ReportBody/Signatures/Signatures";

export interface TextBodyInterface {
  title: string;
  richBody: any; // Rich text from contentful
}

const ReportIntroductionBlock = ({ title, richBody }: TextBodyInterface) => {
  return (
    <div className="bg-purple-50 lg:mt-[160px] mt-3xl">
      <div className="responsive-container mr-auto  py-2xl " id={"intro"}>
        <div className="max-w-screen-md   mr-auto">
        <div className="font-serif text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20">
            {title && (
              <h2 className={`font-serif font-light md:text-7xl type-preset-1  pb-2xl`}>
                {title}
              </h2>
            )}
          </div>
          <div className="font-serif text-purple-900 py-2xl">
           
            <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
          <Signatures fullList={true} isNew={true} />
        </div>
      </div>
    </div>
  );
};

export default ReportIntroductionBlock;
