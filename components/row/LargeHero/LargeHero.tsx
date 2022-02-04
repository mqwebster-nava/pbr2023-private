
import Image from 'next/image'

import purpleIllustration from 'public/images/careers-illustration-purple.png'
import pinkIllustration from 'public/images/careers-illustration-pink.png'
import blueIllustration from 'public/images/careers-illustration-blue.png'
import greenIllustration from 'public/images/careers-illustration-green.png'
import orangeIllustration from 'public/images/careers-illustration-orange.png'

// TODO move as much to tailwind
export interface LargeHeroInterface {
    title: string;
    subtitle: string;
    colorTheme: string;
    ctaTitle:string;
    ctaBody:string;
    ctaButtonText:string;
    ctaButtonPath:string;
}



const LargeHero = ({ title, subtitle, colorTheme, ctaBody, ctaButtonPath, ctaButtonText, ctaTitle }:  LargeHeroInterface) => {
    const illustrations = {
        'purple': purpleIllustration,
        'pink': pinkIllustration,
        'blue': blueIllustration,
        'green': greenIllustration,
        'orange': orangeIllustration,
    }
    const illustration = illustrations[colorTheme];

    const TitleBlock = ()=>{
        return (
        <div className="w-full mt-xl mb-4xl">
            <h1 className={`font-sans text-${colorTheme}-base sm:text-8xl text-6xl font-black`}>{title}</h1>
        </div>
        )
    }
    const SubtitleImageColorBlock = ()=>{
        return (
        <div className="w-full flex">
            <div className="w-full md:w-1/3 "> 
                <p className={`font-serif  text-${colorTheme}-dark text-2xl mr-xl max-w-2xl`}> {subtitle} </p>
            </div>

            <div className="w-1/2 md:w-1/3 flex justify-end">
                <Image className="max-w-full" src={illustration} alt="me" />
            </div>
            <div className={`w-1/2 sm:w-1/3 min-h-full bg-${colorTheme}-base`}></div>
        </div>
      
        )
    }

  return (
    <div className="ml-3xl">
     <TitleBlock/>
     <SubtitleImageColorBlock/>
    </div>
  );
};
export default LargeHero;

