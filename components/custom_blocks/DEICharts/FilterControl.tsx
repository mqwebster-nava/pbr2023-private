import { CheckBox, PercentSquareGraph } from "components/atom";
import { FilterButtonGroup } from "./FilterButtonGroup";

export interface FilterInterface {
  id: string;
  text: string;
  total: string;
}

interface FilterControlInterface {
  filters: Array<FilterInterface>;
  // descriptionKey: string;
  // graphData: Array<any>;
  label?:string;
  theme?: string;
  checkboxValue?: string;
  checkboxLabel?: string;
  selectedFilter: FilterInterface;
  handleFilterClick: React.MouseEventHandler<HTMLButtonElement>;
  handleCheckboxClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const FilterControl: React.FC<FilterControlInterface> = ({
  filters,
   label,
  theme = "sage",
  checkboxValue = "",
  checkboxLabel = "",
  selectedFilter,
  handleFilterClick,
  handleCheckboxClick,
  children,
}) => {
  return (
    <div aria-label={label} >
      <p className="font-black type-preset-5">Filter by</p>
      <FilterButtonGroup
        filters={filters}
        handleClick={handleFilterClick}
        selectedFilter={selectedFilter}
        theme={theme}
      />
      {checkboxValue && (
        <CheckBox
          value={checkboxValue}
          label={checkboxLabel}
          handleClick={handleCheckboxClick}
        />
      )}
      {children}
    </div>
  );
};
