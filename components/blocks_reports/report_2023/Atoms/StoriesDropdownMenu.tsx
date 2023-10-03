import { useEffect, useState } from "react";
import classNames from "classnames";
import Arrow from "./Arrow";
import { getOffsetPct } from "../_utils";

const StoriesDropdownMenu = ({
  items,
  colorTheme,
  sectionAnchor,
  activeStory,
  setActiveStory,
  parentSectionOpen,
}) => {
  const [selectedOption, setSelectedOption] = useState(items[0].title);
  const [isOpen, setIsOpen] = useState(false);
  const [storyPct, setStoryPct] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option.title);
    setIsOpen(false);
    setActiveStory(`${sectionAnchor}--${option.anchor}`);
  };

  const availableOptions = items.filter(
    (option) => option.title !== selectedOption
  );

  useEffect(() => {
    items.forEach((item) => {
      if (activeStory === `${sectionAnchor}--${item.anchor}`) {
        setSelectedOption(item.title);
      }
    });
  }, [activeStory]);

  const onScroll = () => {
    items.forEach((item) => {
      const id = `${sectionAnchor}--${item.anchor}`;
      const offsetPct = getOffsetPct(id)
      if (offsetPct < 5 || offsetPct >= 200) return;
      if (offsetPct >= 5 && offsetPct < 200) {
        setSelectedOption(item.title);
      }
      setStoryPct(offsetPct);
    })
  };

  useEffect(() => {
    if (activeStory !== null) {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [storyPct, activeStory]);

  const borderStyles = classNames({
    "border-gold-pbrcustomdark": colorTheme == "gold",
    "border-plum-900": colorTheme == "plum",
    "border-sage-900": colorTheme == "sage",
    "border-purple-900": colorTheme == "purple",
    "border-navy-900": colorTheme == "navy",
  });

  const StoriesMenu = () => {
    return (
      <div className={`w-full`}>
        <div
          className={``}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
        >
          {items.map((option, index) => (
            <div
              key={index}
              className={`group/story-menu w-full border-t-[1px] ${borderStyles} bg-white hover:bg-${colorTheme}-50`}
            >
              <a
                href={`#${sectionAnchor}--${option.anchor}`}
                className="flex justify-between items-center w-full py-md responsive-container"
                role="menuitem"
                onClick={() => selectOption(option)}
              >
                <div className="text-left pr-6">{option.title}</div>

                <div
                  className={`transition-all duration-200 ease-linear opacity-20 group-hover/story-menu:-rotate-180 group-hover/story-menu:opacity-100`}
                >
                  <Arrow color={colorTheme} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const StoriesDropdown = () => {
    return (
      <div
        className={`relative z-40 w-full border-b-[1px] ${borderStyles}`}
      >
        <div
          className={`group/story-dropdown-active w-full ${
            isOpen
              ? `bg-white hover:bg-${colorTheme}-50`
              : `bg-${colorTheme}-50`
          }`}
        >
          <div className={`responsive-container`}>
            <button
              type="button"
              className={`inline-flex justify-between items-center w-full py-md focus:outline-none focus:ring-none`}
              id="dropdown-menu-button"
              onClick={toggleDropdown}
            >
              <div className={`pr-6 text-left`}>{selectedOption}</div>

              <div
                className={`
                  ${isOpen
                  ? `transition-all duration-200 ease-linear opacity-20 group-hover/story-dropdown-active:-rotate-180 group-hover/story-dropdown-active:opacity-100`
                  : ``}`
                }
              >
                <Arrow color={colorTheme} />
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`absolute w-full border-b-[1px] ${borderStyles} drop-shadow-2xl`}
          >
            <div
              className={``}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-menu-button"
            >
              {availableOptions.map((option, index) => (
                <div
                  key={index}
                  className={`group/story-dropdown-item w-full border-t-[1px] ${borderStyles} bg-white hover:bg-${colorTheme}-50`}
                >
                  <a
                    href={`#${sectionAnchor}--${option.anchor}`}
                    className="flex justify-between items-center w-full py-md responsive-container text-left"
                    role="menuitem"
                    onClick={() => selectOption(option)}
                  >
                    <div className="text-left pr-6">{option.title}</div>

                    <div
                      className={`transition-all duration-200 ease-linear opacity-20 group-hover/story-dropdown-item:-rotate-180 group-hover/story-dropdown-item:opacity-100`}
                    >
                      <Arrow color={colorTheme} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`font-serif font-semibold text-base leading-5 md:text-3xl md:leading-tight ${colorTheme == "gold" ? `text-gold-pbrcustomdark` : `text-${colorTheme}-900`}`}
    >
      {parentSectionOpen && activeStory == null ? (
        <StoriesMenu />
      ) : (
        <StoriesDropdown />
      )}
    </div>
  );
};

export default StoriesDropdownMenu;