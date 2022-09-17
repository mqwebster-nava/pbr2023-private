import classNames from "classnames";

const StoryTitle = ({ anchor, title, colorTheme, isCollapsed, isDesktop }) => {
    const styles = classNames({
        "sticky top-[70px]": !isDesktop || !isCollapsed,
        "right-0 responsive-container": !isDesktop,
      });
    
    return (
      <div id={`storyTitleDiv-${anchor}`} className={`z-20 ${styles}`}>
        <div className={`bg-${colorTheme}-50 ml-auto w-full lg:w-2/3 pt-md `}>
          <h2
            id={`storyTitle-${anchor}`}
            className={`md:type-preset-3 type-preset-4 font-black text-${colorTheme}-900 py-md  opacity-100`}
          >
            {title}
          </h2>
        </div>
      </div>
    );
  };
  export default StoryTitle
  