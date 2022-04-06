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

const ReportIntroSection: React.FC<ReportIntroSection> = ({
  body,
  isWhiteBG,
  theme,
}) => {
  return (
    <section className={`${theme.sage.background} py-2xl md:px-4xl`}>
      <div className="responsive-container-content">
        <ReportContent content={body} isGreenBG={!isWhiteBG} theme={theme} />
      </div>
      <Signatures isGreenBG={!isWhiteBG} />
    </section>
  );
};

export default ReportIntroSection;
