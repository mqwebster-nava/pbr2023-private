import classNames from "classnames";
import CountUp, { useCountUp } from "react-countup";
import React, { useState, useEffect } from "react";
import ColorTheme from "utils/ColorThemes";
import { FilterButtonGroup } from "./FilterButtonGroup";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

interface PercentBarChartYOYInterface {
  description: string;
  graphs: Array<AnimatedBarChartInterface>;
  colorTheme: ColorTheme
}

const filters = [
  {
      id: "2021",
      text: "2021",
      total:"10"
  },
  {
    id: "2022",
    text: "2022",
    total:"10"
  }
]

export const PercentBarChartYOY: React.FC<PercentBarChartYOYInterface> = ({
  description,
  graphs,
  colorTheme
}) => {
 
  const [selectedFilter, updateFilter] = useState({
    ...filters[0],
  });
  const [isDone, setIsDone] = useState(false);
  const handleFilterClick = (e) => {
    const selectedTotal = filters.find(
      (filter) => filter.id === e.target.value
    ).total;
    updateFilter({
      id: e.target.value,
      text: e.target.innerText,
      total: selectedTotal,
    });
  };


  useEffect(() => {
    const d = document.getElementById("yoy-chart");
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if(entry.isIntersecting && !isDone){
        setIsDone(true)
        wait(1000).then(()=>updateFilter(filters[1]))
      } 
    });
    observer.observe(d)
  }, []);

  return (
    <div id={"yoy-chart"}>
      <p className="font-bold py-md">{description}</p>
       <div className="pb-lg">
      <FilterButtonGroup
        filters={filters}
        handleClick={handleFilterClick}
        selectedFilter={selectedFilter}
        theme={colorTheme}
        regionID={"animated-chart"}
        showRespondents={false}
      />
      </div> 
      {graphs.map((graph, index) => (
        <AnimatedBarChart
          key={`percent_bar_graph_${index}`}
          {...graph}
          colorTheme={colorTheme}
          selectedFilter={selectedFilter}
          index={index}
        />
      ))}
    </div>
  );
};

export interface AnimatedBarChartInterface {
  startingPercent: number;
  endingPercent: number;
  description: string;
  colorTheme: ColorTheme;
  index: number;
  startDelay?: number;
  ariaLabel?:string;
  selectedFilter?:any;
}

export const AnimatedBarChart: React.FC<AnimatedBarChartInterface> = ({
  startingPercent,
  endingPercent,
  description,
  colorTheme = "sage",
  startDelay = 500,
  ariaLabel="",
  index,
  selectedFilter
}) => {


  const isForwards =  selectedFilter.id=="2022"
 
  const duration = 1000;//Math.max(Math.abs(startingPercent-endingPercent)*80, 300)
  const isIncreasing = (endingPercent>startingPercent && isForwards)|| (endingPercent<startingPercent && !isForwards);
  const patternWidth = Math.abs(startingPercent-endingPercent).toFixed(2)

  const countUpRef = React.useRef(null);
  const animationRef = React.useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: isForwards? startingPercent : endingPercent,
    end: isForwards? endingPercent: startingPercent,
    delay: startDelay / 1000,
    duration: duration / 1000,
    startOnMount: true,
    
  });
 

  useEffect(() => {

    const an = makeSlideUpAnimation(
      `animation-${startingPercent}`,
      isIncreasing?0:100, 
      isIncreasing?100:0,
      duration,
      startDelay
    );
    an.play()
    countUpRef.current.innerText = isForwards? startingPercent : endingPercent;
 

  }, [selectedFilter]);

  const insideBar = classNames({
    "bg-sage-900 ": colorTheme === "sage" && index==0,
    "bg-sage-700": colorTheme === "sage" && index==1,
    "bg-navy-900 ": colorTheme === "navy" && index==0,
    "bg-navy-700 ": colorTheme === "navy" && index==1,
    "bg-plum-900 ": colorTheme === "plum" && index==0,
    "bg-plum-700 ": colorTheme === "plum" && index==1,
    "bg-gold-pbrcustomdark ": colorTheme === "gold" && index==0,
    "bg-gold-900 ": colorTheme === "gold" && index==1,
    "bg-purple-900 ": colorTheme === "purple" && index==0,
    "bg-purple-700 ": colorTheme === "purple" && index==1,
  });
  const bBar = classNames({
    "bg-sage-300": colorTheme === "sage",
    "bg-navy-200": colorTheme === "navy",
    "bg-plum-200": colorTheme === "plum",
    "bg-gold-200": colorTheme === "gold",
    "bg-purple-200": colorTheme === "purple",
  });
 
  return (
    <div className="min-h-[140px] w-full mb-lg  flex" aria-label={ariaLabel}>
      <div style={{ width: `${startingPercent}%`}} className={` ${bBar} min-h-[140px] relative overflow-hidden`}>
      <div
        className={`absolute ${insideBar} min-h-[inherit] py-md px-xl text-white z-10`}
        style={{ width: `${100}%` }}
      >
        <p className=" type-preset-1 font-sans font-bold inline-block" aria-hidden>
          <span ref={countUpRef} >{startingPercent}</span>
          %
        </p>
        <p>{description} </p>
      </div>
   
      </div> 
      <div style={{ width: `${patternWidth}%`}} className={` ${bBar} min-h-[140px] relative overflow-hidden`}>
      <div
        ref={animationRef}
        id={`animation-${startingPercent}`}
        className={`absolute ${insideBar} min-h-[inherit]  z-10`}
        style={{ width: `${isIncreasing?0:100}%` }}
      >
      </div>
      <div  className={` absolute top-0 left-0 bottom-0 opacity-70  overflow-hidden z-20`} >
         <Pattern/> 
       </div>
      </div>
    </div>
  );
};

const makeSlideUpAnimation = (
  elementId,
  startW,
  endW,
  duration,
  delay
) => {
 
  
  let an = document
    .getElementById(elementId)
    .animate(
      [{ width: `${startW}%` }, { width: `${endW}%` }],
      {
        duration: duration,
        fill: "forwards",
        easing: 'ease-in-out',
        iterations: 1,
        delay: delay,
      }
    );
  an.pause();
  return an;
};



const Pattern = () => {
  return (<svg aria-hidden
  width="401" height="401" viewBox="0 0 401 401" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path d="M-343.837 367.206L367.206 -343.837" stroke="white" strokeWidth="2.00196"/>
  <path d="M-332.042 379.001L379.001 -332.042" stroke="white" strokeWidth="2.00196"/>
  <path d="M-320.305 390.794L390.794 -320.305" stroke="white" strokeWidth="2.00196"/>
  <path d="M-308.51 402.589L402.589 -308.51" stroke="white" strokeWidth="2.00196"/>
  <path d="M-296.717 414.326L414.326 -296.717" stroke="white" strokeWidth="2.00196"/>
  <path d="M-284.922 426.121L426.121 -284.922" stroke="white" strokeWidth="2.00196"/>
  <path d="M-273.184 437.915L437.915 -273.184" stroke="white" strokeWidth="2.00196"/>
  <path d="M-261.389 449.71L449.71 -261.389" stroke="white" strokeWidth="2.00196"/>
  <path d="M-249.595 461.448L461.448 -249.595" stroke="white" strokeWidth="2.00196"/>
  <path d="M-237.802 473.241L473.241 -237.802" stroke="white" strokeWidth="2.00196"/>
  <path d="M-226.062 485.037L485.037 -226.062" stroke="white" strokeWidth="2.00196"/>
  <path d="M-214.269 496.83L496.83 -214.269" stroke="white" strokeWidth="2.00196"/>
  <path d="M-202.474 508.625L508.625 -202.474" stroke="white" strokeWidth="2.00196"/>
  <path d="M-190.679 520.364L520.364 -190.679" stroke="white" strokeWidth="2.00196"/>
  <path d="M-178.887 532.156L532.156 -178.887" stroke="white" strokeWidth="2.00196"/>
  <path d="M-167.146 543.952L543.952 -167.146" stroke="white" strokeWidth="2.00196"/>
  <path d="M-155.354 555.745L555.745 -155.354" stroke="white" strokeWidth="2.00196"/>
  <path d="M-143.559 567.484L567.484 -143.559" stroke="white" strokeWidth="2.00196"/>
  <path d="M-131.764 579.279L579.279 -131.764" stroke="white" strokeWidth="2.00196"/>
  <path d="M-120.025 591.073L591.073 -120.025" stroke="white" strokeWidth="2.00196"/>
  <path d="M-108.231 602.867L602.867 -108.231" stroke="white" strokeWidth="2.00196"/>
  <path d="M-96.4385 614.604L614.604 -96.4385" stroke="white" strokeWidth="2.00196"/>
  <path d="M-84.6436 626.399L626.399 -84.6436" stroke="white" strokeWidth="2.00196"/>
  <path d="M-72.9053 638.193L638.193 -72.9053" stroke="white" strokeWidth="2.00196"/>
  <path d="M-61.1104 649.988L649.988 -61.1104" stroke="white" strokeWidth="2.00196"/>
  <path d="M-49.3184 661.726L661.724 -49.3164" stroke="white" strokeWidth="2.00196"/>
  <path d="M-37.5234 673.519L673.519 -37.5234" stroke="white" strokeWidth="2.00196"/>
  <path d="M-25.7852 685.313L685.313 -25.7852" stroke="white" strokeWidth="2.00196"/>
  <path d="M-13.9902 697.108L697.108 -13.9902" stroke="white" strokeWidth="2.00196"/>
  <path d="M-2.19531 708.903L708.903 -2.19531" stroke="white" strokeWidth="2.00196"/>
  <path d="M9.59961 720.642L720.642 9.59961" stroke="white" strokeWidth="2.00196"/>
  <path d="M21.3916 732.434L732.434 21.3916" stroke="white" strokeWidth="2.00196"/>
  <path d="M33.1299 744.228L744.228 33.1299" stroke="white" strokeWidth="2.00196"/>
  </svg>
  )
}

   //start()
    // const observer = new IntersectionObserver((entries, observer) => {
    //   const entry = entries[0];
    //   if(entry.isIntersecting && (an.playState == "paused" || an.playState == "finished")){
    //     an.play()
    //     start()
    //   }
    // });
    // observer.observe(animationRef.current)
        // else {
      //   wait(1000).then(()=>updateFilter(filters[1]))
      // }