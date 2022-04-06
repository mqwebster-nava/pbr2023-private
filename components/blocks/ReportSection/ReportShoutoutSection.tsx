import { ReportContent } from "..";
import { Details } from "../../atom";
import ReportShoutoutColumns from "./ReportShoutoutColumns";

export interface ReportShoutoutSection {
  title: string;
  introduction: string;
  lists: Array<object>;
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

const ReportShoutoutSection: React.FC<ReportShoutoutSection> = ({
  title,
  introduction,
  lists = null,
  theme,
}) => {
  return (
    <section className="responsive-container-content py-2xl">
      <h2 className="text-3xl font-sans font-bold">{title}</h2>
      <div className="pb-xl">
        <ReportContent content={introduction} theme={theme} isGreenBG={false} />
      </div>
      {lists && (
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
