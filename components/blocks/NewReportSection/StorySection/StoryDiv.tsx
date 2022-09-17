import PostContent from "components/blocks/PostBody/PostContent";

const StoryDiv = ({ story, colorTheme, isCollapsed, setCollapsed }) => {
    return (
        <div
          id={`storySummary-${story.anchor}`}
          className={`w-full lg:w-2/3 ml-auto font-serif text-${colorTheme}-900 type-preset-6 bg-${colorTheme}-50 ${isCollapsed ? "opacity-0 motion-reduce:opacity-100" : "opacity-100"} `}
        >
          <PostContent docData={story.intro.json} docLinks={story.intro.links} />
          <button 
          id={`expandBtn-${story.anchor}`}
          className={` pt-md w-full flex justify-start items-center  bg-${colorTheme}-50 hover:underline`}
          onClick={() => {
            setCollapsed(!isCollapsed);
          }} 
          >
            <div
              className="font-serif type-preset-6 font-bold text-start  w-[100px]"
            >
              {isCollapsed ? "Read more" : "Read less"}
            </div>
            <div className={`chevron ${!isCollapsed && "rotate-180"}`}>
                            <svg
                            className={`stroke-${colorTheme}-900`}
                              width="18"
                              height="9"
                              viewBox="0 0 20 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 1L10 10L1 1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
          </button>
          <div
            onClick={ ()=> {if(isCollapsed)setCollapsed(!isCollapsed)}}
            id={`storyContent-${story.anchor}`}
             className={` font-serif type-preset-6 tracking-wide font-light text-${colorTheme}-50 ${
              isCollapsed ? `max-h-[100px] overflow-clip relative opacity-70 hover:opacity-100 cursor-pointer` : "block pb-[200px]"
            }`}
          >
              <div className={`absolute top-0 left-0  h-[100px] z-10 w-full 
              ${ isCollapsed &&  ` bg-gradient-to-t from-${colorTheme}-50`}`}></div>
            <PostContent docData={story.body.json} docLinks={story.body.links} />
          </div>
        </div>
      );
    };
    
    
    export default StoryDiv;