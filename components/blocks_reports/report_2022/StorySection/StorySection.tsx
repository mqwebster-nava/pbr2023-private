import { useEffect, useState } from "react";
import Image from "next/image";

import Callout from "components/blocks_reports/ReportContent/Callout";
import ReportContent from "components/blocks_reports/ReportContent/ReportContent";
import classNames from "classnames";
import { LinkText } from "components/atom/LinkText/LinkText";
import ArrowDown from "../Atoms/ArrowDown";

const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  nextSection,
  nextSectionTitle,
  nextSectionType = "story"
}) => {
  const storyId = `${sectionAnchor}--${story.anchor}`
  const nextId = nextSection

  const textStyles = classNames({
    "text-gold-900": colorTheme == "gold",
    "text-plum-900": colorTheme == "plum",
    "text-sage-900": colorTheme == "sage",
    "text-purple-900": colorTheme == "purple",
    "text-navy-900": colorTheme == "navy",
  });

  const borderStyles = classNames({
    "border-t-[1px] border-gold-900": colorTheme == "gold",
    "border-t-[1px] border-plum-500": colorTheme == "plum",
    "border-t-[1px] border-sage-600": colorTheme == "sage",
    "border-t-[1px] border-purple-600": colorTheme == "purple",
    "border-t-[1px] border-navy-600": colorTheme == "navy",
  });

  const hoverBgStyles = classNames({
    "hover:bg-gold-50": colorTheme == "gold",
    "hover:bg-plum-50": colorTheme == "plum",
    "hover:bg-sage-50": colorTheme == "sage",
    "hover:bg-purple-50": colorTheme == "purple",
    "hover:bg-navy-50": colorTheme == "navy",
  });

  return (
    <div className={`py-md w-full type-preset-3 ${textStyles} ${borderStyles} ${hoverBgStyles}`}>
        <div className={`responsive-container flex items-center justify-between`}>
          <p
            className={`font-serif font-semibold`}
          >
            {story.title}
          </p>

          <div className={``}>
            <ArrowDown color={colorTheme} />
          </div>
        </div>
    </div>
  )
}

// const StorySection = ({
//   story,
//   colorTheme,
//   sectionAnchor,
//   nextSection,
//   nextSectionTitle,
//   nextSectionType = "story",
// }) => {
//   const storyId = `${sectionAnchor}--${story.anchor}`;
//   const nextId = nextSection;

//   const textColor =
//     colorTheme == "gold" ? "text-gold-darktext" : `text-${colorTheme}-900`;
//   const darkColor = colorTheme == "gold" ? "gold-dark" : `${colorTheme}-900`;
//   const borderColor = classNames({
//     "border-t-plum-700": colorTheme === "plum",
//     "border-t-sage-800": colorTheme === "sage",
//     "border-t-navy-600": colorTheme === "navy",
//     "border-t-gold-pbrcustomdark": colorTheme === "gold",
//   });
//   const LinkedPost = ({url})=>{
//     if(!url)return null;
//     const linkText = url.includes("/insights/") ? "Insights article." : "case study."
//     return (<p className={`type-preset-6 font-bold font-serif pt-md`}>To learn more, read our <LinkText href={url} variant={"underlined"} color={"inherit"} hoverStyle={"sage"}>{linkText}</LinkText></p>)
//   }

  // return (
  //   <section className="" id={`${sectionAnchor}--${story.anchor}`}>
  //     <div className={`bg-${colorTheme}-50 relative min-h-[200vh] `}>
  //       <ImageBackgroundContainerDesktop
  //         story={story}
  //         colorTheme={colorTheme}
  //       ></ImageBackgroundContainerDesktop>
  //       <div
  //         className={` h-auto  z-30 relative  
  //         -mt-[calc(100vw_*_9_/_16_+_100px)]
  //         landscape:-mt-[calc(100vh_-_70px)] `}
  //       >
  //         <div
  //           className={` grid grid-cols-12 responsive-container z-20 sticky top-[70px]`}
  //         >
  //           <div
  //             className={`lg:landscape:col-start-5 lg:landscape:col-span-8 col-start-0 col-span-12 pr-xl  bg-${colorTheme}-50  pt-md`}
  //             id={`storyTitleDiv-${story.anchor}`}
  //           >
  //             <h3
  //               id={`storyTitle-${story.anchor}`}
  //               className={`font-black ${textColor} pt-md pb-xl  opacity-100 `}
  //             >
  //               {story.title}
  //             </h3>
  //           </div>
  //         </div>
  //         <div className={`portrait:h-[50vh] landscape:h-[80vh]`}></div>

  //         <div
  //           className={`w-full bg-${colorTheme}-50 lg:landscape:bg-transparent`}
  //         >
  //           <div className="grid grid-cols-12 responsive-container h-auto relative">
  //             <div
  //               className={`lg:landscape:col-start-5 lg:landscape:col-span-7 col-start-0 col-span-11 row-start-1 pr-xl `}
  //             >
  //               <div
  //                 id={`storySummary-${story.anchor}`}
  //                 className={` lg:landscape:opacity-0 motion-reduce:opacity-100 bg-${colorTheme}-50  -mx-sm px-sm `}
  //               >
  //                 <div
  //                   className={`font-serif font-bold ${textColor} border-t-[2px] ${borderColor} type-preset-6`}
  //                 >
  //                   <ReportContent
  //                     docData={story.intro.json}
  //                     docLinks={story.intro.links}
  //                     variant={"report"}
  //                     reportYear={"2021"}
  //                     isMobileLandscape={false}
  //                   />
  //                 </div>
  //               </div>

  //               <div
  //                 id={`storyCallOut-${story.anchor}`}
  //                 className={`bg-${colorTheme}-50 lg:landscape:opacity-0 motion-reduce:opacity-100  -mx-sm px-sm`}
  //               >
  //                 <Callout
  //                   body={story.featuredCallOut.body}
  //                   attribution={story.featuredCallOut.attribution}
  //                   colorTheme={colorTheme}
  //                   variant={story.featuredCallOut.variant}
  //                   attributionRole={story.featuredCallOut.attributionRole}
  //                   isMobileLandscape={false}
  //                 ></Callout>
  //               </div>
  //               <div
  //                 id={`storyContent-${story.anchor}`}
  //                 className={` font-serif type-preset-6 tracking-[0.015em] font-light ${textColor} bg-${colorTheme}-50 
  //             block pb-[200px] -mx-sm px-sm
  //           `}
  //               >
  //                 <ReportContent
  //                   docData={story.body.json}
  //                   docLinks={story.body.links}
  //                   variant={"report"}
  //                   reportYear={"2021"}
  //                   isMobileLandscape={false}
  //                 />
  //                   {story.linkedPostUrl && <LinkedPost url={story.linkedPostUrl}/>}
  //               </div>
              
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
// };

// const ImageBackgroundContainerDesktop = ({ story, colorTheme }) => {
//   return (
//     <div
//       id={`imageBackground-${story.anchor}`}
//       className={`imageBackground sticky w-screen bg-${colorTheme}-50 top-[70px] z-10 overflow-hidden `} // h-[calc(100vh_-_70px)]
//     >
//       <div className={`h-[100px] block landscape:hidden`}> </div>
//       <div
//         className={`relative h-[calc(100vw_*_9_/_16)] landscape:h-[calc(100vh_-_70px)] md:max-h-screen w-screen mx-auto max-w-[2000px] `}
//       >
//         <Image
//           id={`storyImg-${story.anchor}`}
//           alt={""}
//           quality={"85"}
//           src={story.illustration.url}
//           layout="fill"
//           objectFit="cover"
//           className="storyImg absolute top-0 left-0 w-screen opacity-100 object-left-top"
//           sizes={`(max-width: 2000px) 100vw,
//               2000px`}
//         ></Image>
//         <Image
//           id={`contextImg-${story.anchor}`}
//           alt={`${story.contextIllustration.description}`}
//           src={story.contextIllustration.url}
//           layout="fill"
//           quality={"85"}
//           objectFit="cover"
//           className={`w-screen absolute top-0 left-0 opacity-100 object-left-top block`}
//           sizes={`(max-width: 2000px) 100vw,
//               2000px`}
//         ></Image>
//       </div>
//     </div>
//   );
// };

export default StorySection;
