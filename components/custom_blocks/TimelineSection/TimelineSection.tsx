import PostContent from "components/blocks/PostBody/PostContent";


export interface TimelineInterface {
    year: string;
    richBody: any; // Rich text from contentful
  }

const TimelineSection = ({year, richBody}:TimelineInterface) => {
    return (
        <div className="responsive-container">

        <hr/>
    <div className={"grid grid-cols-3"}>
        <div className="">{year}</div>
        <div className="col-span-2">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
    </div>
    </div>)
}

export default TimelineSection;


