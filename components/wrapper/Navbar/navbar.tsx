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
    <div className="relative ">
      <nav
        className={`absolute w-full z-10 bg-opacity-50 "`}
        onMouseEnter={() => setShowMenu(false)}
      >
        <div className="flex flex-wrap mt-md items-center justify-between 
                      px-3xl xl:px-0 xl:mx-auto xl:max-w-screen-lg">

        <Logo />
        <div className=" flex items-center w-auto ">
          {NavData.map((navSection) => {
            return "slug" in navSection ? (
              <NavButton slug={navSection.slug}> {navSection.title}</NavButton>
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

          <a href="/contact"className="font-sans mx-md px-md border-2">Get In Touch</a>
        </div>
        </div>
      </nav>

    </div>
  );
};

const MobileNavBar = ({ NavData }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const NavLinksMobile = () => (
    <div className="w-full flex flex-col items-start bg-gray-200">
      <div className="pl-5">
        <NavLink href="/work">Work</NavLink>
        <IndentedNavLink href="/work/case-studies">
          Case Studies
        </IndentedNavLink>
        <IndentedNavLink href="/toolkits">Toolkits</IndentedNavLink>
        <IndentedNavLink href="/about/team">Team</IndentedNavLink>
        <IndentedNavLink>News</IndentedNavLink>
        <IndentedNavLink href="/contact">Contact</IndentedNavLink>
        <NavLink href="/careers">Careers</NavLink>
        <IndentedNavLink href="/working-at-nava">
          Working At Nava
        </IndentedNavLink>
        <IndentedNavLink href="/open-roles">Open Roles</IndentedNavLink>
        <NavLink href="/mission">Mission</NavLink>
        <IndentedNavLink href="/values">Values</IndentedNavLink>
        <IndentedNavLink href="/impact">Impact</IndentedNavLink>
      </div>
    </div>
  );
  return (
    <nav
      className={`absolute w-full z-10 flex flex-wrap bg-green  items-center justify-between  px-3xl
                    ${
                      isShowingMenu
                        ? "pb-14 g-opacity-90 bg-navy"
                        : "bg-opacity-50 bg-green"
                    }`}
    >
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
      {isShowingMenu && <NavLinksMobile />}
    </nav>
  );
};



export default Navbar;

const NavLink = (props) => {
  return (
    <a
      href={props.href}
      className="block md:inline-block h-12 hover:bg-green-500 hover:text-white text-black  px-4 cursor-pointer"
    >
      <p className="navbar-text py-2 font-sans">{props.children}</p>
    </a>
  );
};

const IndentedNavLink = (props) => {
  return (
    <a
      href={props.href}
      className="block md:inline-block h-12  hover:bg-green px-4 cursor-pointer"
    >
      <p className="block navbar-text font-sans text-black hover:text-green-300 py-2 pl-5">
        {props.children}
      </p>
    </a>
  );
};


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
      <a className=" text-black p-sm font-sans flex 
          items-center" href={props.slug}>
        {props.children}
      </a>
    </div>
  );
};