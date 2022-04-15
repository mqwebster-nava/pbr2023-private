import { FilterControl } from "components/blocks";

interface CheckboxInterface {
  value: string;
  label: string;
}

interface PercentSquareChartInterface {
  title: string;
  content: string;
  stats: Array<any>;
  dataFilters: Array<any>;
  dataKey: string;
  checkbox?: CheckboxInterface;
  context: Array<string>;
  theme?: string;
}

export const PercentSquareChart: React.FC<PercentSquareChartInterface> = ({
  title,
  content,
  stats,
  dataFilters,
  dataKey,
  checkbox = null,
  context,
  theme = "teal",
}) => {
  return (
    <div>
      <div className="responsive-container pt-2xl">
        <div className="responsive-container-content mx-0">
          <h3 className="text-2xl font-black border-b-2 border-gray-300">
            {title}
          </h3>
          <p className="py-2xl">{content}</p>
        </div>
      </div>
      <FilterControl
        filters={dataFilters}
        descriptionKey={dataKey}
        graphData={stats}
        checkboxValue={checkbox && checkbox.value ? checkbox.value : null}
        checkboxLabel={checkbox && checkbox.label ? checkbox.label : null}
        theme={theme}
      />
      <div className="responsive-container">
        <div className="responsive-container-content mx-0">
          {context.map((text, index) => (
            <p
              key={`chart_context_${index}`}
              className={`py-md ${index !== 0 ? "font-bold" : ""}`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
