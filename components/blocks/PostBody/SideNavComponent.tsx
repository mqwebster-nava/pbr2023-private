import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import classNames from "classnames";

const SideNavComponent = ({h2Sections, activeSection}) => {

  return (
    <div className="mt-md type-preset-7  sticky top-48 w-full max-w-[240px]  hidden md:block ">
      <h3 className="font-sans font-bold pb-sm">On this page</h3>
  
      {h2Sections.map((section) => {
        let header = section.title;
        let isActive = activeSection === header;
        const style = classNames({
          "text-sage-700 border-l-4 border-sage-700":isActive,
          "border-l-2 border-sage-50":!isActive
        });
        return (
          <p className={`font-sans text-sage-dark  pl-sm py-sm hover:text-sage-base ${style}`}>
            <AnchorLink href={`#${header}`}>{header}</AnchorLink>
          </p>
        );
      })}
    </div>
  );
};

export default SideNavComponent;
