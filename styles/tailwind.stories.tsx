import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Tailwind",
  argTypes: { onClick: { action: "clicked" } },
};

// export const Sizing = () => {
//   return (
//     <div>
//       <ul className="space-y-4 p-10">
//         <li>
//           <ul>w-64</ul>
//           <div className="w-64 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-56</ul>
//           <div className="w-56 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-48</ul>
//           <div className="w-48 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-40</ul>
//           <div className="w-40 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-32</ul>
//           <div className="w-32 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-24</ul>
//           <div className="w-24 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-20</ul>
//           <div className="w-20 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-16</ul>
//           <div className="w-16 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-12</ul>
//           <div className="w-12 h-3 bg-sage-500"></div>
//         </li>
//         <li>
//           <ul>w-10</ul>
//           <div className="w-10 h-3 bg-sage-500"></div>
//         </li>
//       </ul>
//     </div>
//   );
// };



// export const Shadows = () => {
//   return (
//     <div>
//       <ul className="grid grid-cols-2 gap-4 p-10">
//         <li>
//           <ul>shadow-sm</ul>
//           <div className="shadow-sm bg-white rounded-lg h-20"></div>
//         </li>
//         <li>
//           <ul>shadow</ul>
//           <div className="shadow bg-white rounded-lg h-20"></div>
//         </li>
//         <li>
//           <ul>shadow-md</ul>
//           <div className="shadow-md bg-white rounded-lg h-20"></div>
//         </li>
//         <li>
//           <ul>shadow-lg</ul>
//           <div className="shadow-lg bg-white rounded-lg h-20"></div>
//         </li>
//         <li>
//           <ul>shadow-xl</ul>
//           <div className="shadow-xl bg-white rounded-lg h-20"></div>
//         </li>
//         <li>
//           <ul>shadow-2xl</ul>
//           <div className="shadow-2xl bg-white rounded-lg h-20"></div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export const Grid = () => {

//   const Box = () => (<div className="h-screen bg-red-200 ">1</div>)

//   return (<div className="grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 w-full">
//               {Array(12).fill(0).map((r)=>  (<Box/>))}
//           </div>);
// }
