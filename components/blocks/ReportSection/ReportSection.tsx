import { ReportContent } from "../";
import { ReportSectionInterface } from "lib/report_data_models";

const ReportSection: React.FC<ReportSectionInterface> = ({
  picture,
  picture_position = "right",
  content,
  isWhiteBG,
  theme,
}) => {
  const { title, introduction, body } = content;

  return (
    <section className={`${!isWhiteBG ? theme.sage.background : ""}`}>
      <div className="responsive-container-content py-4xl">
        <h2 className="text-4xl font-bold text-sage-pbr">{title}</h2>
        <ReportContent
          content={introduction}
          isGreenBG={!isWhiteBG}
          theme={theme}
        />
        <img src={picture} className="md:hidden block w-full" />
      </div>
      <div className="grid md:grid-cols-2">
        {picture_position === "right" && (
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
        {picture_position === "left" && (
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
