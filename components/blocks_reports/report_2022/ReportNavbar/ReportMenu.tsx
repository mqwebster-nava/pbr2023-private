// TODO Paddign on menu should match TOC
import SlideDown from "react-slidedown";
import styles from "../../../wrapper/Navbar/MobileNav/mobilenav.module.css";
import { LinkListItem } from "components/blocks_reports/report_2022/Atoms/LinkListItem";
import { dividerColor } from "components/blocks_reports/report_2021/_utils";
/*
TODO navbar spacing
*/

const ReportMenu = ({ contentBlocks, activeSection, onClick = () => {} }) => {
  return (
    <section className={`w-full h-[100vh] bg-white`}>
      <div className="responsive-container w-full flex flex-row gap-8 pt-12">
        {contentBlocks
          .filter(
            (entry) => entry.__typename === "ReportIllustrationOverlaySubsection"
          )
          .map((section, i) => {
            const color = section.colorTheme ?? "purple";
            const bg = `bg-${color}-50`
            const textColor = `${color}-600`;
            console.log(color)
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
                stories={section.items.filter((story)=>story.hideStory!==true)}
                onClick={onClick}
                activeSection={activeSection}
              />
            );
          })}
        <ReportMenuCol
          title={"Conclusion"}
          anchor={"reportConclusion"}
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
  colorTheme=null
}) => {


  const simpleRow = () => {
   
    return (
      <div className={''}>
        <a
          className={`hidden ${
            stories !== null ? "md:grid" : "md:block h-full"
          } text-${textColor} gap-lg py-lg group `}
          onClick={onClick}
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          <h2
            className={`type-preset-5 ${fontStyle} text-${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2`}
          >
            {title}
          </h2>
        </a>
        <a
          href={`#${anchor}`}
          onClick={onClick}
          className="responsive-container group md:hidden block pt-md pb-3xl"
        >
          <h2
            className={`${fontStyle} type-preset-3 group-hover:underline decoration-1 group-hover:underline-offset-2`}
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
    <div className={``}>
      <div
        className={`w-full grid grid-cols-1 grid-rows-2 bg-navy-50 text-${textColor}`}
      >
        <a
          onClick={onClick}
          className={`block py-lg group bg-sage-50`}
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          <h2
            className={`type-preset-5 ${fontStyle} text-${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2 pt-sm`}
          >
            Envisioning {title}
          </h2>
        </a>

        <ul
          className={`pt-lg pb-xl`}
        >
            <p className="type-preset-6 font-serif font-normal tracking-[0.015em] pb-sm">
              Stories
            </p>
          {stories.filter((story)=>story.hideStory!==true).map((story) => {
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
                isBolded={`#${activeSection}`==anch2}
              >
                {title}
              </LinkListItem>
            );
          })}
        </ul>
      </div>

      <details
        className={` md:hidden block responsive-container ${styles.details} `}
      >
        <summary
          className={` relative  text-${textColor}  pr-sm   cursor-pointer`}
        >
          <div className="flex flex-row justify-between items-center pt-md pb-3xl">
            <div>
              {themeNum && (
                <p className="type-preset-6 font-serif font-light">
                  Theme {themeNum}
                </p>
              )}
              <h3
                className={`${fontStyle} text-${textColor} pr-sm type-preset-3`}
              >
                {title}
              </h3>
            </div>

            <div className={`chevron`}>
              <svg
                width="24"
                height="12"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 1L10 10L1 1"
                  stroke={textColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </summary>
        <SlideDown className={`${styles.mobileSlideDown} pb-lg`}>
          <ul className={` divide-y-[1px] ${dividerColor(colorTheme)}`}>
            <LinkListItem
              href={`#${anchor}`}
              variant={"default"}
              hoverStyle={"underlined"}
              ariaLabel={`Theme ${themeNum}, Section ${title} Introduction`}
              onClick={onClick}
              color={textColor}
            >
              Introduction
            </LinkListItem>

            {stories &&
              stories.filter((story)=>story.hideStory!==true).map((story) => {
                const anch2 = `#${anchor}--${story.anchor}`;
                const title = story.title;
                return (
                  <LinkListItem
                    key={`${anch2}-story-report-menu`}
                    href={anch2}
                    variant={"default"}
                    hoverStyle={"underlined"}
                    ariaLabel={`Theme ${themeNum}, Story ${title}`}
                    onClick={onClick}
                    color={textColor}
                  >
                    {title}
                  </LinkListItem>
                );
              })}
          </ul>
        </SlideDown>
      </details>
    </div>
  );
};
