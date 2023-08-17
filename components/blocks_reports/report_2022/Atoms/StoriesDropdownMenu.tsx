import { useEffect, useState } from "react";

const StoriesDropdownMenu = ({items, colorTheme, sectionAnchor, activeStory, setActiveStory}) => {
    const [selectedOption, setSelectedOption] = useState(items[0].title);
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectOption = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    const availableOptions = items.filter((option) => option.title !== selectedOption);

    useEffect(() => {
      items.forEach((item) => {
        if (activeStory === `${sectionAnchor}--${item.anchor}`) {
          setSelectedOption(item.title);
        }
      })
    }, [activeStory]);
  
    return (
      <div className={`relative z-40 w-full font-serif font-semibold type-preset-3 text-${colorTheme}-900 border-y-[1px] border-${colorTheme}-900`}>
        <div className={`w-full bg-white hover:bg-${colorTheme}-50`}>
          <div className={`responsive-container`}>
            <button
              type="button"
              className={`inline-flex w-full py-md focus:outline-none focus:ring-none`}
              id="dropdown-menu-button"
              onClick={toggleDropdown}
            >
              <div className={``}>
                {selectedOption}
              </div>
            </button>
          </div>
        </div>

        <div className={`absolute w-full border-b-[1px] border-${colorTheme}-900`}>
          <div className={``} role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-button">
            {availableOptions.map((option, index) => (
              <div key={index} className={`w-full border-t-[1px] border-${colorTheme}-900 bg-white hover:bg-${colorTheme}-50`}>
                <a
                  href={`2022#${sectionAnchor}--${option.anchor}`}
                  className="flex w-full py-md responsive-container"
                  role="menuitem"
                  onClick={() => selectOption(option.title)}
                >
                  {option.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default StoriesDropdownMenu;