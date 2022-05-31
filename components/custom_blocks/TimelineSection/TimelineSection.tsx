import PostContent from "components/blocks/PostBody/PostContent";


export interface TimelineInterface {
    year: string;
    richBody: any; // Rich text from contentful
  }

const TimelineSection = ({year, richBody}:TimelineInterface) => {
    return (
        <div className="responsive-container">

        <hr/>
    <div className={"grid md:grid-cols-3 grid-cols-5"}>
        <div className="type-preset-2 font-serif pt-md">{year}</div>
        <div className="col-span-4 md:col-span-2 pt-md">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
    </div>
    </div>)
}

export default TimelineSection;


