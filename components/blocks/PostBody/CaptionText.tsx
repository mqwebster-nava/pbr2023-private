
interface CaptionTextInterface {
    id:string;
  caption: any;
  attribution?: string;
}

const CaptionText = ({ id, caption, attribution }: CaptionTextInterface) => {
  return (
    <div className={"type-preset-7 border-l-black border-l-2 pl-md my-sm"} key={id}>
      <div className="font-sans ">{caption}</div>
      {attribution && <p className=" font-sans text-gray-500 pt-md">{attribution}</p>}
    </div>
  );
};
export default CaptionText;
