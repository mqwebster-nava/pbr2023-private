import ReportSectionHeaderNavy from "./ReportHeaderSectionNavy";
import ReportSectionContentFull from "./ReportSectionContentFull";
import Image from "next/image";

const ReportSectionStacked = ({
  title,
  titleId,
  intro,
  imageAltText,
  image,
  body,
  background,
  metrics,
}) => {
  return (
    <section>
      <ReportSectionHeaderNavy
        title={title}
        titleId={titleId}
        introduction={intro}
      />
      <Image alt={imageAltText} src={image} layout="responsive" />
      <ReportSectionContentFull
        body={body}
        background={background}
        metrics={metrics}
      />
    </section>
  );
};

export default ReportSectionStacked;
