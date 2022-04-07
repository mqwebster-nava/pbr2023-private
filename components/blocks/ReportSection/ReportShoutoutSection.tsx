import { ReportContent } from "..";
import { Details } from "../../atom";
import ReportShoutoutColumns from "./ReportShoutoutColumns";
import { ReportShoutoutSection } from "lib/report_data_models";

const ReportShoutoutSection: React.FC<ReportShoutoutSection> = ({
  title,
  introduction,
  lists = null,
  theme,
}) => {
  const hasListOfNames = lists && lists.length > 0;
  return (
    <section className="responsive-container-content py-2xl">
      <h2 className="text-3xl font-bold">{title}</h2>
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
