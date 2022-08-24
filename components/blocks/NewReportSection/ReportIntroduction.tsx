import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React from "react";


export interface TextBodyInterface {
    title: string;
    richBody: any; // Rich text from contentful
  }

const ReportIntroductionBlock = ({title, richBody}:TextBodyInterface) => {
    return (
        <div className="responsive-container lg:pl-[80px]" >
        <div className="font-serif text-purple-900">
        {title && <h3 className={`font-sans type-preset-3  font-bold pb-lg`}>{title} </h3> }
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        </div>)
}

export default ReportIntroductionBlock;


