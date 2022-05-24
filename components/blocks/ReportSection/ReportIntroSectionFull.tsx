import { Signatures } from "components/atom";
import ReportSectionContentFull from "./ReportSectionContentFull";

export const ReportIntroSectionFull = ({title, body}) => (
  <>
    <ReportSectionContentFull
      title={title}
      titleId="intro"
      body={body}
      background="sea-foam"
    />
    <div className="bg-sage-pbr-2018 pb-4xl">
      <Signatures fullList margin="mx-0" />
    </div>
  </>
);