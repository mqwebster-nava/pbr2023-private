import { useEffect, useState } from "react";
import classNames from "classnames";
import MarkdownComponent from "utils/MarkdownComponent";

import { LinkListItem } from "./Atoms/LinkListItem";
import ArrowDown from "./Atoms/ArrowDown";

const SectionIntro = ({ section, i }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openStyles = classNames({
    "text-gold-900": section.colorTheme == "gold",
    "text-plum-500": section.colorTheme == "plum",
    "text-sage-600": section.colorTheme == "sage",
    "text-purple-600": section.colorTheme == "purple",
    "text-navy-600": section.colorTheme == "navy",
  });

  const hoverStyles = !isOpen && classNames({
    "group-hover:text-gold-900": section.colorTheme == "gold",
    "group-hover:text-plum-500": section.colorTheme == "plum",
    "group-hover:text-sage-600": section.colorTheme == "sage",
    "group-hover:text-purple-600": section.colorTheme == "purple",
    "group-hover:text-navy-600": section.colorTheme == "navy",
  });

  const borderStyles = !isOpen && classNames({
    // "hover:border-t-2 hover:border-gold-900": section.colorTheme == "gold",
    "hover:border-t-2 hover:border-plum-500": section.colorTheme == "plum",
    "hover:border-t-2 hover:border-sage-600": section.colorTheme == "sage",
    "hover:border-t-2 hover:border-purple-600": section.colorTheme == "purple",
    "hover:border-t-2 hover:border-navy-600": section.colorTheme == "navy",
  });

  const bgStyles = classNames({
    "bg-gold-50": section.colorTheme == "gold",
    "bg-plum-50": section.colorTheme == "plum",
    "bg-sage-50": section.colorTheme == "sage",
    "bg-purple-50": section.colorTheme == "purple",
    "bg-navy-50": section.colorTheme == "navy",
  });

  return (
    <section
      id={`${section.anchor}`}
      className={`group flex flex-col gap-8 pb-8 ${
        section.anchor == "gov-services" ? "" : "border-t-2"
      } border-gray-200 ${borderStyles}`}
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="responsive-container w-full">
        <div
          className={`flex flex-row justify-between items-baseline ${isOpen ? openStyles : 'text-gray-300'} ${hoverStyles} group-hover:cursor-pointer`}
        >
          <span className="text-7xl font-sans font-black spacing-y-sm">
            {section.title}
          </span>

          <span
            className={`opacity-0 ${!isOpen && 'group-hover:opacity-100'} min-w-max font-serif text-lg`}
          >
            <div className="flex flex-row items-center gap-1">
              {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
              <ArrowDown color={section.colorTheme} size="default" />
            </div>
          </span>
        </div>
      </div>

      {isOpen &&
        <div className={`h-[100vh]`}>
          <div className={`responsive-container`}>
            <div className={`w-full font-serif text-3xl font-light ${openStyles}`}>
              <MarkdownComponent content={section.body} />
            </div>
            <ul
                  className={``}
                >
                  {section.items.filter((story)=>story.hideStory!==true).map((story) => {
                    return (
                      <LinkListItem
                      key={`sectionIntro-${story.anchor}`}
                      href={`#${section.anchor}--${story.anchor}`}
                      variant={"default"}
                      hoverStyle={"underlined"}
                      ariaLabel={`Skip to ${story.title}`}
                      color={"white"}
                    >
                      {story.title}
                    </LinkListItem>
                    );
                  })}
                </ul>
          </div>
        </div>
      }
    </section>
  );
};

export default SectionIntro;
