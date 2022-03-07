


export interface ContentCardInterface {
    title:String;
    path:String;
}
  
const ContentCard: React.FC<ContentCardInterface> = ({
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

