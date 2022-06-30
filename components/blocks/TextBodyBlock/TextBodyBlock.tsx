import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React from "react";


export interface TextBodyInterface {
    title: string;
    richBody: any; // Rich text from contentful
  }

const TextBodyBlock = ({title, richBody}:TextBodyInterface) => {
    return (
        <ResponsiveContentContainer alignment={"left"}  padding={"py-xl"}>
        <div className="font-serif">
        {title && <h3 className={`font-sans type-preset-3 font-bold pb-lg`}>{title} </h3> }
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        </ResponsiveContentContainer>)
}

export default TextBodyBlock;


