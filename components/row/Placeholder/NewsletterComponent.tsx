

import { Button } from "components/atom/Button/Button";


  
const Newsletter = () => {
      return ( 
       <div className="px-3xl py-2xl bg-gray-300 font-sans">
       <div className={`w-full `}>
            <h3 className="font-sans text-lg">Get The Newsletter </h3> 
             <p className={`font-sans pt-lg text-base text-grey-base mb-md`}>Find out about open roles, new partnerships, and news from the broader civic tech community.</p>
            <div className="my-lg text-grey-base">
             <p>email</p> 
             <input type="text"></input><br/>
             </div>
             <Button href={null} >Subscribe</Button>
            </div>
        </div> 
        );
  }
    
  export default Newsletter;