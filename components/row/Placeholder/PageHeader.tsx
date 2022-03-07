
// TODO move as much to tailwind
interface LargeHeroInterface {
    title: string;
    subtitle: string;
}



const PlaceholderPageHeader = ({ title, subtitle}:  LargeHeroInterface) => {


    const TitleBlock = ()=>{
        return (
        <div className="pt-xl mb-4xl ml-3xl">
            
            <h1 className={`font-sans text-black text-base font-black`}>{title}</h1>
            <h2 className={`font-sans text-black lg:text-4xl text-3xl font-black mr-xl`}>{subtitle}</h2>
      
        </div>
        )
    }

  return (
    <div className="bg-gray-100 h-[50vh]">
     <TitleBlock/>
     {/* <SubtitleImageColorBlock/> */}
    </div>
  );
};
export default PlaceholderPageHeader;

