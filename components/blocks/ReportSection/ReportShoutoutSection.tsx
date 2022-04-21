import { ReportContent } from "../../../components/blocks";
import { Details } from "../../../components/atom";
import ReportShoutoutColumns from "./ReportShoutoutColumns";
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";


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
    <section className="responsive-container-content py-2xl">
      <h2 className="text-4xl font-bold">{title}</h2>
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
    </section>
  );
};

export default ReportShoutoutSection;
