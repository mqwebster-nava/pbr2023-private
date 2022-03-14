import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Typography",
  argTypes: { onClick: { action: "clicked" } },
};

export const TextSize = () => {
  return (
    <div className="font-sans">
      <p className="text-xs ">text extra small / Preset 8</p>
      <p className="text-xs ">The quick brown fox ...</p>
      <p className="text-xs pt-md">text small / Preset 7</p>
      <p className="text-sm ">The quick brown fox ...</p>
      <p className="text-xs pt-md">text base / Preset 6</p>
      <p className="text-base ">The quick brown fox ...</p>
      <p className="text-xs pt-md">text large / Preset 5</p>
      <p className="text-lg ">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text xl / Preset 4</p>
      <p className="text-xl ">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 2xl / Preset 3</p>
      <p className="text-2xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 3xl / Preset 2</p>
      <p className="text-3xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 4xl / Preset 1</p>
      <p className="text-4xl">The quick brown fox ...</p>
  
    </div>
  );
};


export const FontFaces = () => {
    return (
      <div className="flex gap-md">
            <div className="font-sans text-base">
                <p className="text-lg font-bold">GT America</p>
                <p className="text-xs pt-md">light</p>
                <p className="font-light">The quick brown fox ...</p>
                <p className="text-xs pt-md">regular</p>
                <p className="">The quick brown fox ...</p>
                <p className="text-xs pt-md">bold</p>
                <p className="font-bold ">The quick brown fox ...</p>
                <p className="text-xs pt-md">black</p>
                <p className="font-black ">The quick brown fox ...</p>
            </div>
            <div className="font-serif text-base">
                <p className="text-lg font-bold">Freight Pro</p>
                <p className="text-xs pt-md">light</p>
                <p className="font-light">The quick brown fox ...</p>
                <p className="text-xs pt-md">regular</p>
                <p className="">The quick brown fox ...</p>
                <p className="text-xs pt-md">italic</p>
                <p className="italic ">The quick brown fox ...</p>
            </div>
        
      </div>
    );
  };
