import { LinkText } from "components/atom";
import { animationHandler, AnimationObject, getOffsetPct } from "./_utils";
import { makeFadeInAnimation, makeSlideUpAnimation } from "./_animations";
import { useEffect, useState } from "react";
import ReportContent from "../ReportContent/ReportContent";


const ReportConclusion2021 = ({title, richBody, anchor}) => {
  const [animationList, setAnimationList] = useState([]);
  

  const initiateAnimations= () =>{
    let ana  = [
      {
        triggerPct: -30,
        animation: makeSlideUpAnimation("conclusion-text", 0),
        noRepeat:true,
      },
      {
        triggerPct: -15,
        animation: makeSlideUpAnimation("conclusion-next", 0),
        noRepeat:true,
      },
      {
        triggerPct: -15,
        animation: makeSlideUpAnimation("conclusion-footer1", 0),
        noRepeat:true,
      },
      {
        triggerPct: -5,
        animation: makeSlideUpAnimation("conclusion-footer2", 0),
        noRepeat:true,
      },
      {
        triggerPct: 0,
        animation: makeSlideUpAnimation("conclusion-footer3", 0),
        noRepeat:true,
      }
    ]
  
 
      setAnimationList(ana);
    }

    useEffect(() => {
      const onScroll = () => {
        
        const offsetPct = getOffsetPct(anchor);
        const _isActive = offsetPct >= -40 && offsetPct < 100 ;
        if (!_isActive) return;
        const inFocus = document.getElementById(anchor).contains(document.activeElement);
        animationHandler({offsetPct, animationList, inFocus});
  
    
      };
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  
      if(animationList.length==0 && mediaQuery && !mediaQuery.matches){
          initiateAnimations();
      }
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
  });


  return (
    <section id={anchor} className="w-full min-h-[125vh] bg-gold-700" tabIndex={0}>
      <div className="responsive-container py-2xl md:min-h-[calc(100vh_-_70px)] sticky top-[70px] overflow-hidden">
        <div className="relative h-full">

        <div
              id="conclusion-box"
              className="absolute top-0 left-0 -z-10 h-full w-full "
            >
                {/* <SVGConclusion/>  */}
            </div>
        <h2 className="font-serif font-light md:text-7xl type-preset-1 pt-3xl">
          {title}
        </h2>
        <div id={"conclusion-text"} className="type-preset-6 font-serif text-black pt-[70px] max-w-screen-md opacity-0 motion-reduce:opacity-100">
        <ReportContent
                      docData={richBody.json}
                      docLinks={richBody.links}
                      variant={"report"}
                      reportYear={"2021"}
                    />
        </div>
        <p id={"conclusion-next"}  className="type-preset-5 font-bold pt-[70px] pb-sm opacity-0 motion-reduce:opacity-100">Where next?</p>
        <div className="flex gap-lg flex-col md:flex-row pb-2xl">
          <div id={"conclusion-footer1"}className="w-full md:w-1/3 flex flex-col gap-sm pt-xs font-serif divide-y-2 divide-black border-t-2 border-black opacity-0 motion-reduce:opacity-100">
          <LinkText
              href="/public-benefit-reports/2020"
              variant={"default"}
              color="black"
            >
              Download PDF
            </LinkText>
            <LinkText
              href="#reportHeader"
              variant={"default"}
              color="black"
            >
             Back to top
            </LinkText>
          </div>
          <div id={"conclusion-footer2"} className="w-full md:w-1/3 flex flex-col gap-sm pt-xs font-serif divide-y-2 divide-black border-t-2 border-black opacity-0 motion-reduce:opacity-100">
           
            <LinkText href="/careers" variant={"default"} color="black">
              Careers
            </LinkText>
            <LinkText href="/case-studies" variant={"default"} color="black">
              Case Studies
            </LinkText>
            <LinkText
              href="/public-benefit-reports/2020"
              variant={"default"}
              color="black"
            >
              2020 Public Benefit Report
            </LinkText>
          </div>
          <div id={"conclusion-footer3"} className="w-full md:w-1/3 flex flex-col gap-sm pt-xs font-serif divide-y-2  divide-black border-t-2 border-black opacity-0 motion-reduce:opacity-100">
           
           <LinkText href="/contact" variant={"default"} color="black">
            Get in touch
           </LinkText>
         </div>
        </div>
      </div>
      </div>
    </section>
  );
};




export default ReportConclusion2021;


// const SVGConclusion = () => {
//   return (
//   <svg  
//    id={'conclusionSVG'}
//    className={"absolute bottom-0 left-0 "}
//     width="10" height="10" viewBox="0 0 919 919" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M1818.76 960.914L-41.9146 -899.762" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1787.9 991.774L-72.7739 -868.902" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1757.19 1022.63L-103.634 -838.188" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1726.33 1053.49L-134.493 -807.328" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1695.45 1084.23L-165.231 -776.445" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1664.59 1115.09L-196.09 -745.586" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1633.87 1145.95L-226.95 -714.871" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1603.01 1176.81L-257.81 -684.012" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1572.15 1207.53L-288.528 -653.148" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1541.29 1238.39L-319.387 -622.289" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1510.57 1269.25L-350.247 -591.574" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1479.7 1300.13L-381.126 -560.695" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1448.84 1330.99L-411.986 -529.836" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1417.97 1361.7L-442.704 -498.973" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1387.11 1392.56L-473.563 -468.113" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1356.4 1423.42L-504.423 -437.398" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1325.54 1454.28L-535.282 -406.539" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1294.68 1485L-565.997 -375.68" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1263.8 1515.88L-596.879 -344.797" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1233.08 1546.74L-627.74 -314.082" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1202.22 1577.6L-658.599 -283.223" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1171.36 1608.31L-689.313 -252.363" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1140.5 1639.17L-720.172 -221.504" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1109.79 1670.04L-751.036 -190.785" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1078.93 1700.9L-781.896 -159.926" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1048.05 1731.63L-812.629 -129.047" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M1017.19 1762.49L-843.489 -98.1875" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M986.469 1793.35L-874.353 -67.4688" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M955.609 1824.21L-905.212 -36.6094" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M924.75 1855.07L-936.072 -5.75" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M893.891 1885.79L-966.786 25.1094" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M863.012 1916.66L-997.665 55.9883" stroke="#FAD01A" strokeWidth="5.23879"/>
//   <path d="M832.293 1947.53L-1028.53 86.707" stroke="#FAD01A" strokeWidth="5.23879"/>
 
//   </svg>
//   )
// }

      // const animBox = document.getElementById("conclusion-box");
        // const s = animBox.getBoundingClientRect().height;
        // const pctS = Math.round((s* Math.min(offsetPct, 20)) / 20);

        // const svg = document.getElementById("conclusionSVG");
        // if(pctS > 0){
        //   svg.setAttribute('height', `${pctS}`);
        //   svg.setAttribute('width', `${pctS}`);

        // }
       