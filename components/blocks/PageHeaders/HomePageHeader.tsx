import { PageHeaderInterface } from "./PageHeader";
import { Button } from "components/atom";
import headerIllustration1 from "public/images/Illustrations-for-website-V0118.png";
import headerIllustration2 from "public/images/Illustrations-for-website-V0119 3.png";
import headerIllustration3 from "public/images/Illustrations-for-website-V0120 9.png";
import headerIllustration4 from "public/images/Illustrations-for-website-V0120.png";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from "./PageHeader.module.css";

const header = 
  {
    bg: "bg-plum-900",
    illBg:"bg-plum-50",
    pattern: "/images/HomeTerrain1.svg",
    pattern2:"/images/Home-Terrain-2.svg",
    illustrations: [
      "https://images.ctfassets.net/t2ekr6eg3fr3/1ciib588729zyZc31EPBGG/84a9b9fc268898ad2522faa82d2dad23/home_plum_il2.png",
      "https://images.ctfassets.net/t2ekr6eg3fr3/5U6xYalP1d57oGGP2ntsiq/099b83795740b85e04f065eba7b4f7a3/home_plum_il1.png",
      "https://images.ctfassets.net/t2ekr6eg3fr3/6z2ffB942KoxRjoVvKtTLU/5d94d27f379d041b087a7a7ff2b37158/home_plum_il4.png",
      "https://images.ctfassets.net/t2ekr6eg3fr3/35fBvEBsC6ajPKq8HldU2x/fe67befe37a9dc7d31be576035342614/home_plum_il3.png",
    ],
  }
;

const HomePageHeader = ({ id, title }: PageHeaderInterface) => {

  return (
    <header key={id}>
      <div className={`${header.bg}`}>
        <div className={`responsive-container relative z-30  `}>
          <div className="w-full sm:w-2/3 md:w-3/5 lg:w-3/5 ml-auto grid grid-cols-3">
            <img
              className="object-cover w-full col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-2 lg:max-h-full max-h-[350px] "
              src={header.pattern}
              alt={""}
              height="300"
              width="300"
            ></img>
            <img
              className="object-cover w-full col-span-1  hidden sm:block md:hidden lg:block"
              src={header.pattern2}
              alt={""}
              height="300"
              width="150"
            ></img>
            
            
          </div>
          <div
            className={` absolute  z-40 top-[80px] md:top-[80px] lg:top-[128px]  h-full pr-xl md:pr-2xl 2xl:pr-0 2xl:mx-auto 2xl:max-w-screen-xl `}
          >
            <h1
              className={`animate-titleSlide font-sans type-preset-1 text-white font-black pb-lg w-full sm:w-3/4 md:w-full lg:w-3/4`}
            >
              {title}
            </h1>
            <div className="animate-titleButton ">
              <Button variant="white" href={"/services"}>
                Our work
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative responsive-container ">
      <div
          className={`  ${header.bg} -mt-[3px]  h-1/2 w-full absolute -z-10 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2`}
        ></div>
        <div className={`w-full sm:w-2/3 md:w-3/5 ml-auto  pb-[50%]  aspect-[4/3] bg-plum-50 relative z-70`}>
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
           className={`${styles.homeTransition} ${active === index ? "opacity-100": "opacity-0"}`}       
        />
        </div>
      ))}
    </div>
  )
}
