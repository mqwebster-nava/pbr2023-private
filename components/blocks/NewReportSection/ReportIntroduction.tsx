import PostContent from "components/blocks/PostBody/PostContent";
import React from "react";
import { Signatures } from "../ReportBody/Signatures/Signatures";

export interface TextBodyInterface {
  title: string;
  richBody: any; // Rich text from contentful
}

const ReportIntroductionBlock = ({ title, richBody }: TextBodyInterface) => {
  return (
    <div className="responsive-container mr-auto  py-2xl lg:pl-[108px]">
      <div className="max-w-screen-md   mr-auto">
        <div className="font-serif text-purple-900">
          {title && (
            <h3 className={`font-sans type-preset-3  font-bold pb-lg`}>
              {title}
            </h3>
          )}
          <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        <Signatures fullList={true} isNew={true} />
      </div>
    </div>
  );
};

export default ReportIntroductionBlock;
