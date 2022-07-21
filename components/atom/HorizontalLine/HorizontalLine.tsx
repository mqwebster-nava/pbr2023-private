

type HorizontalLineVariant  = "dark" | "light";


export interface HorizontalLineInterface {
   variant?:HorizontalLineVariant
   // if line is decorative(not semantic) can hide it from voice over so it doesn't get announces
   hideFromVoiceOver?: boolean; 
 }

const HorizontalLine=({variant= "dark", hideFromVoiceOver=false}:HorizontalLineInterface )=> 
(<hr className={`h-[2px] ${variant=="dark"?"bg-gray-700": "bg-gray-300"}`} aria-hidden={hideFromVoiceOver} />)


export default HorizontalLine;