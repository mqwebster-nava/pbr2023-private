interface CaptionTextInterface {
    id:string;
  caption: string;
  attribution?: string;
}

const CaptionText = ({ id, caption, attribution }: CaptionTextInterface) => {
    console.log(caption);
  return (
    <div className={"border-l-black border-l-2 pl-md mb-xl mt-sm"} key={id}>
      <p className="type-preset-7 font-sans">{caption}</p>
      {attribution ?? <p className="type-preset-7 font-sans text-gray-400">{attribution}</p>}
    </div>
  );
};
export default CaptionText;
