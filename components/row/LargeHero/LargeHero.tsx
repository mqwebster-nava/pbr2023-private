
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

    const TitleImageBlock = ()=>{
        return (
        <div className="lg:w-1/2 w-full">
            <h1 className={`font-sans text-${colorTheme}-base sm:text-8xl text-6xl font-black mt-xl mb-3xl ml-xl`}>{title}</h1>
            <div className="w-full flex"> 
            <div className="w-1/2">
                <p className="font-serif ml-xl mr-xl max-w-2xl"> {subtitle} </p>
            </div>
            <div className="w-1/2 flex justify-end">
                <Image className="max-w-full" src={illustration} alt="me" />
            </div>

            </div>
        </div>
        )
    }
    const RightColoredBlocks = ()=>{
        return (
        <div className="lg:w-1/2 w-full min-h-full flex">
            <div className={`w-1/2 sm:w-1/2 h-full bg-${colorTheme}-dark p-xl`}>
                <h3 className="font-sans text-white">{ctaTitle}</h3>
                <p className="font-sans mt-md text-white text-sm sm:text-base">
                {ctaBody}
                </p>
            </div>
            <div className={`w-1/2 sm:w-1/2 min-h-full bg-${colorTheme}-base`}></div>
        </div>);

    }
    const ContentBlock = () =>{
        return (
        <div className="w-full flex my-xl">
            <div className="w-1/2 flex justify-center sm:justify-end">
    
                <h4 className="font-sans w-full sm:w-1/2 font-bold text-lg pl-xl">Build services that impact millions</h4>
            </div>
            <p className="font-sans w-1/2 pl-lg sm:pl-xl pr-lg text-sm sm:text-base"> At Nava, we believe that government can efficiently respond to people's needs. When everyday interactions with public services work, trust in government can be rebuilt. We’re dedicated to stewarding public programs that benefit vulnerable communities. Our approach rigorously centers this enormous population’s needs. The stakes are extremely high, and we take that seriously.</p>
        </div>);
    }


  return (
      <div>

     
    <div className="block lg:flex w-full ">
     <TitleImageBlock/>
     <RightColoredBlocks/>
    </div>
      <ContentBlock/>
      </div>
  );
};
export default LargeHero;

