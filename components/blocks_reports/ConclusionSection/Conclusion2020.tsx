import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import PostContent from "components/blocks/PostBody/PostContent";
// export interface ReportShoutoutSectionInterface {
//   title: string;
//   introduction: string;
//   lists: Array<object>;
// }

const ConclusionSection2020 = ({ title,anchor,  type, richBody }) => {
  return (
    <section id={anchor}>
      <ResponsiveContentContainer padding={"py-2xl"} alignment="left">
        <h2 className="type-preset-3 font-bold">{title}</h2>
        <div className="pb-xl font-serif">
          <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
      </ResponsiveContentContainer>
    </section>
  );
};


export default ConclusionSection2020;

