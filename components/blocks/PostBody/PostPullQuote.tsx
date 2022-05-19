import quotemarks from "public/images/quote marks.png";
import Image from "next/image";
import { MarkdownComponent } from "utils/utils";

interface PostPullQuoteInterface {
    body: any;
    attribution?:string;
}

const PostPullQuote = ({body, attribution}: PostPullQuoteInterface) => {
  return (
    <div className="bg-plum-50 my-xl p-2xl ">
      <Image src={quotemarks} height={37} width={68} alt={""} /><br/>
     <div className="text-plum-900 type-preset-4 font-sans font-bold"> <MarkdownComponent content={body}/></div>
     {attribution && <p className={"pt-xl text-plum-400 font-serif type-preset-7"}>{attribution}</p>}
    </div>
  );
  
  };

export default PostPullQuote;