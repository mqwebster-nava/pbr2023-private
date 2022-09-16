


const CalloutDiv = ({ anchor, featuredCallOut, isCollapsed, colorTheme}) => {
    return (
      <div
        id={`storyCallOut-${anchor}`}
        className={`bg-${colorTheme}-50 border-y-[1px] border-${colorTheme}-900 w-full md:w-2/3 ml-auto h-auto flex justify-start my-md min-h-[100px] md:min-h-[140px] ${isCollapsed ? "opacity-0 motion-reduce:opacity-100" : "opacity-100"}`}
      >
        <p className={`pt-md type-preset-3 font-serif font-light text-${colorTheme}-900`}>{featuredCallOut.body}</p>
     
      </div>
    );
  };
  
  export default CalloutDiv;
  