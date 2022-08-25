import { useState } from "react";
import Image from "next/image";
import PostContent from "../PostBody/PostContent";

const StorySection = ({ story, colorTheme }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log(isCollapsed);
  return (
    <div className={`bg-${colorTheme}-50 h-full relative`}>
      <div
        id={`storyTitleDiv-${story.anchor}`}
        className={`sticky top-[70px] z-20 right-0 responsive-container`}
      >
        <div className={`bg-${colorTheme}-50 ml-auto w-2/3`}>
          <h2
            id={`storyTitle-${story.anchor}`}
            className={`storyTitle type-preset-3 font-black text-${colorTheme}-900 py-md  opacity-100`}
          >
            {story.title}
          </h2>
        </div>
      </div>
      <div
        id={`imageBackground-${story.anchor}`}
        className={`imageBackground sticky block  w-screen bg-${colorTheme}-50 top-[70px] z-0`} // h-[calc(100vh_-_70px)]
      >
        <div className="relative h-[calc(100vw_*_9_/_16)] md:h-[calc(100vh_-_70)] md:max-h-[calc(100vh_-_70)] w-screen mx-auto max-w-screen-2xl">
          <Image
            id={``}
            src={story.contextIllustration.url}
            width={16}
            height={9}
            layout="fill"
            objectFit="cover"
            className=" w-screen absolute top-0p left-0 right-0 opacity-90 object-left-top"
          ></Image>
          <Image
            id={`storyImg-${story.anchor}`}
            src={story.illustration.url}
            width={16}
            height={9}
            layout="fill"
            objectFit="cover"
            className="storyImg w-screen absolute top-0 left-0 right-0 opacity-0 object-left-top transition-opacity duration-500"
          ></Image>
        </div>
      </div>
      <div
        id={`storyMain-${story.anchor}`}
        className="responsive-container pt-lg h-auto ml-auto z-10 relative"
      >
        <div
          id={`storyCallOut-${story.anchor}`}
          className=" w-2/3 ml-auto h-auto flex justify-start items-center my-md "
        >
          {story.callOut ? (
            <Image
              className={"z-10"}
              src={story.callOut.url}
              height={story.callOut.height}
              width={story.callOut.width}
            ></Image>
          ) : (
            "CALL OUT"
          )}
        </div>
        <div
          id={`storySummary-${story.anchor}`}
          className={` w-2/3 ml-auto font-serif text-${colorTheme}-900 type-preset-6 ${
            isCollapsed ? "pb-[300px]" : "pb-md"
          }`}
        >
          <PostContent
            docData={story.intro.json}
            docLinks={story.intro.links}
          />
          <button
            className="font-serif type-preset-6 underline hover:font-bold"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {isCollapsed ? "Read More" : "Read less"}
          </button>
        </div>
        <div
          id={`storyContent-${story.anchor}`}
          className={`storyContent w-2/3 ml-auto pb-[200px] font-serif type-preset-6 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <PostContent docData={story.body.json} docLinks={story.body.links} />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
