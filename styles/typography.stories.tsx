import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Typography",
  argTypes: { onClick: { action: "clicked" } },
};

const dscale= 1.25, mscale = 1.1, droot=18, mroot=16;
const fontHelper = (size) => {
  let drem= 1; let mrem =1;
  if( size > 6) {
    drem = Math.round(1/(Math.pow(dscale,(size-6))));
    mrem = Math.round(1/(Math.pow(mscale,(size-6))));
  }else if (size<6){
    drem = Math.round(Math.pow(dscale,(6-size)));
    mrem = Math.round(Math.pow(mscale,(6-size)));
  }
  let m = mrem*mroot, t=mrem*droot, d=drem*droot;
  return `desktop ${d} / tablet ${t} px /mobile ${m}px`;
}


export const Typescale= () => {
  return (
    <div className="font-sans">
      <hr/>
      <p className="type-preset-8 pt-md ">{`Header 1 ${fontHelper(1)} - preset 1`}</p>
      <p className="type-preset-1 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Header 2  / preset 2</p>
      <p className="type-preset-2 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Header 3  / preset 3</p>
      <p className="type-preset-3 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Header 4  / preset 4</p>
      <p className="type-preset-4 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Header 5  / preset 5</p>
      <p className="type-preset-5 font-bold">The quick brown fox ...</p>
      <hr/><br/>
      <p className="type-preset-8 pt-md">Large Body  / preset 5 </p>
      <p className="type-preset-5">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md">Body / preset 6</p>
      <p className="type-preset-6">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md">Body Bold / preset 6</p>
      <p className="type-preset-6 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md">Small / preset 7</p>
      <p className="type-preset-7">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md">Small bold / preset 7</p>
      <p className="type-preset-7 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 ">Extra small / preset 8 </p>
      <p className="type-preset-8">The quick brown fox ...</p>
      <br/>
    </div>
  );
};

export const TextSize = () => {
  return (
    <div className="font-sans">
       <p className="type-preset-8 pt-md ">Preset 1</p>
      <p className="type-preset-1 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 2</p>
      <p className="type-preset-2 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 3</p>
      <p className="type-preset-3 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 4</p>
      <p className="type-preset-4 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 5</p>
      <p className="type-preset-5 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 6</p>
      <p className="type-preset-6 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 7</p>
      <p className="type-preset-7 font-bold">The quick brown fox ...</p>
      <p className="type-preset-8 pt-md ">Preset 8</p>
      <p className="type-preset-8 font-bold">The quick brown fox ...</p>
      <br/>
    </div>
  );
};


export const FontFaces = () => {
    return (
     
        <div className="flex gap-md pb-2xl">
          <div className="font-sans type-preset-6">
            <p className="type-preset-5 font-bold">GT America</p>
            <p className="type-preset-8 pt-md">light</p>
            <p className="font-light">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">regular</p>
            <p className="">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">bold</p>
            <p className="font-bold ">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">black</p>
            <p className="font-black ">The quick brown fox ...</p>
          </div>
          <div className="font-serif type-preset-6">
            <p className="type-preset-5 font-bold">Freight Pro</p>
            <p className="type-preset-8 pt-md">light</p>
            <p className="font-light">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">regular</p>
            <p className="">The quick brown fox ...</p>
            <p className="type-preset-8 pt-md">italic</p>
            <p className="italic ">The quick brown fox ...</p>
            <br/>
          </div>
        </div>
    );
  };
