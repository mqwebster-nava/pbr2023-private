import { MarkdownComponent } from "utils/utils";

interface PostBlockQuoteInterface {
    body: any;
    attribution?: string;
    isRichText?: boolean
}

const PostBlockQuote = ({body, attribution, isRichText=false}: PostBlockQuoteInterface) => {
  return (
    <div className="my-2xl border-l-[20px] border-l-plum-50 pl-md  ">
       <div className="text-plum-900 type-preset-5 font-serif font-bold">{isRichText? body : <MarkdownComponent content={body}/>}</div>
       {attribution && <p className={"pt-xl text-plum-400 font-serif type-preset-7"}>{attribution}</p>}
    </div>
  );
  };

export default PostBlockQuote;