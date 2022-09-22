import { ReportContent } from "../../../blocks";
import { Signatures } from "../../../atom";
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";

export interface ReportIntroSectionInterface {
  body: string;
  theme: ReportThemeInterface;
  isWhiteBG: boolean;
}

const ReportIntroSection: React.FC<ReportIntroSectionInterface> = ({ body, theme }) => {
  const hasWhiteBackground = theme.sage.background === undefined;
  return (
    <section className={`${theme.sage.background} py-2xl`}>
      <ResponsiveContentContainer alignment="center">
        <ReportContent
          content={body}
          isGreenBG={!hasWhiteBackground}
          theme={theme}
        />
          <Signatures isGreenBG={!hasWhiteBackground} />
      </ResponsiveContentContainer>
    </section>
  );
};

export default ReportIntroSection;
