import classNames from "classnames";

type FilterButtonInterface = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  selected: boolean;
  theme?: string;
};

const colors = {
  selected: {
    sage: "bg-sage-700 text-white",
    gold: "bg-gold-900 text-gray-900",
    purple: "bg-purple-800 text-white",
    plum: "bg-plum-800 text-white",
    navy: "bg-navy-800 text-white"
  },
};


export const FilterButton: React.FC<FilterButtonInterface> = ({
  children,
  onClick,
  value,
  selected,
  theme,
  ...rest
}) => {
  return (
    <button
     
      {...rest}
      aria-label={`${children}, ${selected? "selected": "unselected"}`}
      onClick={onClick}
      className={`
      w-fit
      whitespace-nowrap
      py-xs px-sm 
      border border-gray-400 
      hover:bg-gray-500 hover:text-white
      ${selected ? `${colors.selected[theme]}` : ""}
    `}
      value={value}
    >
      {children}
    </button>
  );
};
