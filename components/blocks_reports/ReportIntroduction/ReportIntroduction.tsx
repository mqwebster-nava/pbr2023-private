// TODO Animation with arrow
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React, { useEffect, useState } from "react";
import NewReportContent, { REPORT_YEAR } from "../NewReportContent/NewReportContent";
import ReportIntroduction2021 from "./ReportIntroduction2021";
import { SignatureInterface, Signatures } from "./SignaturesBlock";

export interface ReportIntroductionInterface {
  title: string;
  anchor: string;
  richBody: any; // Rich text from contentful
  signatures: Array<SignatureInterface>;
  variant: string;
  reportYear: REPORT_YEAR
}

const ReportIntroductionBlock = (props: ReportIntroductionInterface) => {
  return props.variant == "PBR 2021" ? (
    <ReportIntroduction2021 {...props} />
  ) : (
    <IntroductionBlock {...props} />
  );
};

const IntroductionBlock = ({
  title,
  anchor,
  richBody,
  variant,
  signatures,
  reportYear
}: ReportIntroductionInterface) => {
  return (
    <section className="bg-sage-50 " id={anchor}>
      <ResponsiveContentContainer padding="py-4xl" alignment="center">
        <div className="font-serif text-black">
          <NewReportContent 
          docData={richBody.json} 
          docLinks={richBody.links} 
          variant="report sage"
          reportYear={reportYear}
           />
        </div>
        <Signatures signatures={signatures} colorTheme={"sage"} />
      </ResponsiveContentContainer>
    </section>
  );
};

export default ReportIntroductionBlock;
