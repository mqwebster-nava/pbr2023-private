import { ReportContent } from "../..";
import { Details } from "../../../atom";
import ReportShoutoutColumns from "./ReportShoutoutColumns";
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";


export interface ReportShoutoutSectionInterface {
  title: string;
  introduction: string;
  lists: Array<object>;
  theme: ReportThemeInterface;
}



const ReportShoutoutSection: React.FC<ReportShoutoutSectionInterface> = ({
  title,
  introduction,
  lists = null,
  theme,
}) => {
  const hasListOfNames = lists && lists.length > 0;
  return (
    <section >
      <ResponsiveContentContainer padding={"py-2xl"} alignment="center">
      <h2 className="type-preset-3 font-bold">{title}</h2>
      <div className="pb-xl">
        <ReportContent content={introduction} theme={theme} isGreenBG={false} />
      </div>
      {hasListOfNames && (
        <Details summary="See all shoutouts">
          {lists.map((list, index) => (
            <ReportShoutoutColumns
              key={`shoutouts_${index}`}
              list={list}
              theme={theme}
            />
          ))}
        </Details>
      )}
      </ResponsiveContentContainer>
    </section>
  );
};

export default ReportShoutoutSection;
