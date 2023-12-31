import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { PercentSquareGraph } from "./Graph/PercentSquareGraph";

export const PercentSquareChartFixed = ({ title, stats, theme = "teal" }) => {
  return (
    <ResponsiveContentContainer alignment="left" padding="pb-xl">
       <div className="pt-2xl">
      <h3 className="type-preset-4 font-bold font-sans pb-md">
        {title}
      </h3>
      <HorizontalLine  variant={"light"} hideFromVoiceOver/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 py-lg gap-sm">
        {stats.sort((a,b)=> b.percentage-a.percentage).map((graph, index) => (
          <PercentSquareGraph
            key={`percent_square_graph_${index}`}
            percent={graph.percentage}
            description={graph.category}
            ariaLabel={`${graph.percentage}% of employees identify as ${graph.category}. ${("tooltipText" in graph) && graph.tooltipText}`}
            theme={theme}
            tooltipText={("tooltipText" in graph) && graph.tooltipText }
            showTooltip={("tooltipText" in graph)}
            fixed          />
        ))}
      </div>
      </ResponsiveContentContainer>
  );
};
