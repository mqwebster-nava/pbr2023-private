import { PercentBarGraph } from "components/atom";
import { PercentBarGraphInterface } from "components/atom/Graph/PercentBarGraph";

interface PercentBarChartInterface {
  description: string;
  graphs: Array<PercentBarGraphInterface>;
}

export const PercentBarChart: React.FC<PercentBarChartInterface> = ({
  description,
  graphs,
}) => {
  return (
    <div className="responsive-container">
      <div className="responsive-container-content mx-0">
        <p className="font-bold py-md">{description}</p>
        {graphs.map((graph, index) => (
          <PercentBarGraph key={`percent_bar_graph_${index}`} {...graph} />
        ))}
      </div>
    </div>
  );
};
