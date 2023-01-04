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
          duration={3000}
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
  textEnd,
  textStart,
  description,
  insideBarColor = "sage",
  duration,
  startDelay = 3000,
  endDelay = 5000,
}) => {
  const [width, setWidth] = useState(startingPercent);
  const [frame, setFrame] = useState(0);
  const numberSpeed = 2;
 
  useEffect(() => {
    function getInterval() {
        return setInterval(() => {
            setWidth((prevWidth) => {
              if (prevWidth === endingPercent) {
                return startingPercent;
              }
              if (endingPercent < prevWidth) return prevWidth - 1;
              if (prevWidth === 100) return prevWidth;
              return prevWidth + 1;
            });
        }, (duration / ( Math.abs(endingPercent - startingPercent))));
    
      }

    let i;
    
    const startAnimation = () => {
       i = getInterval()
    };

    const endAnimation = () => {
        clearInterval(i);
        setTimeout(startAnimation, endDelay * 1000);
    };
  

   // setTimeout(startAnimation, startDelay);
    setTimeout(endAnimation, endDelay );

    return () => clearInterval(i);
  }, [endingPercent, startDelay, duration, endDelay, startingPercent]);

  const insideBar = classNames({
    "bg-sage-700": insideBarColor === "sage",
    "bg-navy-900": insideBarColor === "navy",
    "bg-plum-900": insideBarColor === "plum",
  });
  return (
    <div className="min-h-[140px] w-full mb-xl bg-sage-50">
      <div
        className={`${insideBar} min-h-[inherit] px-2 py-4 text-white`}
        style={{ width: `${width}%` }}
      >
        <p className="type-preset-3 font-black inline-block">{width}%</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
