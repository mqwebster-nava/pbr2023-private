import { MarkdownComponent } from "utils/utils";

interface CaptionTextInterface {
    id:string;
  caption: string;
  attribution?: string;
}

const CaptionText = ({ id, caption, attribution }: CaptionTextInterface) => {
  return (
    <div className={"border-l-black border-l-2 pl-md mb-xl mt-sm"} key={id}>
      <p className="type-preset-7 font-sans">{<MarkdownComponent content={caption}/>}</p>
      {attribution && <p className="type-preset-7 font-sans text-gray-400 pt-md">{attribution}</p>}
    </div>
  );
};
export default CaptionText;
