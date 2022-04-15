import { ReportContent, ResponsiveContainer } from "..";
import { Signatures } from "../../atom";
import { ReportIntroSectionInterface } from "lib/report_data_models";

const ReportIntroSection: React.FC<ReportIntroSectionInterface> = ({ body, theme }) => {
  const hasWhiteBackground = theme.sage.background === undefined;
  return (
    <section className={`${theme.sage.background} py-2xl md:px-4xl`}>
      <ResponsiveContainer>
        <ReportContent
          content={body}
          isGreenBG={!hasWhiteBackground}
          theme={theme}
        />
      </ResponsiveContainer>
      <Signatures isGreenBG={!hasWhiteBackground} />
    </section>
  );
};

export default ReportIntroSection;
