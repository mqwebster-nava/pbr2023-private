import { ReportContent } from "../../../components/blocks";
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";

export interface ReportSectionInterface {
  picture: string;
  picturePosition: string;
  pictureAltText: string;
  content: {
    title: string;
    introduction: string;
    body: string;
  };
  isWhiteBG: boolean;
  theme: ReportThemeInterface;
  isGreenBG: boolean;
}

const ReportSection: React.FC<ReportSectionInterface> = ({
  picture,
  picturePosition = "right",
  pictureAltText,
  content,
  isWhiteBG,
  theme,
}) => {
  const { title, introduction, body } = content;

  return (
    <section className={`${!isWhiteBG ? theme.sage.background : ""}`}>
      <div className="responsive-container-content py-4xl">
        <h2 className="type-preset-3 font-bold text-sage-pbr">{title}</h2>
        <ReportContent
          content={introduction}
          isGreenBG={!isWhiteBG}
          theme={theme}
        />
        <img
          src={picture}
          className="md:hidden block w-full"
          alt={pictureAltText}
        />
      </div>
      <div className="grid md:grid-cols-2">
        {picturePosition === "right" && (
          <div className="p-2xl">
            <ReportContent
              content={body}
              isGreenBG={!isWhiteBG}
              theme={theme}
            />
          </div>
        )}
        <div
          className="hidden md:block sticky top-0 h-screen"
          style={{
            background: `url(${picture})` + " no-repeat center center",
            backgroundSize: "cover",
          }}
        />
        {picturePosition === "left" && (
          <div className="p-2xl">
            <ReportContent
              content={body}
              isGreenBG={!isWhiteBG}
              theme={theme}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ReportSection;
