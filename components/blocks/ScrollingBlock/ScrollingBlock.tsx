import classNames from "classnames";
import { Button } from "components/atom";
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
  stories?: Array<any>;
}

//buttonText?: string;
//buttonPath?: string;

const ScrollingBlock = ({
  id,
  kicker,
  title = "Test",
  body,
  stories,
}: ScrollingBlockInterface) => {
  const picture = "/images/pbrs/PBR-sketch-1.png";
  return (
    <section className={``}>
      <div className="sticky top-0 bg-plum-700">
        <div className="responsive-container py-md">
          <div className="type-preset-5 font-bold text-white">{kicker}</div>
          <h2 className="type-preset-3 font-bold text-white">{title}</h2>
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
          {stories.map((story) => StorySection(story))}
        </div>
      </div>
    </section>
  );
};

const StorySection = (story) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
    <div className="sticky top-[99px] bg-white p-xl mt-[400px]">
      <h2>{story.title}</h2>
    </div>
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
