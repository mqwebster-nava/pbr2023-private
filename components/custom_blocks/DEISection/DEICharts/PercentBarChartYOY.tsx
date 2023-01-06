import classNames from "classnames";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";

interface PercentBarChartYOYInterface {
  description: string;
  graphs: Array<AnimatedBarChartInterface>;
}

export const PercentBarChartYOY: React.FC<PercentBarChartYOYInterface> = ({
  description,
  graphs,
}) => {
  return (
    <>
      <p className="font-bold py-md">{description}</p>
      {graphs.map((graph, index) => (
        <AnimatedBarChart
          key={`percent_bar_graph_${index}`}
          {...graph}
          duration={1500}
        />
      ))}
    </>
  );
};

export interface AnimatedBarChartInterface {
  startingPercent: number;
  endingPercent: number;
  textStart: string;
  textEnd: string;
  description: string;
  insideBarColor?: string;
  duration: number;
  startDelay?: number;
  endDelay?: number;
}

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
