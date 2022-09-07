import { LinkText } from "components/atom";
const TableOfContentsSection = ({ contentBlocks, showTOC, onClick = () => {} }) => {
  // Have the bottom rule not have a hr
  // @apply px-xl md:px-4xl 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ;

  const MobileSectionTitle = ({
    title,
    anchor,
    themeNum,
    bgColor,
    textColor,
  }) => {
    return (
      <div className={`w-full grow ${bgColor} `}>
        <div className={` pl-xl text-white grid grid-cols-12  gap-lg `}>
          <div className="lg:col-span-4 col-span-12 lg:py-auto py-lg">
            {themeNum != null && (
              <p className="type-preset-7 font-serif pt-sm">
                Theme {themeNum + 1}
              </p>
            )}
            <h2 className="type-preset-5 font-bold ">
              <LinkText
                href={`#${anchor}`}
                variant={"default"}
                color={textColor}
              >
                {title}
              </LinkText>
            </h2>
          </div>
        </div>
      </div>
    );
  };
  const MobileSection = () => {
    return (
      <div className="block lg:hidden">
        <div className="w-full h-full bg-white pt-3xl px-xl md:px-4xl  ">
          <p className="type-preset-5 font-serif pb-md">
            Our 2021 report is themed around building equity through strong
            public services.
          </p>
        </div>
        <MobileSectionTitle
          title={"Letter from Leadership"}
          anchor={"intro"}
          themeNum={null}
          bgColor={`bg-gold-50`}
          textColor={"black"}
        />
        {contentBlocks
          .filter(
            (entry) =>
              entry.__typename === "ReportIllustrationOverlaySubsection"
          )
          .map((section, i) => {
            const color = section.colorTheme ?? "purple";
            const textColor = section.colorTheme === "gold" ? "black" : "white";
            return (
              <MobileSectionTitle
                title={section.title}
                anchor={section.anchor}
                themeNum={i}
                bgColor={`bg-${color}-900`}
                textColor={textColor}
              />
            );
          })}
        <MobileSectionTitle
          title={"Conclusion"}
          anchor={"conclusion"}
          themeNum={null}
          bgColor={`bg-gold-50`}
          textColor={"black"}
        />

        <div className="w-full lg:w-1/3 h-full bg-white pt-3xl px-xl md:px-4xl lg:px-0 flex flex-col justify-between">
          <p className="type-preset-5 font-serif pb-md" >
            Through project-specific stories, the 2021 report details how Nava
            worked to build equity by designing public services for all.
          </p>
        </div>
        <div className="flex lg:hidden pr-xl md:pr-4xl md:pl-0 2xl:px-0 flex-col gap-lg max-w-screen-xl">
          <div className="w-full lg:w-3/4 h-full flex flex-col">
            {contentBlocks
              .filter(
                (entry) =>
                  entry.__typename === "ReportIllustrationOverlaySubsection"
              )
              .map((section, i) => {
                const color = section.colorTheme ?? "purple";
                const textColor =
                  section.colorTheme === "gold" ? "black" : "white";
                return (
                  <div className={`w-full grow bg-${color}-900 `}>
                    <div className={`md:pl-4xl pl-xl text-white  gap-lg`}>
                      <div className={` pt-md divide-y divide-${textColor}`}>
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
              })}
          </div>
        </div>
      </div>
    );
  };

  const DesktopSectionTitle = ({
    title,
    anchor,
    themeNum,
    bgColor,
    textColor,
    stories,
  }) => {
    return (
      <div className={`w-full grow ${bgColor} `}>
        <div
          className={` md:ml-4xl pl-xl text-white grid grid-cols-12  gap-lg `}
        >
          <div className="lg:col-span-4 col-span-12 lg:py-auto py-lg">
            {themeNum != null && (
              <p className="type-preset-7 font-serif pt-sm">
                Theme {themeNum + 1}
              </p>
            )}
            <h2 className="type-preset-5 font-bold ">
              <LinkText
                href={`#${anchor}`}
                variant={"default"}
                color={textColor}
              >
                {title}
              </LinkText>
            </h2>
          </div>
          <div
            className={` col-span-8 pt-md divide-y divide-${textColor} ${showTOC ? "opacity-100 animate-titleSlide": "opacity-0"} transition duration-1000 `}
          >
            {stories &&
              stories.map((story) => {
                const anch2 = `#${anchor}--${story.anchor}`;
                const title = story.shortTitle ?? story.title;
                return (
                  <div
                    onClick={onClick}
                    className=" font-serif py-sm type-preset-7"
                  >
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
  };

  const DesktopSection = () => {
    return (
      <div className="lg:sticky top-[70px] lg:h-[calc(100vh_-_70px)] hidden lg:block">
        <div className="pr-xl md:pr-4xl md:pl-0  flex flex-col-reverse lg:flex-row gap-lg h-full 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ">
          <div className="w-full lg:w-3/4 h-full flex flex-col">
            <DesktopSectionTitle
              title={"Introduction Letter"}
              anchor={"intro"}
              themeNum={null}
              bgColor={`bg-gold-50`}
              textColor={"black"}
              stories={null}
            />
            {contentBlocks
              .filter(
                (entry) =>
                  entry.__typename === "ReportIllustrationOverlaySubsection"
              )
              .map((section, i) => {
                const color = section.colorTheme ?? "purple";
                const textColor =
                  section.colorTheme === "gold" ? "black" : "white";
                return (
                  <DesktopSectionTitle
                    title={section.title}
                    anchor={section.anchor}
                    themeNum={i + 1}
                    bgColor={`bg-${color}-900`}
                    textColor={textColor}
                    stories={section.storiesCollection.items}
                  />
                );
              })}
            <DesktopSectionTitle
              title={"Conclusion"}
              anchor={"conclusion"}
              themeNum={null}
              bgColor={`bg-gold-50`}
              textColor={"black"}
              stories={null}
            />
          </div>
          <div className="w-full lg:w-1/4 h-full bg-white pt-3xl px-xl md:px-4xl lg:px-0 lg:max-w-[316px] flex flex-col justify-between">
            <p className="type-preset-5 font-serif">
              Our 2021 report is themed around building equity through strong
              public services.
            </p>
            <p className={`type-preset-5 font-serif ${showTOC ? "opacity-100 animate-titleSlide": "opacity-0"} transition-opacity duration-500`} >
              Through project-specific stories, the 2021 report details how Nava
              worked to build equity by designing public services for all.
            </p>
            <div className="pb-xl hidden lg:block">
              <svg
                width="56"
                height="103"
                viewBox="0 0 56 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.998 1V101.613"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.9964 74.5254L27.9982 101.614L1 74.5254"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };
  //@apply px-xl md:px-4xl 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ;
  return (
    <section className={`w-full lg:h-[200vh] bg-white relative`} id="toc">
      <DesktopSection />
      <MobileSection />
    </section>
  );
};
export default TableOfContentsSection;
