import { LinkText } from "components/atom";
import { animationHandler, AnimationObject, getOffsetPct } from "./utils";
import { makeFadeInAnimation, makeSlideUpAnimation } from "./animations";
import { useEffect, useState } from "react";


const ReportConclusion = ({windowSize}) => {
  const [isActive, setIsActive] = useState(false);
  const [animationList, setAnimationList] = useState([]);
  

  function getAnimationBoxHeight(){

  }

  const initiateAnimations= () =>{
    let ana  = []
  
    //  makeSlideUpAnimation("reportHeader-titleBox", 0).play()
    //  makeSlideUpAnimation("titleLine1", 200).play()
    //  makeSlideUpAnimation("titleLine2", 400).play()
    //  makeFadeInAnimation("heroArrow", 600).play();
    //   let Line3SlideUp: AnimationObject = {
    //     triggerPct: 30,
    //     animation: makeSlideUpAnimation("titleLine3", 0),
    //   };
    //   ana.push(Line3SlideUp);
    //   setAnimationList(ana);
    }

    useEffect(() => {
      const onScroll = () => {
        
        const offsetPct = getOffsetPct("reportConclusion");
        const _isActive = offsetPct >= 0 && offsetPct < 100 ;
        if (_isActive !== isActive) setIsActive(_isActive);
        if (!_isActive) return;
       
        if (offsetPct < 0 || offsetPct >= 100) return;
        // animationHandler({offsetPct, animationList, windowSize});
        // const animBox = document.getElementById("animation-box");
        // const s = animBox.getBoundingClientRect().height;
        // const svg = document.getElementById("box2");
        // const pctS = Math.round((s* Math.min(offsetPct, 50)) / 50);
        // svg.setAttribute('height', `${pctS}`);
        // svg.setAttribute('width', `${pctS}`);
    
      };
  
      if(animationList.length==0 ){
          initiateAnimations();
      }
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
  });


  return (
    <section id="reportConclusion" className="w-full h-[150vh] bg-gold-700">
      <div className="responsive-container py-2xl lg:h-[calc(100vh_-_70px)] sticky top-[70px] overflow-hidden">
        <div className="font-serif font-light md:text-7xl type-preset-1 pt-3xl">
          Conclusion
        </div>
        <p className="type-preset-5 font-sans text-black pt-[70px] max-w-screen-md">
        Public services reach a massive number of people, often at critical and stressful moments in their lives. When Nava is tasked with building or improving these services, we start small. That means building and releasing prototypes to a limited  number of people, helping prevent catastrophic rollouts and allowing us to test and iterate based on user feedback.
        </p>
        <div className="flex pt-[70px]">
          <div className="w-1/3">
            <p className="type-preset-5 font-bold">Where next?</p>
          </div>
          <div className="w-2/3 flex flex-col gap-sm pt-xs font-serif divide-y divide-black">
            <LinkText
              href="/public-benefit-reports/2020"
              variant={"default"}
              color="black"
            >
              Download PDF
            </LinkText>
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
        </div>
      </div>
    </section>
  );
};


const SVGConclusion = () => {
  return (
  <svg width="919" height="919" viewBox="0 0 919 919" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1818.76 960.914L-41.9146 -899.762" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1787.9 991.774L-72.7739 -868.902" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1757.19 1022.63L-103.634 -838.188" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1726.33 1053.49L-134.493 -807.328" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1695.45 1084.23L-165.231 -776.445" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1664.59 1115.09L-196.09 -745.586" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1633.87 1145.95L-226.95 -714.871" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1603.01 1176.81L-257.81 -684.012" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1572.15 1207.53L-288.528 -653.148" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1541.29 1238.39L-319.387 -622.289" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1510.57 1269.25L-350.247 -591.574" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1479.7 1300.13L-381.126 -560.695" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1448.84 1330.99L-411.986 -529.836" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1417.97 1361.7L-442.704 -498.973" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1387.11 1392.56L-473.563 -468.113" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1356.4 1423.42L-504.423 -437.398" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1325.54 1454.28L-535.282 -406.539" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1294.68 1485L-565.997 -375.68" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1263.8 1515.88L-596.879 -344.797" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1233.08 1546.74L-627.74 -314.082" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1202.22 1577.6L-658.599 -283.223" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1171.36 1608.31L-689.313 -252.363" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1140.5 1639.17L-720.172 -221.504" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1109.79 1670.04L-751.036 -190.785" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1078.93 1700.9L-781.896 -159.926" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1048.05 1731.63L-812.629 -129.047" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M1017.19 1762.49L-843.489 -98.1875" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M986.469 1793.35L-874.353 -67.4688" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M955.609 1824.21L-905.212 -36.6094" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M924.75 1855.07L-936.072 -5.75" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M893.891 1885.79L-966.786 25.1094" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M863.012 1916.66L-997.665 55.9883" stroke="#FAD01A" stroke-width="5.23879"/>
  <path d="M832.293 1947.53L-1028.53 86.707" stroke="#FAD01A" stroke-width="5.23879"/>
 
  </svg>
  )
}

export default ReportConclusion;

