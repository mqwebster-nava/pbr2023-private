import { useState } from "react";
import Image from "next/image";
import PostContent from "../PostBody/PostContent";



const StorySection = ({ story, colorTheme }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
     <div
      id={`imageBackground-${story.anchor}`}
      className={`imageBackground block relative w-screen h-screen -z-10 bg-${colorTheme}-50 t-[70px]`} //top-[70px] h-[calc(100vh_-_70px)]
    >
      <div className="relative h-[calc(100vw_*_9_/_16)] md:h-full w-screen mx-auto max-w-screen-2xl"> 
      <Image
        id={``}
        src={story.contextIllustration.url}
        width={16}
        height={9}
        layout="fill"
        objectFit="cover"
        className=" w-screen absolute top-[70px] left-0 right-0 opacity-90 object-left-top"
      ></Image>
      <Image
        id={`storyImg-${story.anchor}`}
        src={story.illustration.url}
        width={16}
        height={9}
        layout="fill"
        objectFit="cover"
        className="storyImg w-screen absolute top-[70px] left-0 right-0 opacity-0 object-left-top"
      ></Image>
      </div>
      <div className="responsive-container w-2/3 pt-lg absolute top-[70px] z-10 right-0 pl-xl">
        <h2 
        id={`storyTitle-${story.anchor}`}
        className={"storyTitle type-preset-2 font-black"}
        >{story.title}</h2>
    </div>
    <div className="responsive-container w-2/3 pt-lg absolute top-[70px] z-10 right-0 pl-xl h-auto">
        <div
         id={`storyCallOut-${story.anchor}`}
         className=" storyCallOut w-full h-[250px] bg-gray-50 flex justify-center items-center mb-md ">
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
        <div 
         id={`storySummary-${story.anchor}`}
        className={`storySummary w-full font-serif text-${colorTheme}-900 type-preset-5`}>
          <PostContent
            docData={story.intro.json}
            docLinks={story.intro.links}
          />
          <button
                onClick={() => {
                  setIsCollapsed(false);
                }}
              >
                Read More
            </button>
        </div>
        {/* {!isCollapsed && (
              
            )} */}
      </div>
      <div 
       id={`storyContent-${story.anchor}`}
      className="storyContent opacity-0 responsive-container w-2/3 pt-lg absolute top-[70px] z-10 right-0 pl-xl h-auto">
          <PostContent
                docData={story.body.json}
                docLinks={story.body.links}
              />
     </div>

    </div>
    
 

      {/* <div className="responsive-container grid grid-cols-3 trigger-content">
        <div className="col-span-1"></div>
        <div className={"col-span-2"}>
          <div className="h-[200px]"></div>
          <div className="h-auto w-full  py-xl font-serif ">
            <div className="w-full h-[300px] flex justify-center items-center mb-md">
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

         
        </div>
      </div> */}
    </>
  );
};

// const StorySectionContent = (story) => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   return <></>;
// };

export default StorySection;

// const ImageBackground = ({ story, colorTheme }) => {
//   return (
//     // <div
//     //   className={`imageBackground  block w-screen h-screen -z-10 bg-${colorTheme}-50 t-[70px]`} //top-[70px] h-[calc(100vh_-_70px)]
//     // >
//     //   {/* <div className="relative h-[calc(100vw_*_9_/_16)] md:h-full w-screen mx-auto max-w-screen-2xl"> */}
//     //   <Image
//     //     id={``}
//     //     src={story.contextIllustration.url}
//     //     width={16}
//     //     height={9}
//     //     layout="fill"
//     //     objectFit="cover"
//     //     className=" w-screen absolute top-[70px] left-0 right-0 opacity-90 object-left-top"
//     //   ></Image>
//     //   <Image
//     //     id={`section-${story.anchor}`}
//     //     src={story.illustration.url}
//     //     width={16}
//     //     height={9}
//     //     layout="fill"
//     //     objectFit="cover"
//     //     className="storyImg w-screen absolute top-[70px] left-0 right-0 opacity-0 object-left-top"
//     //   ></Image>
//     //   <div className="responsive-container w-2/3 pt-lg absolute top-[70px] z-10 right-0 pl-xl">
//     //     <h2 className={"storyTitle type-preset-2 font-black"}>{story.title}</h2>
//     //   </div>
//     //   <div className="responsive-container w-2/3 pt-lg absolute top-[70px] z-10 right-0 pl-xl">
//     //     <div className="storyCallOut w-full h-[250px] bg-gray-50 flex justify-center items-center mb-md ">
//     //       {story.callOut ? (
//     //         <Image
//     //           className={"z-10"}
//     //           src={story.callOut.url}
//     //           height={300}
//     //           width={525}
//     //         ></Image>
//     //       ) : (
//     //         "CALL OUT"
//     //       )}
//     //     </div>
//     //     <div className="storySummary w-full">
//     //       <PostContent
//     //         docData={story.intro.json}
//     //         docLinks={story.intro.links}
//     //       />
//     //     </div>
//     //   </div>
//     //   {isCollapsed ? (
//     //           <button
//     //             onClick={() => {
//     //               setIsCollapsed(false);
//     //             }}
//     //           >
//     //             Read More
//     //           </button>
//     //         ) : (
//     //           <PostContent
//     //             docData={story.body.json}
//     //             docLinks={story.body.links}
//     //           />
//     //         )}
//     // </div>

//     // </div>
//  // );
// };

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
