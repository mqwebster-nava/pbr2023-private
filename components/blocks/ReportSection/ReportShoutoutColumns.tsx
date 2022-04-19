import { ReportContent } from "../../../components/blocks";

const ReportShoutoutColumns = ({ list, theme }) => {
  const { title, one, two, three } = list;
  const columns = [one, two, three];
  return (
    <>
      <h3 className="text-2xl font-bold py-md">{title}</h3>
      <div className="grid grid-cols-3">
        {columns.map((column, index) => (
          <ReportContent
            key={index}
            content={column}
            theme={theme}
            isGreenBG={false}
          />
        ))}
      </div>
    </>
  );
};

export default ReportShoutoutColumns;
