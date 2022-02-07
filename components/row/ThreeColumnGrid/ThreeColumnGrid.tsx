
import Image from "next/image";
import { Children } from "react";
//https://dev.to/boywithsilverwings/counting-react-children-kde
export interface ThreeColumnGridInterface {
    hasDividers?:boolean;
}
  
  
  const ThreeColumnGrid: React.FC<ThreeColumnGridInterface> = ({ hasDividers, children}) => {
     
     const childrenArray = Children.toArray(children);
     const count = childrenArray.length;
     console.log(count);
      return ( 
       <div className="mx-3xl my-2xl">
       <div className={`w-full flex md:flex-row flex-col`}>
            <div className="w-full md:w-1/3"> {childrenArray[0]} </div>
            <div className="w-full md:w-1/3"> {childrenArray[1]} </div>
            <div className="w-full md:w-1/3"> {childrenArray[2]} </div>
        </div> 
        
      </div>
        );
  }
    
  export default ThreeColumnGrid;