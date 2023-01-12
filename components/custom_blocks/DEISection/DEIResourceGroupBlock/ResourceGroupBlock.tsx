import brandDirection1 from "public/images/brand-patterns/Nava-Brand-Pattern-Direction1-Heavy-White.svg";
import brandDirection2 from "public/images/brand-patterns/Nava-Brand-Pattern-Direction2-Light-White.svg";
import brandDirection3 from "public/images/brand-patterns/Nava-Brand-Pattern-Direction3-Medium-White.svg";
import brandTerrain1 from "public/images/brand-patterns/Nava-Brand-Pattern-Terrain1-Heavy-White.svg";
import brandTerrain2 from "public/images/brand-patterns/Nava-Brand-Pattern-Terrain2-Light-White.svg";
import brandTerrain3 from "public/images/brand-patterns/Nava-Brand-Pattern-Terrain3-Medium-White.svg";


import Image from "next/image";
/*
TODO have it only do gradient til the pattern then have the pattern be the last of the gradient

-- Have the patterns be different  - random terrain / random directional
*/

export interface ResourceGroupBlockInterface {
  title: string;
  description: string;
}

// TODO make sure columns ahave the right spacing
const color = {
  earthtones: {
    title: "text-dei-brown-base",
    bg: "bg-gradient-to-r from-dei-brown-dark via-dei-brown-light to-dei-brown-lightest",
    endBg: "bg-dei-brown-lightest",
    pattern1: brandDirection1,
    pattern2: brandTerrain1,

  },
  "Gender equity": {
    title: "text-dei-green-base",
    bg: "bg-gradient-to-r from-dei-green-base to-dei-green-base",
    endBg: "bg-dei-green-base",
    pattern1: brandDirection2,
    pattern2: brandTerrain2,
  },
  Juntos: {
    title: "text-dei-pink-base",
    bg: "bg-gradient-to-r from-dei-blue-lightest via-dei-pink-light to-dei-green-light",
    endBg: "bg-dei-green-light",
    pattern1: brandDirection3,
    pattern2: brandTerrain3,
  },
  Kaleidoscope: {
    title: "text-dei-blue-dark",
    bg: "rainbow-gradient",
    endBg: "bg-dei-rainbow-end",
    pattern1: brandDirection1,
    pattern2: brandTerrain1,
  },
};


export const ResourceGroupBlock: React.FC<ResourceGroupBlockInterface> = ({
  title,
  description,
}) => {
  const background = color[title] ? color[title].bg : "";
  const endBg = color[title] ? color[title].endBg : "";
  const textColor = color[title] ? color[title].title : "";
  const brandDirection = color[title] ? color[title].pattern1 : brandDirection1;
  const brandTerrain = color[title] ? color[title].pattern2 : brandTerrain1;

  return (
    <div className=" flex flex-col items-stretch ">

      <div className={`h-[72px] ${endBg} flex`} >
     <div className={`h-[72px] ${background} grow`}>

     </div>
      <div className="flex items-stretch h-full justify-end">
        <div className={`max-h-4xl h-full text-[0px]`}>
          <Image
            src={brandDirection}
            className="object-cover "
            height={72}
            width={72}
            alt=""
          />
        </div>
        <div className={` max-h-4xl h-full text-[0px]`}>
          <Image
            src={brandTerrain}
            className="object-cover"
            height={72}
            width={72}
            alt=""
          />
        </div>
      </div>
      </div>
      <div className="flex-grow flex flex-col items-stretch bg-white py-xl px-xl ">
        <h3 className={`font-bold type-preset-5 ${textColor}`}>{title}</h3>
        <p className="py-md type-preset-6">{description}</p>
      </div>
    </div>
  );
};



const Pattern = () => {
  return (<svg 
  width="401" height="401" viewBox="0 0 401 401" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_573_10495)">
  <path d="M-343.837 367.206L367.206 -343.837" stroke="white" strokeWidth="2.00196"/>
  <path d="M-332.042 379.001L379.001 -332.042" stroke="white" strokeWidth="2.00196"/>
  <path d="M-320.305 390.794L390.794 -320.305" stroke="white" strokeWidth="2.00196"/>
  <path d="M-308.51 402.589L402.589 -308.51" stroke="white" strokeWidth="2.00196"/>
  <path d="M-296.717 414.326L414.326 -296.717" stroke="white" strokeWidth="2.00196"/>
  <path d="M-284.922 426.121L426.121 -284.922" stroke="white" strokeWidth="2.00196"/>
  <path d="M-273.184 437.915L437.915 -273.184" stroke="white" strokeWidth="2.00196"/>
  <path d="M-261.389 449.71L449.71 -261.389" stroke="white" strokeWidth="2.00196"/>
  <path d="M-249.595 461.448L461.448 -249.595" stroke="white" strokeWidth="2.00196"/>
  <path d="M-237.802 473.241L473.241 -237.802" stroke="white" strokeWidth="2.00196"/>
  <path d="M-226.062 485.037L485.037 -226.062" stroke="white" strokeWidth="2.00196"/>
  <path d="M-214.269 496.83L496.83 -214.269" stroke="white" strokeWidth="2.00196"/>
  <path d="M-202.474 508.625L508.625 -202.474" stroke="white" strokeWidth="2.00196"/>
  <path d="M-190.679 520.364L520.364 -190.679" stroke="white" strokeWidth="2.00196"/>
  <path d="M-178.887 532.156L532.156 -178.887" stroke="white" strokeWidth="2.00196"/>
  <path d="M-167.146 543.952L543.952 -167.146" stroke="white" strokeWidth="2.00196"/>
  <path d="M-155.354 555.745L555.745 -155.354" stroke="white" strokeWidth="2.00196"/>
  <path d="M-143.559 567.484L567.484 -143.559" stroke="white" strokeWidth="2.00196"/>
  <path d="M-131.764 579.279L579.279 -131.764" stroke="white" strokeWidth="2.00196"/>
  <path d="M-120.025 591.073L591.073 -120.025" stroke="white" strokeWidth="2.00196"/>
  <path d="M-108.231 602.867L602.867 -108.231" stroke="white" strokeWidth="2.00196"/>
  <path d="M-96.4385 614.604L614.604 -96.4385" stroke="white" strokeWidth="2.00196"/>
  <path d="M-84.6436 626.399L626.399 -84.6436" stroke="white" strokeWidth="2.00196"/>
  <path d="M-72.9053 638.193L638.193 -72.9053" stroke="white" strokeWidth="2.00196"/>
  <path d="M-61.1104 649.988L649.988 -61.1104" stroke="white" strokeWidth="2.00196"/>
  <path d="M-49.3184 661.726L661.724 -49.3164" stroke="white" strokeWidth="2.00196"/>
  <path d="M-37.5234 673.519L673.519 -37.5234" stroke="white" strokeWidth="2.00196"/>
  <path d="M-25.7852 685.313L685.313 -25.7852" stroke="white" strokeWidth="2.00196"/>
  <path d="M-13.9902 697.108L697.108 -13.9902" stroke="white" strokeWidth="2.00196"/>
  <path d="M-2.19531 708.903L708.903 -2.19531" stroke="white" strokeWidth="2.00196"/>
  <path d="M9.59961 720.642L720.642 9.59961" stroke="white" strokeWidth="2.00196"/>
  <path d="M21.3916 732.434L732.434 21.3916" stroke="white" strokeWidth="2.00196"/>
  <path d="M33.1299 744.228L744.228 33.1299" stroke="white" strokeWidth="2.00196"/>
  </g>
  <defs>
  <clipPath id="clip0_573_10495">
  <rect width="400.392" height="400.392" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  )
}
