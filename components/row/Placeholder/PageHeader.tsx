
// TODO move as much to tailwind
interface LargeHeroInterface {
    title: string;
    subtitle: string;
 
}



const PlaceholderPageHeader = ({ title, subtitle}:  LargeHeroInterface) => {


    const TitleBlock = ()=>{
        return (
        <div className="w-full mt-xl mb-4xl ml-3xl">
            <h1 className={`font-sans text-black-base lg:text-4xl text-3xl font-black`}>{title}</h1>
        </div>
        )
    }
    const SubtitleImageColorBlock = ()=>{
        return (
        <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/3 mb-xl"> 
                <p className={`font-sans  font-black text-black text-xl mr-xl max-w-2xl ml-3xl`}> {subtitle} </p>
            </div>
        </div>
      
        )
    }

  return (
    <div className="bg-gray-100 mb-md">
     <TitleBlock/>
     <SubtitleImageColorBlock/>
    </div>
  );
};
export default PlaceholderPageHeader;

