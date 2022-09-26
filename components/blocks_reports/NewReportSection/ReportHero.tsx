import { useEffect, useRef, useState } from "react";
import ArrowDown from "./Atoms/ArrowDown";
import { animationHandler, AnimationObject, getOffsetPct } from "./utils";
import { makeFadeInAnimation, makeSlideUpAnimation } from "./animations";


/*
TODO 
 - Responsively change box size
 - Accessibility Check
- Defined Sizing of the title font, align with 
*/


const ReportHero = ({ }) => { //id, title, 
  //const [isActive, setIsActive] = useState(false);
  const [animationList, setAnimationList] = useState([]);
  
 
  // Figures out the size of the box with the patterns 
    function getAnimationBoxHeight(){
      const title = document.getElementById("reportHeader-titleBox");
      let h = Math.round(title.getBoundingClientRect().height);
      let w = Math.round(title.getBoundingClientRect().width);
      let s = h>w ? h<600 ? h : 600 : w<900? w:900;
      s = s> window.innerHeight-70?window.innerHeight-70:s;
      if(window.innerWidth < 1024 && s>400){
        s=400
      }
      if(window.innerWidth < 768 && s>250){
        s=250
      }
      const svg = document.getElementById("baseSVG");
      const animBox = document.getElementById("animation-box");
      svg.setAttribute('height', `${s}`);
      svg.setAttribute('width', `${s}`);
      animBox.style.height=`${s}px`;
      animBox.style.width=`${s}px`;
    }

    const initiateAnimations= () =>{

     makeSlideUpAnimation("reportHeader-titleBox", 0).play()
     makeSlideUpAnimation("titleLine1", 200).play()
     makeSlideUpAnimation("titleLine2", 400).play()
     makeFadeInAnimation("heroArrow", 600).play();
     setAnimationList([{
        triggerPct: 5,
        animation: makeSlideUpAnimation("titleLine3", 0),
      }]);
    }
  useEffect(() => {
    const onScroll = () => {
      
      const offsetPct = getOffsetPct("reportHeader");
      const _isActive = offsetPct >= 0 && offsetPct < 100 ;
      if (!_isActive) return;
     
      if (offsetPct < 0 || offsetPct >= 100) return;
      animationHandler({offsetPct, animationList});
      const animBox = document.getElementById("animation-box");
      const s = animBox.getBoundingClientRect().height;
      const svg = document.getElementById("box2");
      const pctS = Math.round((s* Math.min(offsetPct, 50)) / 50);
      svg.setAttribute('height', `${pctS}`);
      svg.setAttribute('width', `${pctS}`);
  
    };

      getAnimationBoxHeight();
    if(animationList.length==0 ){
        initiateAnimations();
    }
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <header
      className={`bg-purple-900 w-full lg:h-[150vh] h-[125vh] `}
      id="reportHeader"
    >
      <div
        className={`w-full lg:min-h-[650px] lg:h-[calc(100vh_-_70px)]  sticky top-[70px] responsive-container overflow-hidden`}
      >
        <div className=" z-40 flex flex-col lg:flex-row gap-xl ">
          <div
            
            className="w-full lg:w-3/4 relative h-auto"
          >
            <h1 id={"reportHeader-titleBox"} className="pt-2xl lg:pb-3xl -ml-sm md:-ml-md xl:text-[200px] lg:text-[170px] md:text-[140px] text-[80px] font-black text-white  leading-[0.8]  opacity-0 motion-reduce:opacity-100">
              Public <br /> Benefit <br /> Report
            </h1>
            <div
              id="animation-box"
              className="absolute top-0 left-0 -z-10 h-full w-full "
            >
                <SVG1/> 
                <SVG2/>
            </div>
            
           
          </div>
          <div className=" w-full  lg:w-1/4 h-full flex flex-col justify-between pt-3xl gap-xl">
            <div>
              <p id="titleLine1" className=" type-preset-5 font-serif text-white font-bold tracking-wide opacity-0 motion-reduce:opacity-100">
                Equity that lasts:
              </p>
              <p id="titleLine2" className="type-preset-5 font-serif text-white font-light tracking-wide opacity-0 motion-reduce:opacity-100">
                building sustainable government services
              </p>
              <p
                id="titleLine3"
                className="type-preset-5 font-serif text-purple-100 opacity-0 pt-xl tracking-wide"
              >
                Each year, Nava outlines its work and progress in a public
                benefit report.
              </p>
            </div>
            <a  id={"heroArrow"} className="lg:absolute lg:bottom-[160px] opacity-0 motion-reduce:opacity-100 pb-sm" href={"#toc"} aria-label={"skip to next section"}>
              <ArrowDown
                color="white"
                size="large"
                sectionId={"reportHeader"}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};


const SVG1 = () => {
  return (
  <svg   id={'baseSVG'} 
  className={`absolute top-0 left-0 -z-30 `}
  width="90" 
  height="90" viewBox="0 0 895 895" fill="none" xmlns="http://www.w3.org/2000/svg">
  
  <rect width="895" height="895" transform="translate(0 895) rotate(-90)" fill="#471385"/>

  <path d="M820.817 1663.58L-768.581 74.1823" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M847.182 1637.22L-742.216 47.8175" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M873.545 1610.98L-715.978 21.4553" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M899.908 1584.62L-689.615 -4.90748" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M926.148 1558.25L-663.251 -31.1483" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M952.511 1531.89L-636.888 -57.5111" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M978.875 1505.65L-610.648 -83.8752" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1005.24 1479.28L-584.285 -110.238" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1031.48 1452.92L-557.922 -136.477" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1057.84 1426.56L-531.557 -162.842" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1084.2 1400.32L-505.319 -189.204" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1110.57 1373.95L-478.954 -215.569" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1136.93 1347.59L-452.591 -241.932" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1163.17 1321.23L-426.229 -268.17" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1189.53 1294.86L-399.864 -294.535" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1215.9 1268.63L-373.626 -320.897" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1242.26 1242.26L-347.26 -347.262" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1268.5 1215.9L-320.898 -373.501" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1294.86 1189.54L-294.535 -399.864" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1321.23 1163.29L-268.295 -426.228" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1347.59 1136.93L-241.932 -452.591" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1373.83 1110.57L-215.569 -478.829" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1400.19 1084.2L-189.204 -505.195" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1426.56 1057.97L-162.966 -531.557" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1452.92 1031.6L-136.601 -557.922" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1479.16 1005.24L-110.238 -584.161" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1505.52 978.875L-83.8756 -610.523" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1531.89 952.635L-57.6353 -636.888" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1558.25 926.272L-31.2725 -663.25" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1584.62 899.908L-4.90778 -689.615" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1610.85 873.545L21.455 -715.854" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1637.22 847.182L47.8178 -742.217" stroke="#761E9C" strokeWidth="4.475"/>
  <path d="M1663.58 820.942L74.058 -768.581" stroke="#761E9C" strokeWidth="4.475"/>
  </svg>
  )
}

const SVG2 = () => {
  return (
  <svg   id={'box2'} 
  className={`absolute bottom-0 left-0 bg-purple-700 -z-10`}
width="0" height="0" viewBox="0 0 527 527" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M483.32 979.561L-452.561 43.6804" stroke="#471385" strokeWidth="2.635"/>
<path d="M498.843 964.037L-437.037 28.1565" stroke="#471385" strokeWidth="2.635"/>
<path d="M514.367 948.587L-421.587 12.6333" stroke="#471385" strokeWidth="2.635"/>
<path d="M529.89 933.064L-406.064 -2.88967" stroke="#471385" strokeWidth="2.635"/>
<path d="M545.341 917.54L-390.54 -18.3411" stroke="#471385" strokeWidth="2.635"/>
<path d="M560.864 902.017L-375.017 -33.864" stroke="#471385" strokeWidth="2.635"/>
<path d="M576.388 886.565L-359.565 -49.3882" stroke="#471385" strokeWidth="2.635"/>
<path d="M591.911 871.042L-344.043 -64.9112" stroke="#471385" strokeWidth="2.635"/>
<path d="M607.361 855.519L-328.52 -80.3611" stroke="#471385" strokeWidth="2.635"/>
<path d="M622.885 839.995L-312.995 -95.8855" stroke="#471385" strokeWidth="2.635"/>
<path d="M638.408 824.545L-297.545 -111.408" stroke="#471385" strokeWidth="2.635"/>
<path d="M653.933 809.021L-282.021 -126.933" stroke="#471385" strokeWidth="2.635"/>
<path d="M669.456 793.498L-266.498 -142.456" stroke="#471385" strokeWidth="2.635"/>
<path d="M684.906 777.975L-250.975 -157.906" stroke="#471385" strokeWidth="2.635"/>
<path d="M700.43 762.45L-235.45 -173.43" stroke="#471385" strokeWidth="2.635"/>
<path d="M715.953 747L-220.001 -188.953" stroke="#471385" strokeWidth="2.635"/>
<path d="M731.478 731.476L-204.476 -204.478" stroke="#471385" strokeWidth="2.635"/>
<path d="M746.927 715.953L-188.953 -219.928" stroke="#471385" strokeWidth="2.635"/>
<path d="M762.45 700.43L-173.43 -235.45" stroke="#471385" strokeWidth="2.635"/>
<path d="M777.975 684.979L-157.979 -250.975" stroke="#471385" strokeWidth="2.635"/>
<path d="M793.498 669.456L-142.456 -266.498" stroke="#471385" strokeWidth="2.635"/>
<path d="M808.947 653.933L-126.933 -281.948" stroke="#471385" strokeWidth="2.635"/>
<path d="M824.472 638.409L-111.409 -297.472" stroke="#471385" strokeWidth="2.635"/>
<path d="M839.995 622.959L-95.959 -312.995" stroke="#471385" strokeWidth="2.635"/>
<path d="M855.519 607.435L-80.4346 -328.519" stroke="#471385" strokeWidth="2.635"/>
<path d="M870.969 591.911L-64.9112 -343.969" stroke="#471385" strokeWidth="2.635"/>
<path d="M886.492 576.388L-49.3882 -359.492" stroke="#471385" strokeWidth="2.635"/>
<path d="M902.017 560.937L-33.9371 -375.017" stroke="#471385" strokeWidth="2.635"/>
<path d="M917.54 545.414L-18.4141 -390.54" stroke="#471385" strokeWidth="2.635"/>
<path d="M933.064 529.89L-2.88969 -406.064" stroke="#471385" strokeWidth="2.635"/>
<path d="M948.514 514.367L12.6333 -421.514" stroke="#471385" strokeWidth="2.635"/>
<path d="M964.037 498.844L28.1562 -437.037" stroke="#471385" strokeWidth="2.635"/>
<path d="M979.561 483.393L43.6074 -452.561" stroke="#471385" strokeWidth="2.635"/>

</svg>
  )
}
export default ReportHero;

