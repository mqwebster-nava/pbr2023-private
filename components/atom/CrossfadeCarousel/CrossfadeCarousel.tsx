
import React, { useState, useEffect } from 'react'
import Image from "next/image";


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function CrossfadeCarousel({ 
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
          className={`transition-opacity  duration-[2000ms] ease-in-out ${active === index ? "opacity-100": "opacity-0"}`}      
            
        />
        </div>
      ))}
    </div>
  )
}
