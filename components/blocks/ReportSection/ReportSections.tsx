import ReportSection from "./ReportSection";

const ReportSections = ({ sections, theme }) => {
  return sections.map((section, index) => (
    <ReportSection key={index} {...section} theme={theme} />
  ));
};

export default ReportSections;
