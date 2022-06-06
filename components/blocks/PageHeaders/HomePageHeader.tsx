import { PageHeaderInterface } from "./PageHeader";
import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import { Button } from "components/atom";

const header = 
  {
    bg: "bg-plum-900",
    illBg:"bg-plum-50",
    pattern: "/images/HomeTerrain1.svg",
    pattern2:"/images/Home-Terrain-2.svg",
    illustrations: [
      "https://images.ctfassets.net/t2ekr6eg3fr3/1ciib588729zyZc31EPBGG/84a9b9fc268898ad2522faa82d2dad23/home_plum_il2.png",
      "https://images.ctfassets.net/t2ekr6eg3fr3/5U6xYalP1d57oGGP2ntsiq/099b83795740b85e04f065eba7b4f7a3/home_plum_il1.png",
      "https://images.ctfassets.net/t2ekr6eg3fr3/6z2ffB942KoxRjoVvKtTLU/5d94d27f379d041b087a7a7ff2b37158/home_plum_il4.png",
      "https://images.ctfassets.net/t2ekr6eg3fr3/35fBvEBsC6ajPKq8HldU2x/fe67befe37a9dc7d31be576035342614/home_plum_il3.png",
    ],
  }
;

const HomePageHeader = ({ id, title }: PageHeaderInterface) => {

  return (
    <header key={id}>
      <div className={`${header.bg}`}>
        <div className={`responsive-container relative z-30  `}>
          <div className="w-full sm:w-2/3 md:w-3/5 lg:w-3/5 ml-auto grid grid-cols-3">
            <img
              className="object-cover w-full col-span-3 lg:col-span-2"
              src={header.pattern}
              alt={""}
              height="300"
              width="300"
            ></img>
            <img
              className="object-cover w-full col-span-1 hidden lg:block"
              src={header.pattern2}
              alt={""}
              height="300"
              width="150"
            ></img>
            
            
          </div>
          <div
            className={` absolute  z-40 top-[72px] md:top-[100px] lg:top-[128px]  h-full pr-xl md:pr-4xl 2xl:pr-0 2xl:mx-auto 2xl:max-w-screen-xl `}
          >
            <h1
              className={`animate-titleSlide font-sans type-preset-1 text-white font-black pb-md w-full lg:w-3/4`}
            >
              {title}
            </h1>
            <div className="animate-titleButton">
              <Button variant="white" href={"/services"}>
                Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative responsive-container ">
      <div
          className={`  ${header.bg} -mt-[3px]  h-1/2 w-full absolute -z-10 top-0 left-0 lg:left-1/2 lg:w-screen lg:-translate-x-1/2`}
        ></div>
        <div className={`w-full sm:w-2/3 md:w-3/5 ml-auto aspect-[4/3] bg-plum-50 relative z-70`}>
           <CrossfadeCarousel
            interval={2000}
            transition={2000}
            images={header.illustrations}
          /> 
        </div>
     
      </div>
    </header>
  );
};

export default HomePageHeader;

// {
  //   bg: "bg-purple-900",
  //   illBg:"bg-purple-50",
  //   pattern: "/images/home-patterns-purple.png",
  //   illustrations: [
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/1T8jjNls5GR7ctPQB9Jyqx/c494abda7e335a5630723efbc753f08c/home_purple_il1.png",
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/7sGbzaIVacjiFh23zBN0rw/875c6be98884f00cac71cf6d5da0f05f/home_purple_il3.png",
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/1LVHX9xno6DNMVRSNZTqPP/69fe69045e636aceacbcfaa324595a24/home_purple_il4.png",
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/3plqrsnQRrh2dsoKogrtST/0f4cf544901c3c9855608e4100e2777d/home_purple_il2.png",
  //   ],
  // },
  // {
  //   bg: "bg-navy-900",
  //   illBg:"bg-navy-50",
  //   pattern: "/images/home navy pattern.png",
  //   illustrations: [
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/70cDqOzh6VSUiHKKf7SIjD/1440b9310d81d5f939d28be691aee1b9/home_navy_il1.png",
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/5nAtbp4Kb3EYhmWdBqdzmM/6b404195377b35c91cac6ca6e96d93d7/home_navy_il3.png",
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/NJkPKtknB62UV80gyxyuR/4f900212a73685bfa3861959a8fe95d3/home_navy_il2.png",
  //     "https://images.ctfassets.net/t2ekr6eg3fr3/2ZVfWN7RgI8IMqOGBmb9HT/17ec4b9b13d8ebf1ae99ca5e7960935f/home_navy_il4.png",
  //   ],
  // },
  // {
  //   bg: "bg-sage-900",
  //   illBg:"bg-sage-50",
  //   pattern: "/images/home-green-pattern.png",
  //   illustrations: [
  //       'https://images.ctfassets.net/t2ekr6eg3fr3/34y8V9VXnoZNT2t3d9qfhR/7c7ca98c3b094c95f8690078dae9c1fe/home_sage_il2.png',
  //       'https://images.ctfassets.net/t2ekr6eg3fr3/oUamgScZg6Z96MP7KhLjZ/eec94f2c0896ef5b58ddd2111f955832/home_sage_il4.png',
  //       'https://images.ctfassets.net/t2ekr6eg3fr3/nKOGFVtPm0MJhWEOjGAd6/69a812f1f672d4b999ac51dfefd09325/home_sage_il1.png',
  //       'https://images.ctfassets.net/t2ekr6eg3fr3/20uK2R5w8sXEVILo4OakNr/d39690c8a9389be4c7434b59ffc9ddb9/home_sage_il3.png'
  //   ],
  // },