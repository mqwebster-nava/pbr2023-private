import { useRouter } from "next/router";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHero2023 = ({activeSection, setActiveSection, setActiveStory}, {}: PageHeaderInterface) => {
  const router = useRouter();

  return (
    <header
      className={`bg-white text-black w-full`}
      id="reportHeader"
    >
      <div
        className={`responsive-container w-full max-h-32 flex flex-row justify-between pt-8 pb-2 md:pt-8 md:pb-4 relative text-2xl md:text-7xl font-sans font-black`}
      >
        <a href={`/public-benefit-reports/2023`} className={``} onClick={(e) => {
          if (activeSection !== 'conclusion') {
            e.preventDefault();
            setActiveSection(null);
            setActiveStory(null);
            router.push(`/public-benefit-reports/2023`);
          } else {
            e.preventDefault();
          }
        }}>
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

export default ReportHero2023;
