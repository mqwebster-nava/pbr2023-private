import { PercentSquareGraph } from "components/atom";
import { FilterControl, ResponsiveContainer } from "components/blocks";
import React, { useState } from "react";

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
  // Default to first item in filter selected.
  const defaultFilter = dataFilters[0];
  const [selectedFilter, updateFilter] = useState({
    ...defaultFilter,
  });
  const [multiSelected, setMultiSelected] = useState(false);

  // Two more selections made in data has the key suffixed with "_Multi"
  const multiKey = `${selectedFilter.id}_Multi`;

  const handleFilterClick = (e) => {
    const selectedTotal = dataFilters.find(
      (filter) => filter.id === e.target.value
    ).total;
    updateFilter({
      id: e.target.value,
      text: e.target.innerText,
      total: selectedTotal,
    });
  };

  return (
    <div>
      <ResponsiveContainer containerClass="pt-2xl" contentClass="mx-0">
        <h3 className="text-2xl font-black border-b-2 border-gray-300">
          {title}
        </h3>
        <p className="py-2xl">{content}</p>
      </ResponsiveContainer>

      <FilterControl
        filters={dataFilters}
        checkboxValue={checkbox && checkbox.value ? checkbox.value : null}
        checkboxLabel={checkbox && checkbox.label ? checkbox.label : null}
        theme={theme}
        handleFilterClick={handleFilterClick}
        handleCheckboxClick={() => setMultiSelected(!multiSelected)}
        selectedFilter={selectedFilter}
      >
        <div className="pt-3xl grid grid-cols-2 md:grid-cols-5">
          {stats.map((graph, index) => (
            <PercentSquareGraph
              key={`percent_square_graph_${index}`}
              percent={graph[selectedFilter.id]}
              description={graph[dataKey]}
              category={selectedFilter.text}
              theme={theme}
              multiPercent={multiSelected ? graph[multiKey] : null}
            />
          ))}
        </div>
      </FilterControl>

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
