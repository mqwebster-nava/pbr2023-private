// TODO move as much to tailwind
interface LargeHeroInterface {
  title: string;
  subtitle: string;
  backgroundImage?: any;
}
import Image from "next/image";

const PlaceholderPageHeader = ({
  title,
  subtitle,
  backgroundImage,
}: LargeHeroInterface) => {
  //backgroundImage

  const TitleBlock = () => {
    return (
      <div className={`pb-4xl  mb-4xl ${backgroundImage ? "text-white pt-[60vh]":"text-navy-900 pt-5xl"}`}>
        <h1 className={`font-sans  text-base font-black`}>
          {title}
        </h1>
        <h2
          className={`font-sans  lg:text-4xl text-3xl font-black mr-xl`}
        >
          {subtitle}
        </h2>
      </div>
    );
  };

  return (
    <div className={` min-h-[100vh] bg-gray-100 `}>
      <div className="responsive-container py-2xl relative z-10">
        <TitleBlock />
      </div> 
      {backgroundImage && (
      
       <Image 
       className="brightness-50 blur-sm"
        src={backgroundImage.url} 
        layout="fill"
        objectFit="cover"></Image>
        
      )}
    </div>
  );
};
export default PlaceholderPageHeader;
