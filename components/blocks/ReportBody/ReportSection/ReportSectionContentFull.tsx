import classNames from "classnames";
import { ReportContent } from "../..";
import { Button } from "../../../atom";
import { ReportMetrics } from "../ReportMetrics/ReportMetrics";

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
    "bg-sage-50": background === "sea-foam",
    "bg-navy-800": background === "navy",
    "bg-white": background === "white",
  });

  return (
    <div className={`${backgroundClass} py-2xl`}>
      {metrics && <ReportMetrics metrics={metrics} />}
      <div
        className="responsive-container"
       
      >
        <div className="w-full md:w-2/3">

       
        {title && (
          <h2 id={titleId} className="type-preset-3 font-bold">
            {title}
          </h2>
        )}
        <ReportContent
          content={body}
          headerSize="large"
          headerColor={{ h3: "text-sage-800" }}
        />
        {buttonText && buttonLink && (
          <div className="py-md">
            <Button href={buttonLink}>{buttonText}</Button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ReportSectionContentFull;
