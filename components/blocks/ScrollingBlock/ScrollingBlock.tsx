import classNames from "classnames";
import { Button } from "components/atom";
import React from "react";
import { useState } from "react";
import ColorTheme from "shared_interfaces/ColorThemes";
import ResponsiveContentContainer from "../ResponsiveContentContainer/ResponsiveContentContainer";
import styles from "./main.module.css";
// TODO move as much to tailwind

export interface ScrollingBlockInterface {
  id: string;
  kicker: string;
  title: string;
  body?: any;
  activeSection:string;
  stories?: Array<any>;
}

//buttonText?: string;
//buttonPath?: string;

const ScrollingBlock =  React.forwardRef<HTMLButtonElement, ScrollingBlockInterface>( (props, ref) => {
  const picture = "/images/pbrs/PBR-sketch-1.png";
  return (
    <section id={props.id} ref={ref}>
      <div className="sticky top-0 bg-plum-700" >
        <div className="responsive-container py-md grid grid-cols-2">
        <div className=" ">
          <div className="type-preset-5 font-bold text-white">{props.kicker}</div>
          <h2 className="type-preset-3 font-bold text-white">{props.title}</h2>
          </div>
          {props.stories.length>0 && <div className="mt-auto">
           <h3 className="type-preset-5 font-bold text-white"> {props.activeSection}</h3>
          </div>}
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div
          className="block sticky top-[70px] h-screen w-screen -z-10"
          style={{
            background: `url(${picture})` + " no-repeat center center",
            backgroundSize: "cover",
          }}
        />
        <div className="">
          {props.stories.map((story) => StorySection(story))}
        </div>
      </div>
    </section>
  );
});

const StorySection = (story) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <div className="h-auto w-full bg-white mt-[400px] mb-4xl p-xl">
        <p className="pb-xl">{story.intro}</p>
        {
        isCollapsed ?
        <button onClick={()=>{setIsCollapsed(false)}} >Read More</button>
      : <p>
        {story.full}
      </p>
      }
      </div>
    </>
  );
}


export default ScrollingBlock;
