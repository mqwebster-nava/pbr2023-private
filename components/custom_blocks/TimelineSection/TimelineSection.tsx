import PostContent from "components/blocks/PostBody/PostContent";


export interface TimelineInterface {
    year: string;
    richBody: any; // Rich text from contentful
  }

const TimelineSection = ({year, richBody}:TimelineInterface) => {
    return (
        <div className="responsive-container ">
        <hr/>
        <div className="xl:mr-auto xl:max-w-4xl ">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
    </div>)
}

export default TimelineSection;


