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
        className={` px-md ${styles} type-preset-6`}
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