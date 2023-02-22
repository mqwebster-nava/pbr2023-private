const FilterButton = ({ isOpen, setIsOpen, title }) => (
  <button
    id="dropdownCheckboxButton"
    className={`min-w-[200px] text-black border-black border-[1px] ${
      isOpen && "bg-sage-100"
    } hover:bg-sage-100 type-preset-6  px-md py-sm  inline-flex items-center justify-between`}
    type="button"
    onClick={() => {
     setIsOpen(!isOpen);
    }}
  >
    {title}
<div className="ml-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      className="pl-lg"
      viewBox="0 0 26 24"
      fill="none"
    >
      <path
        d="M10.1747 11.952L1 1H25.2096L15.8908 11.952V20.1179L10.1747 23V11.952Z"
        stroke="black"
        stroke-linejoin="round"
      />
    </svg>
    </div>
  </button>
);

export default FilterButton;

{
  /* <svg
        className={`ml-2 w-4 h-4 transition duration-300 ${isOpen&& "rotate-180"}`}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg> */
}
