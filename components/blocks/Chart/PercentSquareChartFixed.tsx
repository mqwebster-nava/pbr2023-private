import { PercentSquareGraph } from "components/atom";
import { ResponsiveContainer } from "components/blocks";

export const PercentSquareChartFixed = ({ title, stats, theme = "teal" }) => {
  return (
    <ResponsiveContainer contentClass="mx-0">
      <h3 className="text-2xl font-black border-b-2 border-gray-300">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 py-3xl">
        {stats.map((graph, index) => (
          <PercentSquareGraph
            key={`percent_square_graph_${index}`}
            percent={graph.percentage}
            description={graph.category}
            theme={theme}
            showTooltip={false}
            fixed
          />
        ))}
      </div>
    </ResponsiveContainer>
  );
};
