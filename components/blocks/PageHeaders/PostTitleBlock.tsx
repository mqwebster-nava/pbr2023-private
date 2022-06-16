import { Button } from "components/atom";
import React from "react";

const TitleBlock = ({ title, subtitle, body, textColor, buttonPath=null, buttonText=null }) => {
    return (
      <div >
        <h1 className={` font-sans type-preset-1  ${textColor} font-bold md:font-black w-full xl:w-3/4`}>
          {title}
        </h1>
        <p
          className={` text-white type-preset-1 font-sans font-bold md:font-black
                        w-full  xl:w-3/4 pb-md`}
        >
          {subtitle}
        </p>
        {body && (
          <p className="font-serif font-light type-preset-4 py-lg text-white w-full xl:w-3/4">
            {body}
          </p>
        )}
        {buttonPath && <Button href={buttonPath}>{buttonText}</Button>}
      </div>
    );
  };

export default TitleBlock;
  