// TODO Paddign on menu should match TOC

import { LinkText } from "components/atom";
import SlideDown from "react-slidedown";
import styles from "../../../wrapper/Navbar/MobileNav/mobilenav.module.css";
import { LinkListItem } from "../Atoms/LinkListItem";
/*
TODO navbar spacing
*/

const ReportMenu = ({ contentBlocks, activeSection, onClick = () => {} }) => {
  // Have the bottom rule not have a hr
  return (
    <section className={` w-full flex flex-col h-[calc(100vh_-_70px)]`}>
      <ReportMenuRow
        title={"Letter from leadership"}
        anchor={"intro"}
        themeNum={null}
        bgColor={`bg-purple-50`}
        textColor={"purple-900"}
        fontStyle={"font-serif"}
        stories={null}
        onClick={onClick}
        activeSection={activeSection}
      />
      {contentBlocks
        .filter(
          (entry) => entry.__typename === "ReportIllustrationOverlaySubsection"
        )
        .map((section, i) => {
          const color = section.colorTheme ?? "purple";
          const bg =
            section.colorTheme === "gold"
              ? `bg-${color}-dark`
              : `bg-${color}-900`;
          const textColor = "white"; //section.colorTheme === "gold" ? "black" : "white";
          return (
            <ReportMenuRow
              key={section.anchor}
              title={section.title}
              anchor={section.anchor}
              themeNum={i + 1}
              bgColor={bg}
              textColor={textColor}
              fontStyle={"font-bold"}
              stories={section.items}
              onClick={onClick}
              activeSection={activeSection}
            />
          );
        })}
      <ReportMenuRow
        title={"Conclusion"}
        anchor={"reportConclusion"}
        themeNum={null}
        bgColor={`bg-gold-50`}
        textColor={"black"}
        fontStyle={"font-serif"}
        stories={null}
        onClick={onClick}
        activeSection={activeSection}
      />
    </section>
  );
};

export default ReportMenu;

const ReportMenuRow = ({
  title,
  anchor,
  themeNum,
  bgColor,
  textColor,
  stories,
  fontStyle,
  onClick,
  activeSection = null
}) => {
  const simpleRow = () => {
   
    return (
      <div className={`w-full flex-1 ${bgColor}`}>
        <a
          className={`hidden ${
            stories !== null ? "md:grid" : "md:block h-full"
          }  responsive-container  text-${textColor} grid-cols-12 gap-lg py-lg group `}
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
            className={`${fontStyle} text-${textColor} type-preset-3 group-hover:underline decoration-1 group-hover:underline-offset-2`}
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
    <div className={`w-full flex-1 ${bgColor}`}>
      <div
        className={`hidden  md:grid  responsive-container  text-${textColor} grid-cols-12 gap-lg`}
      >
        <a
          onClick={onClick}
          className={`col-span-4 block py-lg group my-0 divide-y divide-white`}
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          {themeNum && (
            <p className="type-preset-6 font-serif font-light tracking-[0.015em] pb-sm">
              Theme {themeNum}
            </p>
          )}
          <h2
            className={`type-preset-5 ${fontStyle} text-${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2 pt-sm`}
          >
            {title}
          </h2>
        </a>

        <ul
          className={`col-span-8 pt-lg  divide-y-[1px] divide-${textColor} pb-xl`}
        >
            <p className="type-preset-6 font-serif font-normal tracking-[0.015em] pb-sm">
              Stories
            </p>
          {stories.map((story) => {
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
          <ul className={` divide-y-[1px] divide-${textColor}`}>
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
              stories.map((story) => {
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
