import { ReportContent } from "..";
import { Signatures } from "../../atom";
import { ReportIntroSectionInterface } from "lib/report_data_models";

const ReportIntroSection: React.FC<ReportIntroSectionInterface> = ({ body, theme }) => {
  const hasWhiteBackground = theme.sage.background === undefined;
  return (
    <section className={`${theme.sage.background} py-2xl md:px-4xl`}>
      <div className="responsive-container-content">
        <ReportContent
          content={body}
          isGreenBG={!hasWhiteBackground}
          theme={theme}
        />
      </div>
      <Signatures isGreenBG={!hasWhiteBackground} />
    </section>
  );
};

export default ReportIntroSection;
