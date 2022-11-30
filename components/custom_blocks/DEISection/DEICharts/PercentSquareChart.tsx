import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { FilterControl} from "components/blocks";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React, { useState } from "react";
import { PercentSquareGraph } from "./Graph/PercentSquareGraph";

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
  theme = "sage",
}) => {
  // Default to first item in filter selected.
  dataFilters = dataFilters.sort((a,b)=>b.total-a.total)
  const defaultFilter = dataFilters[0];
  const regionId = `${title}Charts`;
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
   <ResponsiveContentContainer alignment="left" padding="pb-xl">
      <div className="pt-2xl">
        <h3 className="type-preset-4 font-bold font-sans pb-md">
          {title}
        </h3>
        <HorizontalLine  variant={"light"} hideFromVoiceOver/>
        <p className="py-lg type-preset-6">{content}</p>
      </div>

      <FilterControl
        label={`Filter ${title} data by employee role`}
        regionID={regionId}
        filters={dataFilters}
        checkboxValue={checkbox && checkbox.value ? checkbox.value : null}
        checkboxLabel={checkbox && checkbox.label ? checkbox.label : null}
        theme={theme}
        handleFilterClick={handleFilterClick}
        handleCheckboxClick={() => setMultiSelected(!multiSelected)}
        selectedFilter={selectedFilter}
      >
        <div className="pt-lg grid grid-cols-2 md:grid-cols-5"
         role="region" 
         aria-live="polite"
          id={regionId}
          aria-label={`${title} data, filtered by ${selectedFilter.text}`}
        >
          {stats.sort((a,b)=>a[dataKey].localeCompare(b[dataKey])).map((graph, index) => (
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
        <div className="mx-0 py-md type-preset-7">
          {context.map((text, index) => (
            <p
              key={`chart_context_${index}`}
              className={` ${index !== 0 ? "font-bold" : ""}`}
            >
              {text}
            </p>
          ))}
        </div>
    </ResponsiveContentContainer>
  );
};


// if wanted to sort by #/%
//  stats.sort((a,b)=>b[selectedFilter.id]-a[selectedFilter.id] ).map