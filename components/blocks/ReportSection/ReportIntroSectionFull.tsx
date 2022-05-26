import { Signatures } from "components/atom";
import ReportSectionContentFull from "../ReportBody/ReportSection/ReportSectionContentFull";

export const ReportIntroSectionFull = ({title, body}) => (
  <>
    <ReportSectionContentFull
      title={title}
      titleId="intro"
      body={body}
      background="sea-foam"
    />
    <div className="bg-sage-50 pb-4xl">
      <div className="responsive-container">
      <Signatures fullList  />
      </div>
    </div>
  </>
);