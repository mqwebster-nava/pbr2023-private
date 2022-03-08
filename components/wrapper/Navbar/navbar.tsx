import { useState } from "react";
import useWindowSize from "utils/windowSizeHook";
import DropdownNavButton from "./DropdownNavButton";
import Logo from "./Logo";
/*
1. Splitting up moble, hamburger menu nav and desktop nav

2. Creating dropdown buttons
- How to position it?

3. Making navbar programmatic

Mobile Menu 

Desktop Menu
- Dropdown element
*/

const NavData = [
  {
    title: "Mission",
    subpages: [
      { title: "Impact", slug: "/impact" },
      { title: "Values", slug: "/values" },
    ],
  },
  {
    title: "Work",
    subpages: [
      { title: "Services", slug: "/services" },
      { title: "Case studies", slug: "/case-studies" },
      { title: "Toolkits", slug: "/toolkits" },
    ],
  },
  {
    title: "Insights",
    slug: "/insights",
  },
  {
    title: "Careers",
    subpages: [
      { title: "Working at Nava", slug: "/working-at-nava" },
      { title: "Open roles", slug: "/open-roles" },
    ],
  },
  {
    title: "About",
    subpages: [
      { title: "Nava's story", slug: "/story" },
      { title: "Our people", slug: "/people" },
      { title: "Diversity, equity, and inclusion", slug: "/dei" },
      { title: "News", slug: "/news" },
    ],
  },
];

const Navbar = ({}) => {
  // Gets the current breakpoint to determine the navbar
  const screenSize = useWindowSize();
  const isMobile: Boolean = !screenSize.includes("xl");
  //console.log(screenSize, isMobile);
  return isMobile ? (
    <MobileNavBar NavData={NavData} />
  ) : (
    <DesktopNavBar NavData={NavData} />
  );
};

const DesktopNavBar = ({ NavData }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
   
      <nav
        className={`absolute w-full z-10 bg-opacity-50 "`}
        onMouseEnter={() => setShowMenu(false)}
      >
        <div className=" responsive-nav pt-lg flex flex-wrap items-center justify-between">
          <Logo />
          <div className=" flex items-center w-auto ">
            {NavData.map((navSection) => {
              return "slug" in navSection ? (
                <NavButton slug={navSection.slug}>
                  {" "}
                  {navSection.title}
                </NavButton>
              ) : (
                <DropdownNavButton title={navSection.title}>
                  {navSection.subpages.map((navitem) => (
                    <DropdownNavItem href={navitem.slug}>
                      {navitem.title}
                    </DropdownNavItem>
                  ))}
                </DropdownNavButton>
              );
            })}

            <a href="/contact" className="font-sans mx-md px-md border-2">
              Get In Touch
            </a>
          </div>
        </div>
      </nav>
  );
};

const MobileNavBar = ({ NavData }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const NavLinksMobile = () => (
    <div className="w-full flex flex-col items-start bg-gray-200">
      <div className="pl-5">
        {NavData.map((navSection) => {
          return "slug" in navSection ? (
            <NavButton slug={navSection.slug}> {navSection.title}</NavButton>
          ) : (
            <div>
              <div className="relative inline-block  text-black  px-sm cursor-pointer">
                <h3 className=" text-black p-sm font-sans flex  items-center">
                  {navSection.title}
                </h3>
              </div>
              {navSection.subpages.map((navitem) => (
                <a
                  href={navitem.slug}
                  className="block hover:bg-green px-4 cursor-pointer"
                >
                  <p className="font-sans text-black hover:text-green-300 py-2 pl-5">
                    {navitem.title}
                  </p>
                </a>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
  
      <nav
        className={`absolute w-full z-10`}
      >
        <div className="responsive-nav  flex flex-wrap bg-green  items-center justify-between">
          <Logo />
          <div className="block ">
            <button
              onClick={() => {
                setIsShowingMenu(!isShowingMenu);
              }}
              className="m-4 px-3 py-2 border rounded text-black hover:text-green-200 border-grey  hover:border-green-200"
            >
              Menu
            </button>
          </div>
        </div>
        {isShowingMenu && <NavLinksMobile />}
      </nav>
  );
};

export default Navbar;


const DropdownNavItem = (props) => {
  return (
    <a
      href={props.href}
      className="text-black block font-sans hover:bg-sage-base py-sm px-lg"
    >
      {props.children}
    </a>
  );
};

const NavButton = (props) => {
  return (
    <div className="relative inline-block  hover:bg-green-500 hover:text-white text-black  px-sm cursor-pointer">
      <a
        className=" text-black p-sm font-sans flex 
          items-center"
        href={props.slug}
      >
        {props.children}
      </a>
    </div>
  );
};
