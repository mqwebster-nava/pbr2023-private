import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import classNames from "classnames";

const SideNavComponent = ({h2Sections, activeSection}) => {

  return (
    <div className="mt-md type-preset-7  sticky top-48 w-full max-w-[240px]  hidden md:block ">
      <h3 className="font-sans font-bold pb-sm">On this page</h3>
      <div className="border-l-2 border-gray-200">

     
      {h2Sections.map((section) => {
        let header = section.title;
        let isActive = activeSection === header;
        const style = classNames({
          "text-gray-900 border-l-4 border-sage-700 -ml-[2px]":isActive,
          "ml-[2px] text-gray-600":!isActive
        });
        return (
          <p key={header} className={`font-sans  pl-lg my-md hover:text-sage-base ${style}`}>
            <AnchorLink href={`#${header}`}>{header}</AnchorLink>
          </p>
        );
      })}
       </div>
    </div>
  );
};

export default SideNavComponent;
