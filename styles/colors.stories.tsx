import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Colors",
  argTypes: { onClick: { action: "clicked" } },
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


// export const Grid = () => {

//   const Box = () => (<div className="h-screen bg-red-200 ">1</div>)

//   return (<div className="grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 w-full">
//               {Array(12).fill(0).map((r)=>  (<Box/>))}
//           </div>);
// }
