import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHero2022 = ({activeSection, setActiveSection, setActiveStory}, {}: PageHeaderInterface) => {
  const router = useRouter();

  return (
    // <header
    //   className={`${activeSection == 'conclusion' ? `opacity-0 h-0` : `opacity-100 h-[136px]`} w-full bg-white text-black transition-all origin-top-left duration-[0ms] relative`}
    //   id="reportHeader"
    // >
    <header
      className={`bg-white text-black w-full`}
      id="reportHeader"
    >
      <div
        className={`responsive-container w-full max-h-32 flex flex-row justify-between pt-8 pb-4 relative sm:text-2xl md:text-7xl font-sans font-black spacing-y-sm`}
      >
        <a href={`/public-benefit-reports/2022`} className={``} onClick={(e) => {
          if (activeSection !== 'conclusion') {
            e.preventDefault();
            setActiveSection(null);
            setActiveStory(null);
            router.push(`/public-benefit-reports/2022`);
          } else {
            e.preventDefault();
          }
          // e.preventDefault();
          // setActiveSection(null);
          // setActiveStory(null);
          // router.push(`/public-benefit-reports/2022`);
        }}>
          {/* <span className=" transition-all duration-500 text-7xl font-sans font-black spacing-y-sm">
          Envisioning<span className={`transition-all duration-1000 ${activeSection ? `opacity-0` : `opacity-100`}`}>...</span>
          </span> */}
  
          {activeSection == 'conclusion' ?
            <span className={``}>
              Conclusion
            </span> :
            (<span className=" transition-all duration-500">
              Envisioning<span className={`transition-all duration-1000 ${activeSection ? `opacity-0` : `opacity-100`}`}>...</span>
            </span>)
          }
        </a>
      </div>
    </header>
  );
};

export default ReportHero2022;
