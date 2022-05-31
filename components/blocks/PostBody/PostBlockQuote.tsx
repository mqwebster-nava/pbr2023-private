
interface PostBlockQuoteInterface {
    body: any;
    attribution?: string;
}

const PostBlockQuote = ({body, attribution,}: PostBlockQuoteInterface) => {
  return (
    <blockquote className="my-2xl border-l-[20px] border-l-plum-50 pl-md  ">
       <div className="text-plum-900 type-preset-5 font-serif font-bold">{body}</div>
       {attribution && <p className={"pt-xl text-plum-400 font-serif type-preset-7"}>{attribution}</p>}
    </blockquote>
  );
  };

export default PostBlockQuote;