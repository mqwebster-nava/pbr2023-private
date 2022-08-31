import { LinkText } from "components/atom";
import MarkdownComponent from "utils/MarkdownComponent";

const ReportConclusion = ({  }) => {
    return (
        <section className="w-full h-screen bg-gold-700">
        <div className="responsive-container py-2xl lg:pl-[108px]" >
          <div className="font-serif text-black type-preset-1 pt-3xl">
            Conclusion
         </div>
         <p className="type-preset-5 font-sans text-black pt-[70px] max-w-screen-md">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
         <div className="flex pt-[70px]">
          <div className="w-1/3">
            <p className="type-preset-5 font-bold">Where next?</p>
          </div>
          {/* TODO add rules between them & prototype */}
          <div className="w-2/3 flex flex-col gap-sm pt-xs font-serif divide-y divide-black">
          <LinkText href="/public-benefit-reports/2020" variant={"default"} color="black">Download PDF</LinkText>
            <LinkText href="/careers" variant={"default"} color="black">Careers</LinkText>
            <LinkText href="/case-studies" variant={"default"} color="black"> Case Studies</LinkText>
            <LinkText href="/public-benefit-reports/2020" variant={"default"} color="black">2020 Public Benefit Report</LinkText>
          </div>
         </div>
          </div>
        </section>
    );
  };

  
  export default ReportConclusion;