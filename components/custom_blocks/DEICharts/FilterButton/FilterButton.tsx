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
    purple: "bg-purple-600 text-white"
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
      onClick={onClick}
      className={`
      w-fit
      whitespace-nowrap
      mt-2 mr-2 py-1 px-2 
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
