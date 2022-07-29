import classNames from "classnames";
import { Button } from "components/atom";
import ColorTheme from "shared_interfaces/ColorThemes";
import ResponsiveContentContainer from "../ResponsiveContentContainer/ResponsiveContentContainer";
import styles from "./main.module.css";
// TODO move as much to tailwind

export interface ScrollingBlockInterface {
  title: string;
  id: string;
  body?: any;
  kicker:string;
  colorTheme?: ColorTheme;
  buttonText?: string;
  buttonPath?: string;
}

const ScrollingBlock = ({
  id,
  kicker,
  title = "Test",
  body,
  buttonText,
  buttonPath,
}: ScrollingBlockInterface) => {
    const picture = "/images/pbrs/PBR-sketch-1.png"
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
            background:
              `url(${picture})` + " no-repeat center center",
            backgroundSize: "cover",
          }}
        />
        <div className="p-2xl">
          <div className="h-[200px] w-full bg-white mt-[400px] mb-4xl">
            <h1 className="p-xl">Story 1</h1>
          </div>
          <div className="h-[200px] w-full bg-white mt-[400px] mb-4xl">
          <h1 className="p-xl">Story 2</h1>
          </div>
          <div className="h-[200px] w-full bg-white mt-[400px] mb-4xl">
          <h1 className="p-xl">Story 3</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScrollingBlock;
