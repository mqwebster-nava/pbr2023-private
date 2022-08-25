import { PageHeaderInterface } from "./PageHeader";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ReportHero = ({ id, title }: PageHeaderInterface) => {
  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1 }); // <- This is where the repeat is set
    const partDuration = 2.5;
    tl.set(".box3", { css: { height: 700, width: 700, zIndex: 10 } }, 0);
    tl.fromTo(
      ".box",
      { height: 250, width: 250 },
      { height: 400, width: 400, duration: partDuration },
      0
    );
    tl.fromTo(
      ".box2",
      { height: 400, width: 400 },
      { duration: partDuration, height: 700, width: 700 },
      0
    );
    tl.set(".box", { css: { zIndex: 20 } }, partDuration);
    tl.set(".box2", { css: { zIndex: 10 } }, partDuration);
    tl.set(".box3", { css: { zIndex: 30 } }, partDuration);
    tl.to(
      ".box",
      { duration: partDuration, height: 700, width: 700 },
      partDuration
    );
    tl.fromTo(
      ".box3",
      { height: 250, width: 250 },
      { duration: partDuration, height: 400, width: 400 },
      partDuration
    );
    tl.set(".box", { css: { zIndex: 10 } }, 2 * partDuration);
    tl.set(
      ".box2",
      { css: { zIndex: 30, height: 250, width: 250 } },
      2 * partDuration
    );
    tl.set(".box3", { css: { zIndex: 20 } }, 2 * partDuration);
    tl.to(
      ".box2",
      { duration: partDuration, height: 400, width: 400 },
      2 * partDuration
    );
    tl.to(
      ".box3",
      { duration: partDuration, height: 700, width: 700 },
      2 * partDuration
    );
    tl.set(".box", { css: { zIndex: 30, height: 250, width: 250 } });
    tl.set(".box2", { css: { zIndex: 20 } });
    tl.set(".box3", { css: { zIndex: 10 } });
  });
  return (
    <header className={`bg-purple-900 w-full h-screen  `}>
      <div className="responsive-container w-full h-full relative">
   
          <div className="absolute top-[30px] z-40 lg:pl-[108px]">
            <h1 className="type-preset-3  font-black text-white">
              Public Benefit Report 2021
            </h1>
            <h1 className="lineOne text-[120px]  font-black text-white opacity-100">
              Building
            </h1>
            <h1 className="lineTwo text-[120px] font-black text-white opacity-100">
              Equitable
            </h1>
            <h1 className="lineThree text-[120px]  font-black text-white opacity-100">
              Systems
            </h1>
          </div>
          <div className="w-2/3 ml-auto absolute bottom-0 right-0">
            {SVGBox("box", "purple-900", "purple-200", "250px", 30)}
            {SVGBox("box2", "purple-700", "purple-800", "400px", 20)}
            {SVGBox("box3", "purple-500", "purple-900", "700px", 10)}
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
