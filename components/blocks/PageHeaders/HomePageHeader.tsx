import { PageHeaderInterface } from "./PageHeader";
import { Button } from "components/atom";
import headerIllustration1 from "public/images/Home-Portrait-1-880x660-V1.png";
import headerIllustration2 from "public/images/Home-Portrait-2-880x660-V1.png";
import headerIllustration3 from "public/images/Home-Portrait-3-880x660-V1.png";
import headerIllustration4 from "public/images/Home-Portrait-4-880x660-V1.png";
import Pattern2 from "/public/images/Home-Brand-Pattern-Direction-only-V1.svg";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from "./PageHeader.module.css";

const header = 
  {
    bg: "bg-plum-900",
    illBg:"bg-plum-50",
    pattern: "/images/Home-Brand-Pattern-Terrain-only-V2.svg",
    pattern2:"/images/Home-Brand-Pattern-Direction-only-V1.svg",
  }
;

const HomePageHeader = ({ id, title }: PageHeaderInterface) => {

  return (
    <header key={id} className="overflow-hidden">
      <div className={`${header.bg}`}>
        <div className={`responsive-container relative z-20  `}>
          <div className={`
          w-full flex justify-end ml-auto text-[0px]
          sm:w-2/3 
          md:w-3/5 
         `}>
           <div className={`
         grow
         h-[240px] sm:h-[200px]
            md:h-[320px] 
            `}>
             <Image
              priority
              className=""
              src={header.pattern}
              objectFit={"cover"}
              layout={"responsive"}
              height="350"
              width="350"
              alt={""}
            ></Image> 
            </div> 
            <div className={`
  
            hidden 
            lg:block h-[240px] sm:h-[200px] md:h-[320px]   w-[160px] `}>
            <Image
              priority
              className=""
              objectFit={"cover"}
              src={Pattern2}
              alt={""}
              layout={"responsive"}
              height="320"
              width="160"
            ></Image>
            </div>
            
          </div>
          <div
            className={` absolute  z-30 top-2xl md:top-2xl lg:top-3xl  h-full pr-xl md:pr-2xl 2xl:pr-0 2xl:mx-auto 2xl:max-w-screen-xl `}
          >
            <h1
              className={`animate-titleSlide font-sans type-preset-1 text-white font-black pb-lg w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-[70%]`}
            >
              {title}
            </h1>
            <div className="block sm:hidden animate-titleSlideB">
              <Button variant="white" href={"/services"}>
                See our work
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative responsive-container">
      <div
          className={` ${header.bg} -mt-[3px]  h-1/2 w-full absolute -z-10 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2`}
        > </div>
        <div className={`relative z-40  flex flex-col sm:flex-row `}>
        <div className="hidden sm:block animate-titleSlideB pb-xl">
              <Button variant="white" href={"/services"}>
               See our work
              </Button>
            </div>
          <div className={`w-full sm:w-2/3 md:w-3/5 ml-auto  pb-[75%] sm:pb-[50%] md:pb-[45%]  bg-plum-50 `}>

           <CrossfadeCarousel
            interval={2000}
            transition={2000}
            images={[
              headerIllustration1,
              headerIllustration2,
              headerIllustration3,
              headerIllustration4
            ]}
          /> 
        </div>
        </div>
        </div>
    </header>
  );
};

export default HomePageHeader;





const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function CrossfadeCarousel({ 
  cycle = true,
  interval=  2000,
  transition= 2000, images }) {
  const [active, setActive] = useState(0)
  const [firstTransitionIsDone, setFirstTransitionIsDone] = useState(false)

  useEffect(() => {
    if (!cycle) return
    const timeout = setTimeout(() => {
      async function startImageTransition() {
        if (firstTransitionIsDone) await wait(transition)
        setActive(active === images.length - 1 ? 0 : active + 1)
        setFirstTransitionIsDone(true)
      }
      if (cycle) {
        startImageTransition()
      }
    }, interval)

    return () => clearTimeout(timeout)
  }, [active, cycle, transition, interval, images])

  return (
    <div  className="relative  w-full h-full">
      {images.map((image, index) => (
        <div className={` absolute object-cover `} key={`${image}-${index}`} >
        <Image
          src={image} 
          height={image.height}
          width={image.width}
          alt={""}
          className={`${styles.homeTransition} ${active === index ? "opacity-100": "opacity-0"}`}      
            
        />
        </div>
      ))}
    </div>
  )
}
