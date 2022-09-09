import { useEffect, useState } from "react";
import MarkdownComponent from "utils/MarkdownComponent";
import { animationHandler, AnimationObject, getOffsetPct } from "./utils";



const makeSlideUpAnimation = (elementId) => {
  let an = document.getElementById(elementId).animate(
    [
      { transform: 'translateY(20%)', opacity: '0%',  },
      { transform: 'translateY(0%)', opacity: '100%',   },
    ],
    {
      duration: 300,
      iterations: 1,
      fill: 'forwards',
    }
  );
  an.pause();
  return an;
};

const makeSlideUpAnimationWithDelay = (elementId, delay) => {
  let an = document.getElementById(elementId).animate(
    [
      { transform: 'translateY(20%)', opacity: '0%',  },
      { transform: 'translateY(0%)', opacity: '100%',   },
    ],
    {
      duration: 300,
      iterations: 1,
      fill: 'forwards',
      delay:delay
    }
  );
  an.pause();
  return an;
};

const makeFadeOutAnimation = (elementId ) => {
  let an = document.getElementById(elementId).animate(
    [
      {  opacity: '100%',  },
       { opacity: '0%',  height:0 },
    ],
    {
      duration: 200,
      iterations: 1,
      fill: 'forwards',
    }
  );
  an.pause();
  return an;
};



const SectionIntro = ({ section, i, windowSize, activeSection}) => {
    const [animationList, setAnimationList] = useState([]);
    const isActive = activeSection==activeSection;

    const initiateAnimations= () =>{
      let ana  = []
     
      
      let ThemeSlideUp: AnimationObject = {
        triggerPct: windowSize==="desktop" ? -20 :-50,
        animation: makeSlideUpAnimation("themeNum-" + section.anchor),
      };
      let TitleSlideUp: AnimationObject = {
        triggerPct: windowSize==="desktop" ? -10 : -40,
        animation: makeSlideUpAnimation("h2-" + section.anchor),
      };
      let SectionBodySlideUp: AnimationObject = {
        triggerPct: windowSize==="desktop" ? 0 : -30,
        animation: makeSlideUpAnimation("sectionBody-" + section.anchor),
      };
      
      let SectionStoriesSlideUp: AnimationObject = {
        triggerPct: windowSize==="desktop" ? 0 : -30,
        animation: makeSlideUpAnimation(`sectionStories-${section.anchor}`),
      };

      ana.push(TitleSlideUp);
      ana.push(ThemeSlideUp);
      ana.push(SectionBodySlideUp);
      
      ana.push(SectionStoriesSlideUp);
  
      // if(windowSize==="desktop"){

      //   let SectionBodyFadeOut: AnimationObject = {
      //     triggerPct: 30,
      //     animation: makeFadeOutAnimation("sectionBody-" + section.anchor),
      //   };
      //   ana.push(SectionBodyFadeOut);
      // }
      setAnimationList(ana);
    }

    useEffect(() => {
      // Gets the default bottom padding neeeded to stop the info right before the
      
      const onScroll = () => {
        
        const offsetPct = getOffsetPct(section.anchor);
        
        if (offsetPct < -50 || offsetPct >= 100) return;
        animationHandler({offsetPct, animationList});
      };
      console.log(section.anchor, windowSize)
        if(animationList.length==0 && windowSize){
          initiateAnimations();
        }
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
      
      return () => window.removeEventListener("scroll", onScroll);
    });
  
    const colorTheme = section.colorTheme ?? "purple";
    let textColor = section.colorTheme==="gold" ? "black" : "white";
    return (
      <section id={`${section.anchor}`} className="h-auto lg:h-[150vh]">
        <div className={`hidden lg:h-[100px] bg-${colorTheme}-900`}></div>
      <div className={`bg-${colorTheme}-900 w-full lg:min-h-screen block lg:sticky lg:top-[70px]`}>
      <div
        className="responsive-container  "
        id={section.anchor}
      >
        <div className="lg:pt-4xl pt-3xl ">
        <p
            className={`text-${textColor} type-preset-1 pb-xl max-w-screen-md mr-auto font-serif opacity-0 motion-reduce:opacity-100`}
            id={`themeNum-${section.anchor}`}
          >
            Theme {i}
          </p>
          <h2
            className={`font-black text-${textColor} md:text-7xl type-preset-1 pb-3xl max-w-screen-md mr-auto opacity-0 motion-reduce:opacity-100`}
            id={`h2-${section.anchor}`}
          >
            {section.title}
          </h2>
          <p 
          id={`sectionBody-${section.anchor}`}
          className={`type-preset-5 font-serif font-light text-${textColor} max-w-screen-md opacity-0 motion-reduce:opacity-100 pb-lg`}>
            <MarkdownComponent content={section.body} />
          </p>
          <div
          id={`sectionStories-${section.anchor}`}
          className={`type-preset-5 font-serif font-light pb-[160px] max-w-screen-md opacity-0 motion-reduce:opacity-100`}>
          <h3 className={`font-bold pb-sm text-${textColor} `}>Scroll to see stories</h3>
          <hr className={`bg-${textColor} `}/>
          <div className={`flex flex-col md:flex-row gap-xl  text-${textColor} font-serif pt-md`}>
            <div className="w-full md:w-1/3  type-preset-6 ">
            <a>Helping Veterans get their disability claims decisions faster</a>
            </div>
            <div className="w-ull md:w-1/3  type-preset-6 ">
            <a>Building Massachusetts’ Paid Family and Medical Leave program</a>
            </div>
            <div className="w-full md:w-1/3  type-preset-6 ">
            <a>Tracking unemployment claims for Californians in a crisis</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    );
  };

  
  export default SectionIntro;