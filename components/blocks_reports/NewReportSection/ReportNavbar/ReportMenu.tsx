import { LinkText } from "components/atom";
import SlideDown from "react-slidedown";
import styles from "../../../wrapper/Navbar/MobileNav/mobilenav.module.css";

const ReportMenu = ({ contentBlocks, onClick = () => {} }) => {
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
}) => {
  return (
    <div className={`w-full flex-1 ${bgColor}`}>
      <div
        className={`hidden md:grid responsive-container  text-${textColor} grid-cols-12 gap-lg`}
      >
        <a
          onClick={onClick}
          className="col-span-4 py-lg group"
          href={`#${anchor}`}
          aria-label={`Theme ${themeNum}, Section ${title}`}
        >
          {themeNum && (
            <p className="type-preset-6 font-serif ">Theme {themeNum}</p>
          )}
          <h2
            className={`type-preset-5 ${fontStyle} text-${textColor} group-hover:underline decoration-1 group-hover:underline-offset-2`}
          >
            {title}
          </h2>
        </a>
        <div className={`col-span-8 pt-md divide-y divide-${textColor}`}>
          {stories &&
            stories.map((story) => {
              const anch2 = `#${anchor}--${story.anchor}`;
              const title = story.title;
              return (
                <div
                  onClick={onClick}
                  className="font-serif py-sm"
                  key={`${anch2}-menu`}
                >
                  <LinkText
                    href={anch2}
                    variant={"default"}
                    color={textColor}
                    hoverStyle={"underlined"}
                  >
                    {title}
                  </LinkText>
                </div>
              );
            })}
        </div>
      </div>

      {stories ? (
        <details
          className={` md:hidden block responsive-container ${styles.details} `}
        >
          <summary
            className={` relative  text-${textColor}  pr-sm   cursor-pointer`}
          >
            <div className="flex flex-row justify-between items-center pt-md pb-3xl">
              <h3
                className={`${fontStyle} text-${textColor} pr-sm type-preset-3`}
              >
                {title}
              </h3>
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
          <SlideDown className={`${styles.mobileSlideDown}`}>
            <div
              onClick={onClick}
              className={`font-serif py-sm type-preset-6 border-t-2 border-${textColor}`}
            >
              <LinkText
                href={`#${anchor}`}
                variant={"default"}
                hoverStyle={"underlined"}
                color={textColor}
                ariaLabel={`Theme ${themeNum}, Section ${title} Introduction`}
              >
                Introduction
              </LinkText>
            </div>
            {stories &&
              stories.map((story) => {
                const anch2 = `#${anchor}--${story.anchor}`;
                const title = story.title;
                return (
                  <div
                    onClick={onClick}
                    className={`font-serif py-sm type-preset-6 border-t-2 border-${textColor}`}
                    key={`${anch2}-story-report-menu`}
                  >
                    <LinkText
                      href={anch2}
                      variant={"default"}
                      color={
                        ["black", "white"].includes(textColor)
                          ? textColor
                          : null
                      }
                      hoverStyle={"underlined"}
                    >
                      {title}
                    </LinkText>
                  </div>
                );
              })}
          </SlideDown>
        </details>
      ) : (
        <a
          href={`#${anchor}`}
          onClick={onClick}
          className="responsive-container group md:hidden block pt-md pb-3xl"
        >
          <h2 className={`${fontStyle} text-${textColor} type-preset-3 group-hover:underline decoration-1 group-hover:underline-offset-2`}>
              {title}
          </h2>
        </a>
      )}
    </div>
  );
};
// const NavLinksMobile = () => (
//   <nav
//     aria-label="main"
//     className=" absolute left-0 top-[60px] responsive-container w-full flex flex-col  bg-white z-50 "
//   >
//     <SlideDown className={``}>
//       {isShowingMenu
//         ? NavData.map((navSection, i) => {
//             const extraPadding = classNames({
//               "mt-lg": i == 0,
//               "mb-lg": i == NavData.length - 1,
//             });
//             return "slug" in navSection ? (
//               <a
//                 href={navSection.slug}
//                 className={`group block w-full border-t-[1px] border-black py-lg ${extraPadding} ${analyticsLabel}`}
//                 key={navSection.title}
//               >
//                 <div className="relative inline-block  ">
//                   <div
//                     className={`
//              text-gray-900 font-sans font-bold
//              mr-3xl
//              group-hover:border-black border-b-2  border-transparent
//                `}
//                   >
//                     {navSection.title}
//                   </div>
//                 </div>
//               </a>
//             ) : (
//               <details
//                 key={navSection.title}
//                 className={`${styles.details} ${extraPadding} w-full border-t-[1px] border-black py-lg`}
//               >
//                 <summary
//                   className={` relative  text-gray-900  pr-sm   cursor-pointer`}
//                 >
//                   <div className="flex flex-row justify-between items-center">
//                     <h3 className=" text-gray-900 pr-sm font-sans font-bold ">
//                       {navSection.title}
//                     </h3>
//                     <div className={`chevron`}>
//                       <svg
//                         width="18"
//                         height="9"
//                         viewBox="0 0 20 11"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M19 1L10 10L1 1"
//                           stroke="#111827"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </summary>
//                 <SlideDown className={`${styles.mobileSlideDown}`}>
//                   {navSection.subpages.map((navitem) => (
//                     <a
//                       key={navitem.title}
//                       href={navitem.slug}
//                       className={`block hover:bg-green px-4 cursor-pointer ${analyticsLabel}`}
//                     >
//                       <p className="font-sans text-gray-900 hover:underline py-2 pl-5">
//                         {navitem.title}
//                       </p>
//                     </a>
//                   ))}
//                 </SlideDown>
//               </details>
//             );
//           })
//         : null}
//     </SlideDown>
//   </nav>
// );

/* <div className={`w-full flex-1 bg-white `}>
               <div
                 className={`responsive-container  text-black grid grid-cols-12 gap-lg`}
               >
                 <h2 className="col-span-4 type-preset-3 font-bold pt-sm">
                 <LinkText
                           href={``}
                           variant={"default"}
                           color={'black'}
                         >
                  Download PDF
                   </LinkText>
                 </h2>
             
               </div>
             </div> */

/* {contentBlocks
        .filter(
          (entry) => entry.__typename === "ReportIllustrationOverlaySubsection"
        )
        .map((section, i) => {
          const color = section.colorTheme ?? "purple";
          const textColor = section.colorTheme === "gold" ? "black" : "white";
          return (
            <div className={`w-full flex-1 bg-${color}-900 `}>
              <div
                className={`responsive-container  text-white grid grid-cols-12 gap-lg`}
              >
                <div className="col-span-4 ">
                  <p className="type-preset-6 font-serif pt-sm">
                    Theme {i + 1}
                  </p>

                  <h2 className="type-preset-4 font-bold pt-sm">
                    <LinkText
                      href={`#${section.anchor}`}
                      variant={"default"}
                      color={textColor}
                    >
                      {section.title}
                    </LinkText>
                  </h2>
                </div>
                <div
                  className={`col-span-8 pt-md divide-y divide-${textColor}`}
                >
                  {section.storiesCollection.items.map((story) => {
                    const anch2 = `#${section.anchor}--${story.anchor}`;
                    const title = story.shortTitle ?? story.title;
                    return (
                      <div onClick={onClick} className="font-serif py-sm">
                        <LinkText
                          href={anch2}
                          variant={"default"}
                          color={textColor}
                        >
                          {title}
                        </LinkText>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })} */
