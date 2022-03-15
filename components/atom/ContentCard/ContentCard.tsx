import { ContentfulImageAsset } from "lib/post_data_models";
import CardWithImage from "./CardWithImage";



export interface ContentCardInterface {
    title:String;
    path:String;
    promoImage?: ContentfulImageAsset
}
  
const ContentCard: React.FC<ContentCardInterface> = (props) => {
  
  if(props.promoImage)return <CardWithImage {...props}/>
   return <DefaultContentCard {...props} />
 
}


const DefaultContentCard: React.FC<ContentCardInterface> = ({
  title,
  path,
  children,
}) => {
    return ( 
      <a href={`${path}`} className="block p-6 max-w-sm h-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
      <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 font-sans">{title}</h5>
      <p className=" text-base font-sans text-gray-700 dark:text-gray-400">{children}</p>
  </a>
  );
}
    
  export default ContentCard;

