import { CheckBox } from "components/atom/CheckBox/CheckBox";
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
  regionID: string;
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
  regionID,
  theme = "sage",
  checkboxValue = "",
  checkboxLabel = "",
  selectedFilter,
  handleFilterClick,
  handleCheckboxClick,
  children,
}) => {
  return (
    <fieldset aria-label={label} >
      <legend className=" font-bold type-preset-6 py-md">Filter by</legend >
      <div >
      
      <FilterButtonGroup
        filters={filters}
        handleClick={handleFilterClick}
        selectedFilter={selectedFilter}
        theme={theme}
        regionID={regionID}
      />
      {checkboxValue && (
       <div className="pt-sm"> <CheckBox
          value={checkboxValue}
          label={checkboxLabel}
          handleClick={handleCheckboxClick}
        /></div>
      )}
      </div>
      {children}
    </fieldset>
  );
};
