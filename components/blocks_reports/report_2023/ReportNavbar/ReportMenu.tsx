import classNames from "classnames";
import SlideDown from "react-slidedown";
import styles from "../../../wrapper/Navbar/MobileNav/mobilenav.module.css";
import { LinkListItem } from "components/blocks_reports/report_2023/Atoms/LinkListItem";
/*
TODO use active story and active section setters on list item click instead of a tag href
*/

const ReportMenu = ({ contentBlocks, activeSection, onClick }) => {
  return (
    <section className={`w-full`}>
      <div className="responsive-container grid grid-cols-6 gap-x-2.5 gap-y-8 md:grid-cols-12 md:gap-8">
        {contentBlocks
          .filter(
            (entry) =>
              entry.__typename === "ReportIllustrationOverlaySubsection"
          )
          .map((section, i) => {
            const color = section.colorTheme ?? "purple";
            const bg = `bg-${color}-50`;
            const textColor = classNames({
              "text-gold-900": section.colorTheme == "gold",
              "text-plum-500": section.colorTheme == "plum",
              "text-sage-600": section.colorTheme == "sage",
              "text-purple-600": section.colorTheme == "purple",
              "text-navy-600": section.colorTheme == "navy",
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
      <div className={"col-span-2"}>
        <a
          className={`text-${textColor} gap-lg py-lg group `}
          onClick={onClick}
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          <h2
            className={`type-preset-6 ${fontStyle} text-${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2`}
          >
            {title}
          </h2>
        </a>
      </div>
    );
  };

  return stories == null ? (
    simpleRow()
  ) : (
    <div className={`col-span-2 row-span-full`}>
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
            className={`type-preset-6 min-h-[100px] ${fontStyle} ${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2`}
            data-refid={`${anchor}`}
          >
            Envisioning {title}
          </h2>
        </a>

        <ul className={`row-span-3`}>
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
