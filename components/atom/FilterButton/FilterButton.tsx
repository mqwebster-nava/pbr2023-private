type FilterButtonInterface = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  selected: boolean;
  theme?: string;
};

const colors = {
  selected: {
    teal: "sage-pbr-2020-light",
    orange: "orange-dark",
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
      border border-gray-400 rounded
      hover:bg-gray-500 hover:text-white
      ${selected ? `bg-${colors.selected[theme]} text-white` : ""}
    `}
      value={value}
    >
      {children}
    </button>
  );
};
