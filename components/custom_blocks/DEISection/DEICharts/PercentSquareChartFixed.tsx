import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { PercentSquareGraph } from "./Graph/PercentSquareGraph";

export const PercentSquareChartFixed = ({ title, stats, theme = "teal" }) => {
  return (
    <ResponsiveContentContainer alignment="left" padding="pb-xl">
       <div className="pt-2xl">
      <h3 className="type-preset-4 font-black border-b-2 border-gray-300">
        {title}
      </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 py-lg">
        {stats.map((graph, index) => (
          <PercentSquareGraph
            key={`percent_square_graph_${index}`}
            percent={graph.percentage}
            description={graph.category}
            theme={theme}
            showTooltip={false}
            fixed          />
        ))}
      </div>
      </ResponsiveContentContainer>
  );
};
