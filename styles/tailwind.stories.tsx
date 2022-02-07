
import 'tailwindcss/tailwind.css'
import './tailwind.css'


export default {
  title: 'Styles/Tailwind',
  argTypes: { onClick: { action: 'clicked' } },
}



export const TextSize = ()=>{
  return (<div>
    <p className="text-xs ">text extra small</p>
    <p className="text-xs ">The quick brown fox ...</p>
    <p className="text-xs pt-lg">text small</p>
    <p className="text-sm ">The quick brown fox ...</p>
    <p className="text-xs pt-lg">text base</p>
    <p className="text-base ">The quick brown fox ...</p>
    <p className="text-xs pt-lg">text large</p>
    <p className="text-lg ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text xl</p>
    <p className="text-xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 2xl</p>
    <p className="text-2xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 3xl</p>
    <p className="text-3xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 4xl</p>
    <p className="text-4xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 5xl</p>
    <p className="text-5xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 6xl</p>
    <p className="text-6xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 7xl</p>
    <p className="text-7xl ">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 8xl</p>
    <p className="text-8xl">The quick brown fox ...</p>
    <p className="text-xs pt-lg ">text 9xl</p>
    <p className="text-9xl ">The quick brown fox ...</p>
</div>);
}




export const Sizing = ()=>{
    return (<div>
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

    </div>);
}


export const Color = ()=>{
    return (<div>
    
<ul className="space-y-2 p-10">
  <li>
  <ul>bg-red</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-red-50"></li>
      <li className="bg-red-100"></li>
      <li className="bg-red-200"></li>
      <li className="bg-red-300"></li>
      <li className="bg-red-400"></li>
      <li className="bg-red-500"></li>
      <li className="bg-red-600"></li>
      <li className="bg-red-700"></li>
      <li className="bg-red-800"></li>
      <li className="bg-red-900"></li>
    </ul>
  </li>
  <li>
  <ul>bg-yellow</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-yellow-50"></li>
      <li className="bg-yellow-100"></li>
      <li className="bg-yellow-200"></li>
      <li className="bg-yellow-300"></li>
      <li className="bg-yellow-400"></li>
      <li className="bg-yellow-500"></li>
      <li className="bg-yellow-600"></li>
      <li className="bg-yellow-700"></li>
      <li className="bg-yellow-800"></li>
      <li className="bg-yellow-900"></li>
    </ul>
  </li>
  <li>
  <ul>bg-sage-500</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-sage-500-50"></li>
      <li className="bg-sage-500-100"></li>
      <li className="bg-sage-500-200"></li>
      <li className="bg-sage-500-300"></li>
      <li className="bg-sage-500-400"></li>
      <li className="bg-sage-500-500"></li>
      <li className="bg-sage-500-600"></li>
      <li className="bg-sage-500-700"></li>
      <li className="bg-sage-500-800"></li>
      <li className="bg-sage-500-900"></li>
    </ul>
  </li>
  <li>
  <ul>bg-navy</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-navy-50"></li>
      <li className="bg-navy-100"></li>
      <li className="bg-navy-200"></li>
      <li className="bg-navy-300"></li>
      <li className="bg-navy-400"></li>
      <li className="bg-navy-500"></li>
      <li className="bg-navy-600"></li>
      <li className="bg-navy-700"></li>
      <li className="bg-navy-800"></li>
      <li className="bg-navy-900"></li>
    </ul>
  </li>
  <li>
   <ul>bg-purple</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-purple-50"></li>
      <li className="bg-purple-100"></li>
      <li className="bg-purple-200"></li>
      <li className="bg-purple-300"></li>
      <li className="bg-purple-400"></li>
      <li className="bg-purple-500"></li>
      <li className="bg-purple-600"></li>
      <li className="bg-sage-500"></li>
      <li className="bg-purple-800"></li>
      <li className="bg-purple-900"></li>
    </ul>
  </li>
  <li>
  <ul>bg-plum</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-plum-50"></li>
      <li className="bg-plum-100"></li>
      <li className="bg-plum-200"></li>
      <li className="bg-plum-300"></li>
      <li className="bg-plum-400"></li>
      <li className="bg-plum-500"></li>
      <li className="bg-plum-600"></li>
      <li className="bg-plum-700"></li>
      <li className="bg-plum-800"></li>
      <li className="bg-plum-900"></li>
    </ul>
  </li>
</ul>
    </div>);
}


export const Shadows = ()=>{
    return (<div>
    

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
</div>);
}





// export const Grid = () => {


//   const Box = () => (<div className="h-screen bg-red-200 ">1</div>)
  
//   return (<div className="grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 w-full">
//               {Array(12).fill(0).map((r)=>  (<Box/>))}
//           </div>);
// }
