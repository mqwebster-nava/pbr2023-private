import PostContent from "components/blocks/PostBody/PostContent";

const StoryDiv = ({ story, colorTheme }) => {
    return (
        <div
          id={`storySummary-${story.anchor}`}
          className={`w-full lg:w-2/3 ml-auto font-serif text-${colorTheme}-900 type-preset-6 bg-${colorTheme}-50 px-sm opacity-100 motion-reduce:opacity-100 `}
        >
          <PostContent docData={story.intro.json} docLinks={story.intro.links} />
       
          <div
            
            id={`storyContent-${story.anchor}`}
             className={` font-serif type-preset-6 tracking-wide font-light text-${colorTheme}-50 
              block pb-[200px]
            `}
          >
            <PostContent docData={story.body.json} docLinks={story.body.links} />
          </div>
        </div>
      );
    };
    
    
    export default StoryDiv;