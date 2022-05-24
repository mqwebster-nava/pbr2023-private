import { ReportContent } from "../..";
import { Signatures } from "../../../atom";
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";

export interface ReportIntroSectionInterface {
  body: string;
  theme: ReportThemeInterface;
  isWhiteBG: boolean;
}

const ReportIntroSection: React.FC<ReportIntroSectionInterface> = ({ body, theme }) => {
  const hasWhiteBackground = theme.sage.background === undefined;
  return (
    <section className={`${theme.sage.background} py-2xl`}>
      <div className="responsive-container-content">
        <ReportContent
          content={body}
          isGreenBG={!hasWhiteBackground}
          theme={theme}
        />
          <Signatures isGreenBG={!hasWhiteBackground} />
      </div>
    </section>
  );
};

export default ReportIntroSection;
