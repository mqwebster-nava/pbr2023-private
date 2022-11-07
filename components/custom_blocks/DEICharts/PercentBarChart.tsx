import { PercentBarGraph, PercentBarGraphInterface } from "components/custom_blocks/DEICharts/Graph/PercentBarGraph";
interface PercentBarChartInterface {
  description: string;
  graphs: Array<PercentBarGraphInterface>;
}

export const PercentBarChart: React.FC<PercentBarChartInterface> = ({
  description,
  graphs,
}) => {
  return (
    <>
      <p className="font-bold py-md">{description}</p>
      {graphs.map((graph, index) => (
        <PercentBarGraph key={`percent_bar_graph_${index}`} {...graph} />
      ))}
    </>
  );
};
