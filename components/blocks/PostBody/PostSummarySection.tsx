import { MarkdownComponent } from "utils/utils";

interface PostSummarySectionInterface {
    title?:string;
    body: any;
}

const PostSummarySection = ({body, title}: PostSummarySectionInterface) => {
  return (
    <div className="bg-gray-100 my-xl px-2xl pt-3xl pb-2xl">
      {title && <p className={"type-preset-6  font-sans font-bold pb-md"}>{title}</p>}
     <div className=" type-preset-6 font-sans "> <MarkdownComponent content={body}/></div>
    </div>
  );
  
  };

export default PostSummarySection;