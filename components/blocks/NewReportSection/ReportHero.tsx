import { PageHeaderInterface } from "../PageHeaders/PageHeader";
import { useEffect, useRef, useState } from "react";


const ReportHero = ({ id, title }: PageHeaderInterface) => {
  const [isActive, setIsActive] = useState(false);
  const [animationHeight, setAnimationHeight] = useState(0);

  const getTop = (el, extraOffset) => el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset) =>
    getTop(el, extraOffset) + el.offsetHeight - extraOffset;

  useEffect(() => {

    // TODO figure this out more
  const getAnimationBoxHeight = () =>{
    const animBox = document.getElementById("animation-box");
    const animBox2 = document.getElementById("box");
    let windowWidth = Math.round(animBox.getBoundingClientRect().width);

    if(window.innerWidth<768){
      animBox.style.height = Math.round(windowWidth*2/3) + "px";
      animBox.style.width = Math.round(windowWidth*2/3) + "px";
      animBox2.style.height =Math.round(windowWidth*2/3) + "px";
      animBox2.style.width = Math.round(windowWidth*2/3) + "px";
      setAnimationHeight(Math.round(windowWidth*2/3))
    }
    else if(windowWidth> window.innerHeight){
      animBox.style.height = window.innerHeight + "px";
      animBox.style.width = window.innerHeight + "px";
      animBox2.style.height = window.innerHeight + "px";
      animBox2.style.width = window.innerHeight + "px";
      setAnimationHeight(window.innerHeight)
    }else{
      animBox.style.height = windowWidth + "px";
      animBox2.style.height =  windowWidth + "px";
      animBox2.style.width =  windowWidth + "px";
      setAnimationHeight(windowWidth)
    }
  }



    const onScroll = () => {
      const offset = window.pageYOffset;
      const secElement = document.getElementById("reportHeader");
      const topTrigger = getTop(secElement, 30);
      const bottomTrigger = getBottom(secElement, 30);

      const _isActive = offset > topTrigger && offset < bottomTrigger;
      if (_isActive !== isActive) setIsActive(_isActive);

      if (!_isActive) return;

       const offsetPct = Math.round(
          (100 * (offset - topTrigger)) / (bottomTrigger - topTrigger)
        );
        if (offsetPct < 0 || offsetPct >= 100) return;
        const animBox =document.getElementById("box2");
        animBox.style.width = Math.round(animationHeight*Math.min(offsetPct,50)/50)+"px" 
        animBox.style.height = Math.round(animationHeight*Math.min(offsetPct,50)/50)+"px" 
   
        const l2 = document.getElementById("titleLine2");
        if (offsetPct > 20 && l2.classList.contains("opacity-0")) {
          l2.classList.add("animate-titleSlide");
          l2.classList.replace("opacity-0", "opacity-100");
        }
        if (offsetPct < 20 && l2.classList.contains("opacity-100")) {
          l2.classList.remove("animate-titleSlide");
          l2.classList.replace("opacity-100", "opacity-0");
        }
    };




    
    if(document.getElementById("animation-box").getBoundingClientRect().height==0){
      getAnimationBoxHeight();
    }
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  

  return (
    <header
      className={`bg-purple-900 w-full lg:h-[200vh] h-[150vh] `}
      id="reportHeader"
    >
      <div className={`hehe w-full lg:h-[calc(100vh_-_70px)] sticky top-[70px]`}>
       
        <div className="responsive-container w-full h-full relative">
        <div id = "animation-box" className="md:block responsive-container w-full md:w-3/4 lg:ml-auto absolute top-0  -z-10">
            {SVGBox("box", "purple-900", "purple-200", "500px", 20)}
            {SVGBox("box2", "purple-200", "purple-800", "500px", 30)}
         
          </div>
          <div  className="pt-2xl z-40 flex flex-col lg:flex-row gap-xl ">
            <div className="w-full lg:w-3/4 ">
            <h1 className="animate-titleSlide -ml-sm md:-ml-md  pt-md lineOne xl:text-[200px] lg:text-[170px] md:text-[140px] text-[80px] font-black text-white  leading-[0.8]">
              Public <br /> Benefit <br /> Report
            </h1>
            </div>
            <div className=" w-full  lg:w-1/4 h-full flex flex-col justify-between pt-3xl gap-xl">
              <div>
                <p className="animate-titleSlide type-preset-4 font-serif text-white font-bold tracking-wide">
                  Equity that lasts:
                </p>
                <p className="animate-titleSlide type-preset-4 font-serif text-white font-light tracking-wide">
                  building sustainable government services
                </p>
                <p
                  id="titleLine2"
                  className="type-preset-4 font-serif text-purple-100 opacity-0 pt-xl tracking-wide"
                >
                  Each year, Nava outlines its work and progress in a public
                  benefit report.
                </p>
              </div>
              <ArrowDown/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


const ArrowDown = () => {
  return (<div className="pb-xl pt-auto">
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
</div>)
}
const SVGBox = (className, bg, stroke, h, z) => {
  return (
    <svg
    id={className}
      className={`${className}  bg-${bg} stroke-${stroke} stroke-[5px] absolute  top-0 left-0 h-[${h}] w-[${h}] -z-${z}`}
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
