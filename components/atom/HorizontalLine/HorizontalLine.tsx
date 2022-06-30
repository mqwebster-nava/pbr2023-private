

type HorizontalLineVariant  = "dark" | "light";


export interface HorizontalLineInterface {
   variant?:HorizontalLineVariant
 }

const HorizontalLine=({variant= "dark"}:HorizontalLineInterface )=> 
(<hr className={`h-[2px] ${variant=="dark"?"bg-gray-700": "bg-gray-300"}`} />)


export default HorizontalLine;