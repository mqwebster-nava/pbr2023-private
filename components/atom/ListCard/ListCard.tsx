

//https://dev.to/boywithsilverwings/counting-react-children-kde
export interface ListCardInterface {
    title:String;
    items: Array<String>;
    colorTheme: String;
}
  
  
  const ListCard = ({ title, colorTheme, items}: ListCardInterface) => {
     
      return ( 
       <div className="p-md">
           <h4 className={`font-bold font-sans text-${colorTheme}-dark mb-md`}>{title}</h4>
           <ul className="list-disc">
               {items.map((item)=><li className="font-sans text-sm">{item}</li>)}
           </ul>
      </div>
    );
  }
    
  export default ListCard;