import classNames from "classnames";
import { LinkText } from "components/atom/LinkText/LinkText";
import { slugify } from "utils/utils";

const SideNavComponent = ({h2Sections, activeSection}) => {

  return (
    <div className="mt-md type-preset-7  sticky top-48 w-full max-w-[240px]  hidden md:block ">
      <h3 className="font-sans font-bold pb-sm">On this page</h3>
      <ul className="border-l-2 border-gray-200">

     
      {h2Sections.map((section) => {
        let header = section.title;
        let isActive = activeSection === header;
        const style = classNames({
          "border-l-4 border-sage-700 -ml-[2px]":isActive,
          "ml-[2px]":!isActive
        });
        return (
          <li key={header} className={`font-sans  pl-lg my-md  ${style}`}>
            <LinkText href={`#${slugify(header)}`} variant={"default"} color={isActive?"black":"gray"}>{header}</LinkText>
          </li>
        );
      })}
       </ul>
    </div>
  );
};

export default SideNavComponent;
