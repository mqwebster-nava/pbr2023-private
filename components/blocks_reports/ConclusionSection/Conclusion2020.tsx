import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";

import { Button } from "components/atom";
import NewReportContent from "../NewReportContent/NewReportContent";
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
          <NewReportContent docData={richBody.json} docLinks={richBody.links} variant={"report"} />
        </div>
        <Button href="/open-roles" variant="default">Browse open roles</Button>
      </ResponsiveContentContainer>
    </section>
  );
};


export default ConclusionSection2020;

