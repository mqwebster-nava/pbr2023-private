import PostContent from "components/blocks/PostBody/PostContent";
import React from "react";
import { Signatures } from "../ReportBody/Signatures/Signatures";

export interface TextBodyInterface {
  title: string;
  richBody: any; // Rich text from contentful
}

const ReportIntroductionBlock = ({ title, richBody }: TextBodyInterface) => {
  return (
    <div className="bg-purple-50 mt-[160px]">
      <div className="responsive-container mr-auto  py-2xl " id={"intro"}>
        <div className="max-w-screen-md   mr-auto">
        <div className="font-serif text-purple-900 sticky top-[70px] bg-purple-50 pt-md">
            {title && (
              <h3 className={`font-sans type-preset-3  font-bold pb-lg`}>
                {title}
              </h3>
            )}
          </div>
          <div className="font-serif text-purple-900">
           
            <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
          <Signatures fullList={true} isNew={true} />
        </div>
      </div>
    </div>
  );
};

export default ReportIntroductionBlock;
