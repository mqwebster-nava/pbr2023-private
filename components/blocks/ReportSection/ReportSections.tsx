import ReportSection from "./ReportSection";
import ReportSectionStacked from "./ReportSectionStacked";

const ReportSections = ({ sections, theme, stacked = false }) => {
  return sections.map((section, index) => {
    return stacked ? (
      <ReportSectionStacked key={index} {...section} />
    ) : (
      <ReportSection key={index} {...section} theme={theme} />
    );
  });
};

export default ReportSections;
