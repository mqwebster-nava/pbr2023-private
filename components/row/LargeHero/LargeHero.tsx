
import Image from 'next/image'

import illustration from 'public/images/careers-illustration.png'


// TODO move as much to tailwind
interface LargeHeroInterface {
  title: string;
}

const LargeHero = ({ title }:  LargeHeroInterface) => {

    const TitleImageBlock = ()=>{
        return (
        <div className="lg:w-1/2 w-full">
            <h1 className="text-purple-base sm:text-8xl text-6xl font-black my-xl ml-xl">{title}</h1>
            <div className="w-full flex"> 
            <div className="w-1/2">
                <p className="font-serif ml-xl mr-xl max-w-2xl">
                Come help us build the services of a better future for millions of people.
                </p>
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
            <div className="w-1/2 sm:w-1/2 h-full bg-purple-dark p-xl">
                <h3 className="text-white">Join a thoughtful, mission-oriented team</h3>
                <p className="mt-md text-white text-sm sm:text-base">
                Nava positively transforms the technology that helps millions of people access public services. We are a professional services company that works alongside our government clients to help them better serve their communities.
                </p>
            </div>
            <div className=" w-1/2 sm:w-1/2 min-h-full bg-purple-base"></div>
        </div>);

    }
    const ContentBlock = () =>{
        return (
        <div className="w-full flex my-xl">
            <div className="w-1/2 flex justify-center sm:justify-end">
    
                <h4 className=" w-full sm:w-1/2 font-bold text-lg pl-xl">Build services that impact millions</h4>
            </div>
            <p className="w-1/2 pl-lg sm:pl-xl pr-lg text-sm sm:text-base"> At Nava, we believe that government can efficiently respond to people's needs. When everyday interactions with public services work, trust in government can be rebuilt. We’re dedicated to stewarding public programs that benefit vulnerable communities. Our approach rigorously centers this enormous population’s needs. The stakes are extremely high, and we take that seriously.</p>
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

