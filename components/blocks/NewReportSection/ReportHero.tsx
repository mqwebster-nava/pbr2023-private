import { PageHeaderInterface } from "../PageHeaders/PageHeader";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ReportHero = ({ id, title }: PageHeaderInterface) => {


  const [isActive, setIsActive] = useState(false);
  var tl = gsap.timeline();

  const getTop = (el, extraOffset) => el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset) =>
    getTop(el, extraOffset) + el.offsetHeight - extraOffset;
    
  useEffect(() => {
    const startAnimation = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const largeS = w / 2,
        midS = w / 3,
        smallS = w / 4;

       // <- This is where the repeat is set
      const partDuration = 2.5;
      // Have the small square grow from 0
      // Have the animation go right up to the top of the page
      tl.set(
        ".box3",
        { css: { height: largeS, width: largeS, zIndex: 10 } },
        0
      );
      tl.fromTo(
        ".box",
        { height: smallS, width: smallS },
        { height: midS, width: midS, duration: partDuration },
        0
      );
      tl.fromTo(
        ".box2",
        { height: midS, width: midS },
        { duration: partDuration, height: largeS, width: largeS },
        0
      );
      tl.to(
        ".box",
        { duration: partDuration, height: largeS, width: largeS },
        partDuration
      );
     
    };

    const onScroll = () => {
      const offset = window.pageYOffset;
      const secElement = document.getElementById("reportHeader");
      const topTrigger =  getTop(secElement, 30);
      const bottomTrigger =  getBottom(secElement, 30)
      
      const _isActive = offset > topTrigger && offset < bottomTrigger;
      if (_isActive !== isActive) setIsActive(_isActive);

      if (_isActive) {
        const offsetPct = Math.round(
          (100 * (offset - topTrigger)) / (bottomTrigger - topTrigger)
        );
        if (offsetPct < 0 || offsetPct >= 100) return;
        console.log(offsetPct);
        if(offsetPct>10 && !tl.isActive()){
          startAnimation();
        }
        const l2 = document.getElementById("titleLine2");
        if(offsetPct>20 && l2.classList.contains("opacity-0")){
          l2.classList.add("animate-titleSlide")
          l2.classList.replace("opacity-0", "opacity-100");
        }
        if(offsetPct<20 && l2.classList.contains("opacity-100")){
          l2.classList.remove("animate-titleSlide")
          l2.classList.replace("opacity-100", "opacity-0");
        }
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    
  }, []);

  return (
    <header className={`bg-purple-900 w-full lg:h-[200vh] h-[150vh] `} id="reportHeader">
      <div className={`bg-purple-900 w-full h-[calc(100vh_-_70px)] sticky top-[70px]`} >
      <div className="responsive-container w-full h-full relative">
    
        <div className="lg:absolute pt-2xl z-40 flex flex-col lg:flex-row gap-xl bottom-0">
          <h1 className="animate-titleSlide  -ml-md lineOne lg:text-[200px] md:text-[120px] text-[80px] font-black text-white  leading-[0.8]">
            Public <br /> Benefit <br /> Report
          </h1>
       
        <div className=" w-[292px] h-full flex flex-col justify-between pt-3xl gap-xl">
         <div>
          <p className="animate-titleSlide type-preset-5 font-serif text-white font-bold">
            Equity that lasts:
          </p>
          <p className="animate-titleSlide type-preset-5 font-serif text-white font-light">
            building sustainable government services
          </p>
          </div> 
          <div>
          <p  id="titleLine2" className="type-preset-5 font-serif text-purple-100 opacity-0">
          Each year, Nava outlines its work and progress in a public benefit report. 
          </p>
          </div>
          <div className="pb-xl pt-auto">
            <p className="type-preset-5 text-white font-light font-serif">Scroll down</p>
              <svg
                width="56"
                height="103"
                viewBox="0 0 56 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.998 1V101.613"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.9964 74.5254L27.9982 101.614L1 74.5254"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
        </div>
        </div>
        <div className="hidden lg:block responsive-container w-2/3 lg:ml-auto lg:absolute top-0 ">
          {SVGBox("box", "purple-900", "purple-200", "500px", 30)}
          {SVGBox("box2", "purple-largeS", "purple-800", "500px", 20)}
          {SVGBox("box3", "purple-500", "purple-900", "900px", 10)}
        </div>
      </div>
      </div>
    </header>
  );
};
const SVGBox = (className, bg, stroke, h, z) => {
  return (
    <svg
      className={`${className}  bg-${bg} stroke-${stroke} stroke-[5px] absolute  bottom-0 left-0 h-[${h}] w-[${h}] z-${z}`}
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M615.393 362.142L-42.1415 -295.393" />
        <path d="M581.748 395.837L-75.8373 -261.748" stroke-width="5.54729" />
        <path d="M548.049 429.485L-109.485 -228.049" stroke-width="5.54729" />
        <path d="M514.404 463.181L-143.181 -194.404" stroke-width="5.54729" />
        <path d="M480.705 496.88L-176.88 -160.705" stroke-width="5.54729" />
        <path d="M447.01 530.524L-210.524 -127.01" stroke-width="5.54729" />
        <path d="M413.361 564.224L-244.224 -93.3613" stroke-width="5.54729" />
        <path d="M379.666 597.868L-277.868 -59.666" stroke-width="5.54729" />
        <path d="M346.021 631.564L-311.564 -26.0215" stroke-width="5.54729" />
        <path d="M312.322 665.212L-345.212 7.67773" stroke-width="5.54729" />
      </g>
    </svg>
  );
};

export default ReportHero;
