//import classNames from "classnames";
import { CONTENT_VARIANT } from "./PostContent";


interface PostBlockQuoteInterface {
    body: any;
    attribution?: string;
    variant?: CONTENT_VARIANT
}

const PostBlockQuote = ({body, attribution, variant="post" }: PostBlockQuoteInterface) => {
  const color = variant==="post"? "plum" : "sage";
  const border = variant=="report sage" ? `border-l-${color}-900`: `border-l-${color}-50`;
  return (
    <blockquote className={`my-2xl border-l-[20px] ${border} pl-md  `}>
       <div className={`text-${color}-900 type-preset-5 font-serif font-bold`}>{body}</div>
       {attribution && <p className={`pt-xl text-${color}-400 font-serif type-preset-7`}>{attribution}</p>}
    </blockquote>
  );
  };

export default PostBlockQuote;