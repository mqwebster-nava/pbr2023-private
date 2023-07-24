import { useEffect, } from "react";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHero2022 = ({}: PageHeaderInterface) => {

  return (
    <header
      className={`w-full lg:h-[125vh] h-[110vh] mb-0 lg:mb-[160px]`}
      id="reportHeader"
    >
      <div className="responsive-container pt-8">
        <span className=" text-7xl font-sans font-black spacing-y-sm">Envisioning...</span>
      </div>
    </header>
  );
};

export default ReportHero2022;
