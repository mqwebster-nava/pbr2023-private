import classNames from "classnames";

const ResetFilterButton = ({ type, onClick, title, isActive }) => {
  const styles = classNames({
    "underline hover:text-sage-700": isActive,
    "text-gray-700 ": !isActive,
  });

  return (
    <button
      disabled={!isActive}
      className={`${styles} type-preset-6 text-black type-preset-6 pr-md py-sm text-center inline-flex items-center gap-2`}
      onClick={() => {
        Array.from(document.getElementsByClassName(`${type}CheckBox`)).forEach(
          (el) => {
            // @ts-ignore
            el.checked = false;
          }
        );
        onClick();
      }}
    >
      {title}

      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.46434 0.785156L3.53577 4.71373L7.46434 8.6423"
          className="stroke-current"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.75 12.9648C2.75 14.5965 3.23385 16.1916 4.14038 17.5483C5.0469 18.905 6.33537 19.9624 7.84286 20.5868C9.35035 21.2113 11.0092 21.3747 12.6095 21.0563C14.2098 20.738 15.6798 19.9523 16.8336 18.7985C17.9874 17.6447 18.7732 16.1747 19.0915 14.5743C19.4098 12.974 19.2464 11.3152 18.622 9.80771C17.9976 8.30021 16.9402 7.01174 15.5835 6.10522C14.2267 5.1987 12.6317 4.71484 11 4.71484H3.53571"
          className="stroke-current"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default ResetFilterButton;
