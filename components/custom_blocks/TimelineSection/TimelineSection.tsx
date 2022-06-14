import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React from "react";


export interface TimelineInterface {
    year: string;
    richBody: any; // Rich text from contentful
  }

const TimelineSection = ({year, richBody}:TimelineInterface) => {
    return (
        <ResponsiveContentContainer alignment={"left"}>
        <div className="py-xl">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        </ResponsiveContentContainer>)
}

export default TimelineSection;


