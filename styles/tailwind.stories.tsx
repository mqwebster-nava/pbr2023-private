
import 'tailwindcss/tailwind.css'
import './tailwind.css'


export default {
  title: 'Styles/Tailwind',
  argTypes: { onClick: { action: 'clicked' } },
}


export const Grid = () => {


    const Box = () => (<div className="h-screen bg-red-200 ">1</div>)
    
    return (<div className="grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 w-full">
                {Array(12).fill(0).map((r)=>  (<Box/>))}
            </div>);
}

export const Sizing = ()=>{
    return (<div>
    <ul className="space-y-4 p-10">
        <li>
            <ul>w-64</ul>
            <div className="w-64 h-3 bg-green-500"></div>
        </li>
        <li>
        <ul>w-56</ul>
            <div className="w-56 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-48</ul>
            <div className="w-48 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-40</ul>
            <div className="w-40 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-32</ul>
            <div className="w-32 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-24</ul>
            <div className="w-24 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-20</ul>
            <div className="w-20 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-16</ul>
            <div className="w-16 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-12</ul>
            <div className="w-12 h-3 bg-green-500"></div>
        </li>
        <li>
            <ul>w-10</ul>
            <div className="w-10 h-3 bg-green-500"></div>
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
  <ul>bg-green-500</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-green-500-50"></li>
      <li className="bg-green-500-100"></li>
      <li className="bg-green-500-200"></li>
      <li className="bg-green-500-300"></li>
      <li className="bg-green-500-400"></li>
      <li className="bg-green-500-500"></li>
      <li className="bg-green-500-600"></li>
      <li className="bg-green-500-700"></li>
      <li className="bg-green-500-800"></li>
      <li className="bg-green-500-900"></li>
    </ul>
  </li>
  <li>
  <ul>bg-blue</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-blue-50"></li>
      <li className="bg-blue-100"></li>
      <li className="bg-blue-200"></li>
      <li className="bg-blue-300"></li>
      <li className="bg-blue-400"></li>
      <li className="bg-blue-500"></li>
      <li className="bg-blue-600"></li>
      <li className="bg-blue-700"></li>
      <li className="bg-blue-800"></li>
      <li className="bg-blue-900"></li>
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
      <li className="bg-green-500"></li>
      <li className="bg-purple-800"></li>
      <li className="bg-purple-900"></li>
    </ul>
  </li>
  <li>
  <ul>bg-pink</ul>
    <ul className="grid grid-cols-10 h-7">
      <li className="bg-pink-50"></li>
      <li className="bg-pink-100"></li>
      <li className="bg-pink-200"></li>
      <li className="bg-pink-300"></li>
      <li className="bg-pink-400"></li>
      <li className="bg-pink-500"></li>
      <li className="bg-pink-600"></li>
      <li className="bg-pink-700"></li>
      <li className="bg-pink-800"></li>
      <li className="bg-pink-900"></li>
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



export const TextSize = ()=>{
  return (<div>
    <p className="text-xs ">The quick brown fox ...</p>
    <p className="text-sm ">The quick brown fox ...</p>
    <p className="text-base ">The quick brown fox ...</p>
    <p className="text-lg ">The quick brown fox ...</p>
    <p className="text-xl ">The quick brown fox ...</p>
    <p className="text-2xl ">The quick brown fox ...</p>
    <p className="text-3xl ">The quick brown fox ...</p>
    <p className="text-4xl ">The quick brown fox ...</p>
    <p className="text-5xl ">The quick brown fox ...</p>
    <p className="text-6xl ">The quick brown fox ...</p>
    <p className="text-7xl ">The quick brown fox ...</p>
    <p className="text-8xl ">The quick brown fox ...</p>
    <p className="text-9xl ">The quick brown fox ...</p>
</div>);
}
