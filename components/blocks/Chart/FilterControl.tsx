import { CheckBox, FilterButton, PercentSquareGraph } from "components/atom";
import React, { useState } from "react";
import { FilterButtonGroup } from "./FilterButtonGroup";

export interface FilterInterface {
  id: string;
  text: string;
  total: string;
}

interface FilterControlInterface {
  filters: Array<FilterInterface>;
  descriptionKey: string;
  graphData: Array<any>;
  theme?: string;
  checkboxValue?: string;
  checkboxLabel?: string;
}

export const FilterControl: React.FC<FilterControlInterface> = ({
  filters,
  descriptionKey,
  graphData,
  theme = "teal",
  checkboxValue = "",
  checkboxLabel = "",
}) => {
  // Default to first item in filter selected.
  const defaultFilter = filters[0];
  const [selectedFilter, updateFilter] = useState({
    ...defaultFilter,
  });
  const [multiSelected, setMultiSelected] = useState(false);

  // Two more selections made in data has the key suffixed with "_Multi"
  const multiKey = `${selectedFilter.id}_Multi`;

  const handleClick = (e) => {
    const selectedTotal = filters.find(
      (filter) => filter.id === e.target.value
    ).total;
    updateFilter({
      id: e.target.value,
      text: e.target.innerText,
      total: selectedTotal,
    });
  };

  return (
    <div className="responsive-container">
      <div className="responsive-container-content mx-0">
        <p className="font-black text-lg">Filter by</p>
        <FilterButtonGroup
          filters={filters}
          handleClick={handleClick}
          selectedFilter={selectedFilter}
          theme={theme}
        />
        {checkboxValue && (
          <CheckBox
            value={checkboxValue}
            label={checkboxLabel}
            handleClick={() => setMultiSelected(!multiSelected)}
          />
        )}
        <div className="pt-3xl grid grid-cols-2 md:grid-cols-5">
          {graphData.map((graph, index) => (
            <PercentSquareGraph
              key={`percent_square_graph_${index}`}
              percent={graph[selectedFilter.id]}
              description={graph[descriptionKey]}
              category={selectedFilter.text}
              theme={theme}
              multiPercent={multiSelected ? graph[multiKey] : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
