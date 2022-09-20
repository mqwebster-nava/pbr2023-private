import classNames from "classnames";

const StoryTitle = ({ anchor, title, colorTheme,  isDesktop }) => {
    // const styles = classNames({
    //     "right-0 responsive-container": !isDesktop,
    //   });  ${styles}
    
    return (
      <div id={`storyTitleDiv-${anchor}`} className={`z-20 sticky top-[70px]`}>
        <div className={`bg-${colorTheme}-50 px-sm ml-auto w-full lg:w-2/3 pt-md `}>
      
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
  