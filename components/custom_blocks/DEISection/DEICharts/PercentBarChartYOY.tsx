import classNames from "classnames";
import CountUp, { useCountUp } from "react-countup";
import React, { useState, useEffect } from "react";
import BrandPatternTerrain from "components/atom/BrandPattern/BrandPatternTerrain";
import ColorTheme from "utils/ColorThemes";

interface PercentBarChartYOYInterface {
  description: string;
  graphs: Array<AnimatedBarChartInterface>;
  colorTheme: ColorTheme
}

export const PercentBarChartYOY: React.FC<PercentBarChartYOYInterface> = ({
  description,
  graphs,
  colorTheme
}) => {

  return (
    <>
      <p className="font-bold py-md">{description}</p>
      {graphs.map((graph, index) => (
        <AnimatedBarChart
          key={`percent_bar_graph_${index}`}
          {...graph}
          colorTheme={colorTheme}
          index={index}
        />
      ))}
    </>
  );
};

export interface AnimatedBarChartInterface {
  startingPercent: number;
  endingPercent: number;
  description: string;
  colorTheme: ColorTheme;
  index: number;
  startDelay?: number;
  endDelay?: number;
}

export const AnimatedBarChart: React.FC<AnimatedBarChartInterface> = ({
  startingPercent,
  endingPercent,
  description,
  colorTheme = "sage",
  startDelay = 1000,
  endDelay = 1500,
  index
}) => {

  const duration = Math.max(Math.abs(startingPercent-endingPercent)*80, 300)
  const isIncreasing = endingPercent>startingPercent;
  const endW = isIncreasing ? 100 : (100*(1-(startingPercent-endingPercent)/startingPercent))
  const startW = isIncreasing ? 100*startingPercent/endingPercent : 100;
  const patternWidth = Math.abs(startW-endW).toFixed(2)

  const countUpRef = React.useRef(null);
  const animationRef = React.useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: startingPercent,
    end: endingPercent,
    delay: startDelay / 1000,
    duration: duration / 1000,
    startOnMount: false
  });


  useEffect(() => {
    const an = makeSlideUpAnimation(
      `animation-${startingPercent}`,
      isIncreasing?0:100, 
      isIncreasing?100:0,
      duration,
      startDelay
    );
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
 
      if(entry.isIntersecting && an.playState == "paused"){
        an.play()
        start()

      }
    });
    observer.observe(animationRef.current)

  }, [endingPercent, startDelay, duration, endDelay, startingPercent]);

  const insideBar = classNames({
    "bg-sage-900 ": colorTheme === "sage" && index==0,
    "bg-sage-700": colorTheme === "sage" && index==1,
    "bg-navy-900 ": colorTheme === "navy" && index==0,
    "bg-navy-700 ": colorTheme === "navy" && index==1,
    "bg-plum-900 ": colorTheme === "plum" && index==0,
    "bg-plum-700 ": colorTheme === "plum" && index==1,
    "bg-gold-900 ": colorTheme === "gold" && index==0,
    "bg-gold-700 ": colorTheme === "gold" && index==1,
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
    <div className="min-h-[140px] w-full mb-xl  flex">

      <div style={{ width: `${startingPercent}%`}} className={` ${bBar} min-h-[140px] relative overflow-hidden`}>
      <div
        className={`absolute ${insideBar} min-h-[inherit] px-2 py-4 text-white z-10`}
        style={{ width: `${100}%` }}
      >
        <p className="type-preset-3 font-sans font-bold inline-block">
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
  /*
  portion of the whole box
  [___|_]
  56 % of 100 = x % of 73
  56/73 = x/73
  x = 56*73 / 100
  */
  
  let an = document
    .getElementById(elementId)
    .animate(
      [{ width: `${startW}%` }, { width: `${endW}%` }],
      {
        duration: duration,
        fill: "forwards",
        iterations: 1,
        delay: delay,
      }
    );
  an.pause();
  return an;
};



const Pattern = () => {
  return (<svg 
  width="401" height="401" viewBox="0 0 401 401" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_573_10495)">
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
  </g>
  <defs>
  <clipPath id="clip0_573_10495">
  <rect width="400.392" height="400.392" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  )
}

  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

    //an.play();

    // const startCycle = () =>{
    //   //const label = document.getElementById(`labelText-${startingPercent}`);
    //   an.play();
    //   start()
    //   //label.innerText = textStart;
    //   sleep(startDelay).then(() => {
    //     //label.innerText = "";
    //     sleep(duration).then(()=>{
    //       //label.innerText = textEnd;

    //     })
    //   })
    // }

    // const intervalID = setInterval(() => {
    //   startCycle()
    // }, startDelay + duration + endDelay);

    // startCycle()

    //return () => clearInterval(intervalID);

//<span id={`labelText-${startingPercent}`}>2021</span>
//   (function loop() {

//       sleep(1000).then(()=>
//       {
//         i = setInterval(() => {
//           setWidth((prevWidth) => {
//             if (prevWidth === endingPercent) {
//               return startingPercent;
//             }
//             if (endingPercent < prevWidth) return prevWidth - 1;
//             if (prevWidth === 100) return prevWidth;
//             return prevWidth + 1;
//           });
//       }, (duration / ( Math.abs(endingPercent - startingPercent))));

//       }).then(()=>{
//         clearInterval(i)
//         sleep(1000).then(()=>loop())
//       })

//  })();

// function getInterval() {
//     return setInterval(() => {
//         setWidth((prevWidth) => {
//           if (prevWidth === endingPercent) {
//             return startingPercent;
//           }
//           if (endingPercent < prevWidth) return prevWidth - 1;
//           if (prevWidth === 100) return prevWidth;
//           return prevWidth + 1;
//         });
//     }, (duration / ( Math.abs(endingPercent - startingPercent))));

//   }

// const startAnimation = () => {
//    i = getInterval()
// };

// const endAnimation = () => {
//     clearInterval(i);
//     setTimeout(startAnimation, endDelay * 1000);
// };

// setTimeout(startAnimation, startDelay);
// setTimeout(endAnimation, endDelay );

/*

export const AnimatedBarChart: React.FC<AnimatedBarChartInterface> = ({
  startingPercent,
  endingPercent,
  textEnd = "2022",
  textStart = "2021",
  description,
  insideBarColor = "sage",
  duration = 500,
  startDelay = 1500,
  endDelay = 1500,
}) => {
  //const [width, setWidth] = useState(startingPercent);

  useEffect(() => {
    const an = makeSlideUpAnimation(
      `animation-${startingPercent}`,
      startingPercent,
      endingPercent,
      duration,
      startDelay
    );
    an.play();
    an.addEventListener("animationiteration", 
    ()=>{
      console.log()

    }, false);
    an.onfinish = (e) => {
      setTimeout(() => an.play(), endDelay);
    };
    const loop = ()=> setTimeout(()=>{
      const label = document.getElementById(`labelText-${startingPercent}`)
      label.innerText = textEnd;
      setTimeout(()=>{
        label.innerText = textStart;
        loop();
      }, duration+endDelay)
    }, startDelay);
    loop();

    
  }, [endingPercent, startDelay, duration, endDelay, startingPercent]);

  const insideBar = classNames({
    "bg-sage-700": insideBarColor === "sage",
    "bg-navy-900": insideBarColor === "navy",
    "bg-plum-900": insideBarColor === "plum",
  });
  return (
    <div className="min-h-[140px] w-full mb-xl bg-sage-50">
      <div
        id={`animation-${startingPercent}`}
        className={`${insideBar} min-h-[inherit] px-2 py-4 text-white`}
        style={{ width: `${startingPercent}%` }}
      >
        <p id={`labelText-${startingPercent}`}>2021</p>
        <p className="type-preset-3 font-black inline-block">
          <CountUp
            start={startingPercent}
            end={endingPercent}
            delay={startDelay / 1000}
            duration={duration / 1000}
            onEnd={(e)=>{
              setTimeout(() => { e.start()}, endDelay);
            }}
          />
          %
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const makeSlideUpAnimation = (
  elementId,
  startingPercent,
  endingPercent,
  duration,
  delay
) => {
  console.log(startingPercent);
  let an = document
    .getElementById(elementId)
    .animate(
      [{ width: `${startingPercent}%` }, { width: `${endingPercent}%` }],
      {
        duration: duration,
        fill: "forwards",
        iterations: 1,
        delay: delay,
      }
    );
  an.pause();
  return an;
};

*/
