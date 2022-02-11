
import Image from 'next/image'

import purpleIllustration from '../../../public/images/careers-illustration-purple.png'
import plumIllustration from '../../../public/images/careers-illustration-plum.png'
import navyIllustration from '../../../public/images/careers-illustration-navy.png'
import sageIllustration from '../../../public/images/careers-illustration-sage.png'
import goldIllustration from '../../../public/images/careers-illustration-gold.png'

// TODO move as much to tailwind
export interface LargeHeroInterface {
    title: string;
    subtitle: string;
    colorTheme: string;
    isStorybook?: boolean;
 
}



const LargeHero = ({ title, subtitle, colorTheme, isStorybook}:  LargeHeroInterface) => {

    const illustrations = {
        'purple': purpleIllustration,
        'plum': plumIllustration,
        'navy': navyIllustration,
        'sage': sageIllustration,
        'gold': goldIllustration,
    }
    if(!(colorTheme in illustrations))return (<div>ERROR</div>);
    const illustration = illustrations[colorTheme];

    const TitleBlock = ()=>{
        return (
        <div className="w-full mt-xl mb-4xl ml-3xl">
            <h1 className={`font-sans text-${colorTheme}-base lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-black`}>{title}</h1>
        </div>
        )
    }
    const SubtitleImageColorBlock = ()=>{
        return (
        <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/3 mb-xl"> 
                <p className={`font-serif  text-${colorTheme}-dark text-2xl mr-xl max-w-2xl ml-3xl`}> {subtitle} </p>
            </div>
            <div className="w-1/2 md:w-1/3 flex justify-end">
               {
                   (isStorybook)? <Image height={"300px"} width={"300px"} className="max-w-full" src={illustration} alt="me" />
                 :  <Image className="max-w-full" src={illustration} alt="me" />
               }
            </div>
            <div className={`w-1/2 md:w-1/3 min-h-full bg-${colorTheme}-base`}></div>
        </div>
      
        )
    }

  return (
    <div className="">
     <TitleBlock/>
     <SubtitleImageColorBlock/>
    </div>
  );
};
export default LargeHero;

