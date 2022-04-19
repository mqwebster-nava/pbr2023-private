import classNames from "classnames";
import { ReportContent } from "../../../components/blocks";
import { Button } from "../../../components/atom";
import { ReportMetrics } from "../ReportMetrics/ReportMetrics";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";

type Background = "sea-foam" | "navy" | "white";

export interface ReportSectionContentFull {
  background?: Background;
  title?: string;
  titleId?: string;
  body: string;
  buttonText?: string;
  buttonLink?: string;
  metrics: Array<object>;
}

const ReportSectionContentFull = ({
  background = "white",
  title = null,
  titleId = null,
  body,
  buttonText = "",
  buttonLink = "",
  metrics = null,
}) => {
  const backgroundClass = classNames({
    "bg-sea-foam-base": background === "sea-foam",
    "bg-navy-pbr-2020": background === "navy",
    "bg-white": background === "white",
  });

  return (
    <div className={`${backgroundClass} py-2xl`}>
      {metrics && <ReportMetrics metrics={metrics} />}
      <ResponsiveContainer
        containerClass="pr-0 grid grid-cols-1 md:grid-cols-2"
        contentClass="pr-0"
      >
        {title && (
          <h2 id={titleId} className="text-3xl font-bold">
            {title}
          </h2>
        )}
        <ReportContent
          content={body}
          headerSize="large"
          headerColor={{ h3: "text-sage-pbr-2020-light" }}
        />
        {buttonText && buttonLink && (
          <div className="py-md">
            <Button href={buttonLink}>{buttonText}</Button>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ReportSectionContentFull;
