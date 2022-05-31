
interface CaptionTextInterface {
    id:string;
  caption: any;
  attribution?: string;
}

const CaptionText = ({ id, caption, attribution }: CaptionTextInterface) => {
  return (
    <div className={"type-preset-7 border-l-black border-l-2 pl-md mb-xl mt-sm"} key={id}>
      <p className=" font-sans">{caption}</p>
      {attribution && <p className=" font-sans text-gray-400 pt-md">{attribution}</p>}
    </div>
  );
};
export default CaptionText;
