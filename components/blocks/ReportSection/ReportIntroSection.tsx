import { ReportContent } from "..";
import { Signatures } from "../../atom";

export interface ReportIntroSection {
  body: string;
  isWhiteBG: boolean;
  theme: {
    sage: {
      text: string;
      background: string;
    };
    default: {
      text: string;
    };
  };
}

const ReportIntroSection: React.FC<ReportIntroSection> = ({ body, theme }) => {
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
