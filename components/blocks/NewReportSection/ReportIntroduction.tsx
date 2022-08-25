import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React from "react";
import { Signatures } from "../ReportBody/Signatures/Signatures";


export interface TextBodyInterface {
    title: string;
    richBody: any; // Rich text from contentful
  }

const ReportIntroductionBlock = ({title, richBody}:TextBodyInterface) => {
    return (
        <div className="responsive-container lg:pl-[108px] py-2xl" >
        <div className="font-serif text-purple-900">
        {title && <h3 className={`font-sans type-preset-3  font-bold pb-lg`}>{title} </h3> }
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        <Signatures fullList={true} isNew={true}/>
        </div>)
}

export default ReportIntroductionBlock;


