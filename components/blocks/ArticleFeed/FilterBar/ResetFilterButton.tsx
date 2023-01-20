import classNames from "classnames";

const ResetFilterButton = ({
    type,
    onClick,
    title,
    isActive,
  }) => {
    const styles = classNames({
      "underline hover:text-sage-700": isActive,
      "text-gray-700 ": !isActive,
    });
  
    return (
      <button
        disabled={!isActive}
        className={`  ${styles} type-preset-6 text-black border-black border-[1px] hover:bg-sage-100 type-preset-6  px-4 py-md text-center inline-flex items-center`}
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
      </button>
    );
  };

  export default ResetFilterButton;