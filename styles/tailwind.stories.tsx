import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Tailwind",
  argTypes: { onClick: { action: "clicked" } },
};

export const TextSize = () => {
  return (
    <div>
      <p className="text-xs ">text extra small</p>
      <p className="text-xs ">The quick brown fox ...</p>
      <p className="text-xs pt-md">text small</p>
      <p className="text-sm ">The quick brown fox ...</p>
      <p className="text-xs pt-md">text base</p>
      <p className="text-base ">The quick brown fox ...</p>
      <p className="text-xs pt-md">text large</p>
      <p className="text-lg ">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text xl</p>
      <p className="text-xl ">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 2xl</p>
      <p className="text-2xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 3xl</p>
      <p className="text-3xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 4xl</p>
      <p className="text-4xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 5xl</p>
      <p className="text-5xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 6xl</p>
      <p className="text-6xl ">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 7xl</p>
      <p className="text-7xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 8xl</p>
      <p className="text-8xl">The quick brown fox ...</p>
      <p className="text-xs pt-md ">text 9xl</p>
      <p className="text-9xl ">The quick brown fox ...</p>
    </div>
  );
};

export const Sizing = () => {
  return (
    <div>
      <ul className="space-y-4 p-10">
        <li>
          <ul>w-64</ul>
          <div className="w-64 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-56</ul>
          <div className="w-56 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-48</ul>
          <div className="w-48 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-40</ul>
          <div className="w-40 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-32</ul>
          <div className="w-32 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-24</ul>
          <div className="w-24 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-20</ul>
          <div className="w-20 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-16</ul>
          <div className="w-16 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-12</ul>
          <div className="w-12 h-3 bg-sage-500"></div>
        </li>
        <li>
          <ul>w-10</ul>
          <div className="w-10 h-3 bg-sage-500"></div>
        </li>
      </ul>
    </div>
  );
};

export const Color = () => {
  return (
    <div>
      <div className="space-y-2 p-10">
        <div>
          <div>Purple</div>
          <div className="h-48 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-light mr-xl text-white p-md"
            >light #9B4BB2</div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-base mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-purple-dark"
            ></div>
          </div>
        </div>
        <div>
          <ul>Plum</ul>
          <div className="h-48 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-light mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-base mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-plum-dark"
            ></div>
          </div>
        </div>
        <div>
          <ul>Gold</ul>
          <div className="h-48 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-light mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-base mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-gold-dark"
            ></div>
          </div>
        </div>
        <div>
          <ul>Navy</ul>
          <div className="h-48 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-light mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-base mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-navy-dark"
            >ffff</div>
          </div>
        </div>
        <div>
          <ul>Sage</ul>
          <div className="h-48 flex ">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-light mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-base mr-xl"
            ></div>
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-sage-dark"
            ></div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export const TextColor = () => {
  return (
    <div>
      <p className="text-purple-base">Purple</p>
      <p className="text-purple-dark">Purple</p>
      <p className="text-plum-base">Plum</p>
      <p className="text-plum-dark">Plum</p>
      <p className="text-gold-base">Gold</p>
      <p className="text-gold-dark">Gold</p>
      <p className="text-navy-base">Navy</p>
      <p className="text-navy-dark">Navy</p>
      <p className="text-sage-base">Sage</p>
      <p className="text-sage-dark">Sage</p>
    </div>
  );
};

export const Shadows = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 p-10">
        <li>
          <ul>shadow-sm</ul>
          <div className="shadow-sm bg-white rounded-lg h-20"></div>
        </li>
        <li>
          <ul>shadow</ul>
          <div className="shadow bg-white rounded-lg h-20"></div>
        </li>
        <li>
          <ul>shadow-md</ul>
          <div className="shadow-md bg-white rounded-lg h-20"></div>
        </li>
        <li>
          <ul>shadow-lg</ul>
          <div className="shadow-lg bg-white rounded-lg h-20"></div>
        </li>
        <li>
          <ul>shadow-xl</ul>
          <div className="shadow-xl bg-white rounded-lg h-20"></div>
        </li>
        <li>
          <ul>shadow-2xl</ul>
          <div className="shadow-2xl bg-white rounded-lg h-20"></div>
        </li>
      </ul>
    </div>
  );
};

// export const Grid = () => {

//   const Box = () => (<div className="h-screen bg-red-200 ">1</div>)

//   return (<div className="grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 w-full">
//               {Array(12).fill(0).map((r)=>  (<Box/>))}
//           </div>);
// }
