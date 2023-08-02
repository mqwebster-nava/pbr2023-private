import { useEffect } from "react";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHero2022 = (
  { openStory, setOpenStory },
  {}: PageHeaderInterface
) => {
  return (
    <header className={`w-full`} id="reportHeader">
      <div className="responsive-container pt-8">
        <span className=" text-7xl font-sans font-black spacing-y-sm">
          Envisioning...
        </span>
      </div>
    </header>
  );
};

export default ReportHero2022;
