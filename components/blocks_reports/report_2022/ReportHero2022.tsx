import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHero2022 = ({activeSection, setActiveSection, setActiveStory}, {}: PageHeaderInterface) => {
  const router = useRouter();

  return (
    <header
      className={`w-full bg-white text-black`}
      id="reportHeader"
    >
      <div
        className={`responsive-container w-full max-h-32 flex flex-row justify-between pt-8 pb-4 relative`}
      >
        <div className="hover:cursor-pointer" onClick={() => {
          setActiveSection(null);
          setActiveStory(null);
          router.push('/public-benefit-reports/2022')
          
        }}>
          <span className=" transition-all duration-500 text-7xl font-sans font-black spacing-y-sm">
          Envisioning<span className={`transition-all duration-1000 ${activeSection ? `opacity-0` : `opacity-100`}`}>...</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default ReportHero2022;
