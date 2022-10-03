import { useEffect } from "react";

type ArrowSize = 'large' | "default";
//type ArrowColor = 'white' | 'black';

export interface ArrowDownInterface {
    size?: ArrowSize;
    color?: string ;
    sectionId
    isAnimated?: boolean;
    isMobileHidden?:boolean;
}
  



const ArrowDown = ({size="default", color="black", sectionId, isAnimated=false, isMobileHidden=false}: ArrowDownInterface) => {
    const w = size=="default" ? "37" : "56";
    const h = size=="default" ? "68" : "103";
    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

       if(isAnimated && mediaQuery && !mediaQuery.matches){
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
       }
    });

  return (
<div className={`h-[${h}px] w-[${w}px] `}>
    <svg
      width={w}
      height={h}
      className={`stroke-${color}`}
      viewBox="0 0 68 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id={`${sectionId}-line`}
        className={`${isMobileHidden && "hidden lg:block"}`}
        d="M27.998 1V101.613"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="320"
        strokeDashoffset="0"
      />
      <path
        d="M54.9964 74.5254L27.9982 101.614L1 74.5254"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </div>
  );
};


// export const ArrowDownStemless = ({color="black", sectionId,}: ArrowDownInterface) => {
//     const w =  "37" ;
//     const h = "22";


//   return (
// <div className={`h-[${h}px] w-[${w}px]`}>
   
//     <svg 
//     width="39" 
//     height="22" 
//     viewBox="0 0 39 22" 
//     className={`stroke-${color}`}
//     fill="none" 
//     xmlns="http://www.w3.org/2000/svg">
// <path d="M38 1.52344L19.5 20.0851L1 1.52344" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//     </div>
//   );
// };


export default ArrowDown;
