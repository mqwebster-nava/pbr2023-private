import AnchorLink from "components/templates/PostTemplate/AnchorLink";
import { icolor } from "utils/theme";
const SideNavComponent = ({h2Sections, activeSection}) => {

 
  return (
    <div className="mt-md  p-lg sticky top-48 border-2 w-fit hidden md:block">
      <h3 className="font-sans">On This Page</h3>
      {h2Sections.map((section) => {
        let header = section.title;
        let isActive = activeSection === header;
        return (
          <p className={`font-sans text-sage-dark hover:text-sage-base ${isActive&&"font-bold"}`}>
            <AnchorLink href={`#${header}`}>{header}</AnchorLink>
          </p>
        );
      })}
    </div>
  );
};

export default SideNavComponent;
