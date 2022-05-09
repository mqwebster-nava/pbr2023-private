

//https://dev.to/boywithsilverwings/counting-react-children-kde
export interface ListCardInterface {
    title:String;
    items: Array<String>;
}
  
  
  const ListCard = ({ title, items}: ListCardInterface) => {
     
      return ( 
       <div className="p-md">
           <h4 className={`font-bold font-sans text-navy-dark mb-md`}>{title}</h4>
           <ul className="list-disc">
               {items.map((item)=><li key={item.length} className="font-sans type-preset-7">{item}</li>)}
           </ul>
      </div>
    );
  }
    
  export default ListCard;