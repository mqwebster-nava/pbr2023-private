import { PageHeaderInterface } from "./PageHeader";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ReportHero = ({ id, title }: PageHeaderInterface) => {
  

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const largeS = w/2, midS = w/3, smallS=w/4;
    

    var tl = gsap.timeline({ repeat: -1 }); // <- This is where the repeat is set
    const partDuration = 2.5;
    // Have the small square grow from 0
    // Have the animation go right up to the top of the page
    tl.set(".box3", { css: { height: largeS, width: largeS, zIndex: 10 } }, 0);
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
    tl.set(".box", { css: { zIndex: 20 } }, partDuration);
    tl.set(".box2", { css: { zIndex: 10 } }, partDuration);
    tl.set(".box3", { css: { zIndex: 30 } }, partDuration);
    tl.to(
      ".box",
      { duration: partDuration, height: largeS, width: largeS },
      partDuration
    );
    tl.fromTo(
      ".box3",
      { height: smallS, width: smallS },
      { duration: partDuration, height: midS, width: midS },
      partDuration
    );
    tl.set(".box", { css: { zIndex: 10 } }, 2 * partDuration);
    tl.set(
      ".box2",
      { css: { zIndex: 30, height: smallS, width: smallS } },
      2 * partDuration
    );
    tl.set(".box3", { css: { zIndex: 20 } }, 2 * partDuration);
    tl.to(
      ".box2",
      { duration: partDuration, height: midS, width: midS },
      2 * partDuration
    );
    tl.to(
      ".box3",
      { duration: partDuration, height: largeS, width: largeS },
      2 * partDuration
    );
    tl.set(".box", { css: { zIndex: 30, height: smallS, width: smallS } });
    tl.set(".box2", { css: { zIndex: 20 } });
    tl.set(".box3", { css: { zIndex: 10 } });
  },[]);


  return (
    <header className={`bg-purple-900 w-full h-screen  `} id="reportHeader">
      <div className="responsive-container w-full h-full relative">
   
          <div className="absolute top-[30px] left-0 z-40 lg:pl-[108px] ">
            <h1 className=" -ml-md lineOne lg:text-[200px] text-[120px] font-black text-white opacity-100 leading-[0.8]">
            Public <br/> Benefit <br/> Report
            </h1>
          </div>
          <div className="absolute top-[30px] right-[180px] z-40 w-[180px] pt-md">
             <p className="type-preset-5 font-serif text-white font-bold"> Equity that lasts:</p>
             <p className="type-preset-5 font-serif text-white font-light">building sustainable government services</p>
          </div>
          <div className="w-2/3 ml-auto absolute bottom-0 left-[108px]">
            {SVGBox("box", "purple-900", "purple-200", "500px", 30)}
            {SVGBox("box2", "purple-largeS", "purple-800", "500px", 20)}
            {SVGBox("box3", "purple-500", "purple-900", "500px", 10)}
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
