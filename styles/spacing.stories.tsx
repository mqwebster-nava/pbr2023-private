import "tailwindcss/tailwind.css";
import "./tailwind.css";

export default {
  title: "Styles/Spacing",
  argTypes: { onClick: { action: "clicked" } },
};


export const Sizing = () => {
  return (
    <div className="flex flex-wrap gap-8">
     
      <div>
          <p>padding small - 8px </p>
          <div className="  w-64  bg-gray-100 p-sm border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
        <div>
          <p>padding medium - 12px </p>
          <div className="  w-64  bg-gray-100 p-md border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
        <div>
          <p>padding large - 16px </p>
          <div className="  w-64  bg-gray-100 p-lg border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
        <div>
          <p>padding x-large - 24px </p>
          <div className="  w-64  bg-gray-100 p-xl border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
        <div>
          <p>padding 2x-large - 32px </p>
          <div className="  w-64  bg-gray-100 p-2xl border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
        <div>
          <p>padding 3x-large - 48px </p>
          <div className="  w-64  bg-gray-100 p-3xl border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
        <div>
          <p>padding 4x-large - 72px </p>
          <div className="  w-64  bg-gray-100 p-4xl border-black border-2">
            <div className="w-full h-full bg-white">
            Join Nava and work alongside our government clients to improve how people apply for benefits, navigate their healthcare, and much more. 
            </div>
          </div>
        </div>
      
    </div>
  );
};




export const Grid = () => {

  const Box = () => (<div className="h-screen bg-red-200 ">1</div>)

  return (<div className="responsive-container grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 w-full">
              {Array(12).fill(0).map((r)=>  (<Box/>))}
          </div>);
}
