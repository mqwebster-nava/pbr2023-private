import { useState } from "react";
import PostContent from "../PostBody/PostContent";
import Image from "next/image";


const StorySection = ({ story, colorTheme }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <div
        className={`block sticky top-[70px] h-[calc(100vh_-_70px)] w-screen -z-10 trigger-top bg-${colorTheme}-50`} //
      >
        <div className="relative h-[calc(100vw_*_9_/_16)] md:h-full w-screen mx-auto max-w-screen-2xl">
        <Image
        id={``}
        src={story.contextIllustration.url}
        width={16}
        height= {9}
        layout="fill"
        objectFit="cover"
        className=" w-screen absolute top-0 left-0 right-0 opacity-90 object-left-top"
        >
        </Image>
        <Image
        id={`section-${story.anchor}`}
        src={story.illustration.url}
        width={16}
        height= {9}
        layout="fill"
        objectFit="cover"
        className="storyImg w-screen absolute top-0 left-0 right-0 opacity-0 object-left-top"
        >
        </Image>
        </div>
           <div className="responsive-container w-2/3 pt-lg absolute top-0 z-10 right-0 pl-xl"  >
             <h2 id={`header-${story.anchor}`} className={"storyTitle type-preset-2 font-black"} > {story.title}</h2>
         </div>
      </div>

      <div className="responsive-container grid grid-cols-3 trigger-content">
      <div className="col-span-1"></div>
      <div className={"col-span-2"}>
        <div className="h-[200px]"></div>
        <div className="h-auto w-full  py-xl font-serif ">
          <div className="w-full h-[300px] flex justify-center items-center mb-md" >
            {story.callOut ? (
              <Image
                className={"z-10"}
                src={story.callOut.url}
                height={300}
                width={525}
              ></Image>
            ) : (
              "CALL OUT"
            )}
          </div>
          <PostContent
            docData={story.intro.json}
            docLinks={story.intro.links}
          />

          {isCollapsed ? (
            <button
              onClick={() => {
                setIsCollapsed(false);
              }}
            >
              Read More
            </button>
          ) : (
            <PostContent
              docData={story.body.json}
              docLinks={story.body.links}
            />
          )}
        </div>
        <div className="h-[200px]"></div>

        {/* </ResponsiveContentContainer> */}
      </div>
      </div>
    </>
  );
};

// const StorySectionContent = (story) => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   return <></>;
// };

export default StorySection;


// <div
// className={`block sticky top-[70px] h-[calc(100vh_-_70px)] w-screen -z-10 trigger-top bg-${colorTheme}-50`} //
// // style={{
// //   backgroundImage: `url(${story.illustration.url})`,
// //   backgroundRepeat: "no-repeat",
// //   backgroundPosition: "center center",
// //   backgroundSize: "cover",
// //   transition: "background-image 0.8s ease-in-out",
// // }}
// >