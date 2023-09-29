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
        className={`responsive-container w-full max-h-32 flex flex-row justify-between pt-8 pb-2 md:pt-8 md:pb-4 relative font-sans font-black text-3xl !leading-none tracking-[0.015em] sm:text-5xl md:text-6xl lg:text-7xl`}
      >
        <a href={`/public-benefit-reports/2023`} className={``} onClick={(e) => {
            e.preventDefault();
            setActiveSection(null);
            setActiveStory(null);
            router.push(`/public-benefit-reports/2023`);
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
