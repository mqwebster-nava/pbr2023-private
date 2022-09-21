import { useEffect } from "react";

type ArrowSize = 'large' | "default";
type ArrowColor = 'white' | 'black';

export interface ArrowDownInterface {
    size?: ArrowSize;
    color?: ArrowColor ;
    sectionId
}
  



const ArrowDown = ({size="default", color="black", sectionId}: ArrowDownInterface) => {
    const w = size=="default" ? "37" : "56";
    const h = size=="default" ? "68" : "103";
    useEffect(() => {
        document.getElementById(sectionId+"-line").animate(
            [
              
            { strokeDashoffset: 320},
            { strokeDashoffset: -320},

            ],
            {
              
              duration: 2000,
              iterations: Infinity,
              easing: 'ease-out',
              fill: 'forwards',
            }
          );
    });

  return (
<div className={`h-[${h}px] w-[${w}px]`}>
    <svg
      width={w}
      height={h}
      viewBox="0 0 68 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id={`${sectionId}-line`}
        d="M27.998 1V101.613"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="320"
        strokeDashoffset="0"
      />
      <path
        d="M54.9964 74.5254L27.9982 101.614L1 74.5254"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </div>
  );

};

export default ArrowDown;
