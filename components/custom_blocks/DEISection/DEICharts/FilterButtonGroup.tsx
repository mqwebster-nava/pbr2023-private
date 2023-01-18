
import { FilterButton } from "./FilterButton/FilterButton";
import { FilterInterface } from "./FilterControl";

interface FilterButtonGroupInterface {
  filters: Array<any>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  selectedFilter: FilterInterface;
  theme: string;
  regionID?:string;
  showRespondents?: boolean;
}

export const FilterButtonGroup: React.FC<FilterButtonGroupInterface> = ({
  filters,
  handleClick,
  selectedFilter,
  theme,
  regionID,
  showRespondents=true
}) => {
  return (
    <div className="flex flex-wrap">
      {filters.map((filter, index) => (
        <FilterButton
          key={`filter_button_${index}`}
          aria-controls={regionID}
          onClick={handleClick}
          value={filter.id}
          selected={selectedFilter.id === filter.id}
          theme={theme}
        >
          {filter.text}
        </FilterButton>
      ))}
      {showRespondents && <p className="block mt-lg">{selectedFilter.total} respondents</p>}
    </div>
  );
};
