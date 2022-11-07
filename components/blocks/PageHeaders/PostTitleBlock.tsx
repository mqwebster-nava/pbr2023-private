import { Button } from "components/atom/Button/Button";
import React from "react";
import MarkdownComponent from "utils/MarkdownComponent";

const PostTitleBlock = ({ title, subtitle, body, textColor, buttonPath=null, buttonText=null, isEvent }) => {
    return (
      <div >
        <h1 className={`animate-titleSlide font-sans type-preset-1  ${textColor} font-bold md:font-black w-full ${!isEvent && "xl:w-3/4"}`}>
          {title}
        </h1>
        <p
          className={`animate-titleSlideB text-white type-preset-1 font-sans font-bold md:font-black
                        w-full  xl:w-3/4 pb-md`}
        >
          {subtitle}
        </p>
        {body && (
          <div className={`animate-titleSlideC font-serif font-light type-preset-4 py-lg text-white w-full ${!isEvent && "xl:w-3/4"}`}>
            <MarkdownComponent content={body}/>
          </div>
        )}
        {buttonPath && <Button href={buttonPath} analyticsLabel="page-header">{buttonText}</Button>}
      </div>
    );
  };

export default PostTitleBlock;
  