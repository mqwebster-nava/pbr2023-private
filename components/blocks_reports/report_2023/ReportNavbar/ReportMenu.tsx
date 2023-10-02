import { useState } from "react";
import classNames from "classnames";
import SlideDown from "react-slidedown";
import styles from "../../../wrapper/Navbar/MobileNav/mobilenav.module.css";
import { LinkListItem } from "components/blocks_reports/report_2023/Atoms/LinkListItem";
import Arrow from "../Atoms/Arrow";
/*
TODO use active story and active section setters on list item click instead of a tag href
*/

const ReportMenu = ({ contentBlocks, activeSection, onClick }) => {
  return (
    <section className={`w-full`}>
      <DesktopMenu {...{contentBlocks, activeSection, onClick}} />
      <MobileMenu {...{contentBlocks, activeSection, onClick}} />
    </section>
  );
};

export default ReportMenu;

const ReportMenuCol = ({
  title,
  anchor,
  themeNum,
  bgColor,
  textColor,
  stories,
  fontStyle,
  onClick,
  activeSection = null,
  colorTheme = null,
}) => {
  const simpleRow = () => {
    return (
      <div className={"col-span-1 row-span-full"}>
        <a
          className={`text-${textColor} gap-lg py-lg group `}
          onClick={onClick}
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          <h2
            className={`type-preset-6 min-h-[88px] ${fontStyle} text-${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2`}
            data-refid={`${anchor}`}
          >
            {title}
          </h2>
        </a>

        <ul className={`row-span-3`}>
          <LinkListItem
            key={`/files/2023NavaPublicBenefitReport.pdf-menu`}
            href={`/files/2023NavaPublicBenefitReport.pdf`}
            variant={"default"}
            hoverStyle={"underlined"}
            color={"black"}
            isBolded={true}
          >
            Download PDF
          </LinkListItem>
        </ul>
      </div>
    );
  };

  return stories == null ? (
    simpleRow()
  ) : (
    <div className={`col-span-1 row-span-full`}>
      <div
        className={`${textColor}`}
      >
        <a
          onClick={onClick}
          className={`group`}
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          <h2
            className={`type-preset-6 min-h-[88px] ${fontStyle} ${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2`}
            data-refid={`${anchor}`}
          >
            Envisioning {title}
          </h2>
        </a>

        <ul className={`row-span-3 border-t-[1px] border-${colorTheme}-900 divide-y-[1px] divide-${colorTheme}-900`}>
          {stories
            .filter((story) => story.hideStory !== true)
            .map((story) => {
              const anch2 = `#${anchor}--${story.anchor}`;
              const title = story.title;
              return (
                <LinkListItem
                  key={`${anch2}-menu`}
                  href={anch2}
                  variant={"default"}
                  hoverStyle={"underlined"}
                  ariaLabel={`Theme ${themeNum}, Story ${title}`}
                  onClick={onClick}
                  color={textColor}
                  isBolded={`#${activeSection}` == anch2}
                >
                  {title}
                </LinkListItem>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

const DesktopMenu = ({ contentBlocks, activeSection, onClick }) => {
  return (
    <div className="responsive-container hidden lg:grid grid-cols-12 gap-8">
      <div className={`grid grid-cols-5 gap-8 col-span-full`}>
        {contentBlocks
          .filter(
            (entry) =>
              entry.__typename === "ReportIllustrationOverlaySubsection"
          )
          .map((section, i) => {
            const color = section.colorTheme ?? "purple";
            const bg = `bg-${color}-50`;
            const textColor = classNames({
              "text-gold-pbrcustomdark": section.colorTheme == "gold",
              "text-plum-900": section.colorTheme == "plum",
              "text-sage-900": section.colorTheme == "sage",
              "text-purple-900": section.colorTheme == "purple",
              "text-navy-900": section.colorTheme == "navy",
            });
            return (
              <ReportMenuCol
                key={section.anchor}
                title={section.title}
                anchor={section.anchor}
                themeNum={i + 1}
                bgColor={bg}
                colorTheme={color}
                textColor={textColor}
                fontStyle={"font-bold"}
                stories={section.items.filter(
                  (story) => story.hideStory !== true
                )}
                onClick={onClick}
                activeSection={activeSection}
              />
            );
          })}
        <ReportMenuCol
          title={"Conclusion"}
          anchor={"conclusion"}
          themeNum={null}
          bgColor={`bg-purple-50`}
          textColor={`purple-600`}
          fontStyle={"font-bold"}
          stories={null}
          onClick={onClick}
          activeSection={activeSection}
        />
      </div>
    </div>
  )
}

const MobileMenu = ({ contentBlocks, activeSection, onClick }) => {
  const sections = contentBlocks.filter(
    (entry) => entry.__typename === "ReportIllustrationOverlaySubsection"
  )

  return (
    <div
      className={`lg:hidden relative w-full h-[calc(100vh-50px)] md:h-[calc(100vh-80px)] flex flex-col `}
    >
      {sections.map((section, i) => {
        const [isShowingMenu, setIsShowingMenu] = useState(false);
        const toggleDropdown = () => {setIsShowingMenu(!isShowingMenu)};

        const textColor = classNames({
          "text-gold-pbrcustomdark": section.colorTheme == "gold",
          "text-plum-900": section.colorTheme == "plum",
          "text-sage-900": section.colorTheme == "sage",
          "text-purple-900": section.colorTheme == "purple",
          "text-navy-900": section.colorTheme == "navy",
        });
        const borderStyles = classNames({
          "border-gold-pbrcustomdark": section.colorTheme == "gold",
          "border-plum-900": section.colorTheme == "plum",
          "border-sage-900": section.colorTheme == "sage",
          "border-purple-900": section.colorTheme == "purple",
          "border-navy-900": section.colorTheme == "navy",
        });
        const dividerStyles = classNames({
          "divide-gold-pbrcustomdark": section.colorTheme == "gold",
          "divide-plum-900": section.colorTheme == "plum",
          "divide-sage-900": section.colorTheme == "sage",
          "divide-purple-900": section.colorTheme == "purple",
          "divide-navy-900": section.colorTheme == "navy",
        });

        return (
          <div
            key={`${section.anchor}-menu`}
            className={`w-full border-t-[1px] ${borderStyles}`}
          >
            <div className={`responsive-container`}>
              <button
                type="button"
                className={`inline-flex justify-between items-center w-full py-6 focus:outline-none focus:ring-none`}
                id="dropdown-menu-button"
                onClick={toggleDropdown}
              >
                <div
                  className={`pr-6 text-left font-sans font-bold type-preset-6 ${textColor}`}
                  data-refid={`${section.anchor}`}
                >
                  Envisioning {section.title}
                </div>

                <div className={`transition-all duration-200 ease-linear ${isShowingMenu ? `-rotate-180` : `rotate-0`}`}>
                  <Arrow color={section.colorTheme} />
                </div>
              </button>
            </div>

            {isShowingMenu && (
              <SlideDown>
                <div
                  className={`relative w-full`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-menu-button"
                >
                  <ul
                    className={`w-full !leading-[1.1] border-t-[1px] ${borderStyles} divide-y-[1px] ${dividerStyles}`}
                  >
                    {section.items.filter(
                    (story) => story.hideStory !== true
                    ).map((option, index) => {
                      const anch2 = `#${section.anchor}--${option.anchor}`;

                      return (
                        <div key={`${anch2}--mobile-menu-list-items`} className={`responsive-container ${textColor}`}>
                          <LinkListItem
                            key={`${anch2}-menu`}
                            href={anch2}
                            variant={"default"}
                            hoverStyle={"underlined"}
                            ariaLabel={`Theme ${section.themeNum}, Story ${option.title}`}
                            onClick={onClick}
                            color={option.colorTheme}
                            isBolded={`#${activeSection}` == anch2}
                            font="sans"
                          >
                            {option.title}
                          </LinkListItem>
                        </div>
                      )
                    })}
                  </ul>
                </div>
              </SlideDown>
            )}
          </div>
        )
      })}

      <div
        className={`w-full border-t-[1px] border-purple-900`}
      >
        <div className={`responsive-container`}>
          <button
            type="button"
            className={`inline-flex justify-between items-center w-full py-6 focus:outline-none focus:ring-none`}
            id="dropdown-menu-button"
            onClick={onClick}
          >
            <div
              className={`pr-6 text-left font-sans font-bold type-preset-6 text-purple-900`}
              data-refid={`conclusion`}
            >
              Conclusion
            </div>
          </button>
        </div>
      </div>

      <div
        className={`relative mt-auto self-end w-full border-t-[1px] border-gray-900 bg-gray-200`}
      >
        <div className={`responsive-container`}>
          <a
            type="button"
            className={`inline-flex justify-between items-center w-full py-6 focus:outline-none focus:ring-none`}
            id="dropdown-menu-button"
            href="/files/2023NavaPublicBenefitReport.pdf"
          >
            <div
              className={`pr-6 text-left font-sans font-bold type-preset-6 text-gray-900`}
            >
              Download the report
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
