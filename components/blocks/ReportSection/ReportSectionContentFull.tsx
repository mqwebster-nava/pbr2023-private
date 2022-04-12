import classNames from "classnames";
import { ReportContent } from "..";
import { Button } from "../../atom";
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
    "bg-sage-pbr-2018": background === "sea-foam",
    "bg-navy-pbr-2020": background === "navy",
    "bg-white": background === "white",
  });

  return (
    <section className={`${backgroundClass} py-2xl`}>
      {metrics && <ReportMetrics metrics={metrics} />}
      <div className="responsive-container grid grid-cols-1 md:grid-cols-2">
        <div className="">
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
        </div>
      </div>
    </section>
  );
};

export default ReportSectionContentFull;
