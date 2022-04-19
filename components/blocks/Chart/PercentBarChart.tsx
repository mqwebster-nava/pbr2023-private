import { PercentBarGraph } from "components/atom";
import { PercentBarGraphInterface } from "components/atom/Graph/PercentBarGraph";
import { ResponsiveContainer } from "components/blocks";

interface PercentBarChartInterface {
  description: string;
  graphs: Array<PercentBarGraphInterface>;
}

export const PercentBarChart: React.FC<PercentBarChartInterface> = ({
  description,
  graphs,
}) => {
  return (
    <ResponsiveContainer contentClass="mx-0">
      <p className="font-bold py-md">{description}</p>
      {graphs.map((graph, index) => (
        <PercentBarGraph key={`percent_bar_graph_${index}`} {...graph} />
      ))}
    </ResponsiveContainer>
  );
};
