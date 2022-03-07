
// TODO move as much to tailwind
interface LargeHeroInterface {
    title: string;
    subtitle: string;
}



const PlaceholderPageHeader = ({ title, subtitle}:  LargeHeroInterface) => {


    const TitleBlock = ()=>{
        return (
        <div className="pt-xl mb-4xl">
            <h1 className={`font-sans text-black text-base font-black`}>{title}</h1>
            <h2 className={`font-sans text-black lg:text-4xl text-3xl font-black mr-xl`}>{subtitle}</h2>
        </div>
        )
    }

  return (
    <div className="bg-gray-100 min-h-[50vh]">
      <div className="responsive-container">

    
     <TitleBlock/>
     </div>
     {/* <SubtitleImageColorBlock/> */}
    </div>
  );
};
export default PlaceholderPageHeader;

