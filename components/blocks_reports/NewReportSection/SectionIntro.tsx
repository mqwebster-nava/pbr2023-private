import { LinkText } from "components/atom";
import { useEffect, useState } from "react";
import MarkdownComponent from "utils/MarkdownComponent";
import { makeSlideUpAnimation } from "./animations";
import { animationHandler, AnimationObject, getOffsetPct, WindowSize } from "./utils";

const SectionIntro = ({ section, i}) => {
    const [animationList, setAnimationList] = useState([]);
    const initiateAnimations= () =>{
      let ana  = []
      const windowSizes:Array<WindowSize> = ["mobile", "tablet", "desktop"]
      let ThemeSlideUp: AnimationObject = {
        triggerPct: -40,
        noRepeat:true,
        windowSizes:windowSizes,
        triggerPcts:{"mobile":-90},
        animation: makeSlideUpAnimation("themeNum-" + section.anchor, 0),
      };
      let TitleSlideUp: AnimationObject = {
        triggerPct:  -30,
        noRepeat:true,
        windowSizes:windowSizes,
        triggerPcts:{"mobile":-80},
        animation: makeSlideUpAnimation("h2-" + section.anchor, 0),
      };
      let SectionBodySlideUp: AnimationObject = {
        triggerPct: -10,
        noRepeat:true,
        windowSizes:windowSizes,
        triggerPcts:{"mobile":-70},
        animation: makeSlideUpAnimation("sectionBody-" + section.anchor, 0),
      };
      
      let SectionStoriesSlideUp: AnimationObject = {
        triggerPct:  -10,
        noRepeat:true,
        windowSizes:windowSizes,
        triggerPcts:{"mobile":-70},
        animation: makeSlideUpAnimation(`sectionStories-${section.anchor}`, 0),
      };

      ana.push(TitleSlideUp);
      ana.push(ThemeSlideUp);
      ana.push(SectionBodySlideUp);
      ana.push(SectionStoriesSlideUp);
  

      setAnimationList(ana);
    }

    useEffect(() => {
      // Gets the default bottom padding neeeded to stop the info right before the
      
      const onScroll = () => {
        const offsetPct = getOffsetPct(section.anchor);
        if (offsetPct < -75 || offsetPct >= 50) return;
        animationHandler({offsetPct, animationList});
      };
        if(animationList.length==0){
          initiateAnimations();
        }
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
      
      return () => window.removeEventListener("scroll", onScroll);
    });
  
    const colorTheme = section.colorTheme ?? "purple";
    const bg = section.colorTheme === "gold" ? `bg-${colorTheme}-dark` : `bg-${colorTheme}-900`;
    const textColor = "white" //section.colorTheme === "gold" ? "black" : "white";

    return (
      <section id={`${section.anchor}`} className="h-auto md:h-[180vh]">
        <div className={`hidden lg:h-[100px] bg-${colorTheme}-900`}></div>
      <div className={`${bg} w-full md:min-h-screen block md:sticky md:top-[70px]`}>
      <div
        className="responsive-container"
      >
        <div className="lg:pt-4xl pt-3xl ">
        <p
            className={`text-${textColor} type-preset-5 pb-sm max-w-screen-md mr-auto font-serif font-light  opacity-0 motion-reduce:opacity-100 focus:opacity-100`}
            id={`themeNum-${section.anchor}`}
          >
            Theme {i}
          </p>
          <h2
            className={`font-black text-${textColor} md:text-7xl type-preset-1 pb-3xl max-w-screen-md mr-auto opacity-0 motion-reduce:opacity-100 focus:opacity-100`}
            id={`h2-${section.anchor}`}
          >
            {section.title}
          </h2>
          <div
          id={`sectionBody-${section.anchor}`}
          className={`type-preset-5 font-serif font-light text-${textColor} max-w-screen-md opacity-0 motion-reduce:opacity-100 pb-lg focus:opacity-100`}>
            <MarkdownComponent content={section.body} />
          </div>
          <div
          id={`sectionStories-${section.anchor}`}
          className={`type-preset-6 font-serif font-light pb-[160px] max-w-screen-md opacity-0 motion-reduce:opacity-100 focus:opacity-100`}>
          <h3 className={`font-bold pb-md text-${textColor} `}>See how</h3>
          <hr className={`border-${textColor} `}/>
          <div className={`flex flex-col md:flex-row gap-xl  text-${textColor} font-serif pt-md`}>
            {section.items.map((story)=>{
              return ( <div className="w-full md:w-1/3  type-preset-6 pr-lg" key={`sectionIntro-${story.anchor}`}>
             <LinkText href={`#${section.anchor}--${story.anchor}`} variant={"default"} hoverStyle="underlined" color={ "white"} ariaLabel={`Skip to ${story.title}`}>
              {story.title}
             </LinkText>
              </div>)
            })}
    
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    );
  };

  
  export default SectionIntro;