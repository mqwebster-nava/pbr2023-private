
interface PostPullQuoteInterface {
    body: any;
}

const PostPullQuote = ({body}: PostPullQuoteInterface) => {
    return (
      <div className="my-2xl border-l-[20px] border-l-plum-50 pl-md  text-plum-900 type-preset-5 font-serif font-bold">
        {body}
      </div>
    );
  };

export default PostPullQuote;