import { useState } from "react";
import useWindowSize from "utils/windowSizeHook";
/*
TODO - Need to update the navbar for dropdown menu

Two different pages
Data in - Nav links 

Mobile Menu 

Desktop Menu
- Dropdown element
*/

const NavData = [
  {
    title: "Work",
    slug: "/work",
    subpages: [
      {
        title: "Case Studies",
        slug: "/work/case-studies",
      },
    ],
  },
  {
    title: "About",
    slug: "/about",
  },
];


const Navbar = ({}) => {
  // Gets the current breakpoint to determine the navbar
  const screenSize = useWindowSize();
  const isMobile: Boolean = !screenSize.includes("lg");
  //console.log(screenSize, isMobile);
  return isMobile ? (
    <MobileNavBar NavData={NavData} />
  ) : (

    <DesktopNavBar NavData={NavData} />
  );
};

const Logo = () => (
  <div className="flex items-center flex-shrink-0 text-black ml-6 md:mr-5">
    <a href={"/"}>
      {" "}
      <span className="font-semibold font-sans text-xl tracking-tight">NAVA</span>
    </a>
  </div>
);

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


const DesktopNavBar = ({ NavData }) => {
  const [showMenu, setShowMenu] = useState(false);

  const NavLink2 = (props) => {
    return (
      <a
        onMouseEnter={()=>setShowMenu(true)}
        href={props.href}
        className="block md:inline-block h-12 hover:bg-green-500 hover:text-white text-black  px-4 cursor-pointer"
      >
        <p className="navbar-text py-2 font-sans">{props.children}</p>
      </a>
    );
  };
  return (
    <div className="relative">
    <nav
      className={`absolute w-full z-10 flex flex-wrap bg-green  items-center justify-between 
                     bg-opacity-50 bg-green-300"`}
      onMouseEnter={()=>setShowMenu(false)}
    >
      <Logo />
      <div className="flex-grow flex items-center w-auto ">
        <div className="flex-grow">
          <NavLink2 href="/work" >Work </NavLink2>
          <NavLink2 href="/about">About</NavLink2>
          <NavLink2 href="/careers">Careers</NavLink2>
          <NavLink2 href="/mission">Mission</NavLink2>
          <NavLink2 href="/insights">Insights</NavLink2>
        </div>
      </div>
    </nav>
    {/* {showMenu && 
      <div className={`absolute top-2xl left-0 w-screen h-screen bg-purple-base`}
      >
      </div>
      } */}
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
        <IndentedNavLink>Toolkits</IndentedNavLink>
        <IndentedNavLink>Public benefit reports</IndentedNavLink>
        <NavLink href="/about">About</NavLink>
        <IndentedNavLink href="/about/team">Team</IndentedNavLink>
        <IndentedNavLink>News</IndentedNavLink>
        <IndentedNavLink>Contact</IndentedNavLink>
        <NavLink href="/careers">Careers</NavLink>
        <IndentedNavLink href="/careers/working-at-nava">
          Working At Nava
        </IndentedNavLink>
        <IndentedNavLink href="/careers/open-roles">Open Roles</IndentedNavLink>
        <NavLink href="/mission">Mission</NavLink>
        <IndentedNavLink href="/mission/values">Values</IndentedNavLink>
        <IndentedNavLink href="/mission/impact">Impact</IndentedNavLink>
      </div>
    </div>
  );
  return (
    <nav
      className={`absolute w-full z-10 flex flex-wrap bg-green  items-center justify-between 
                    ${
                      isShowingMenu
                        ? "pb-14 g-opacity-90 bg-navy"
                        : "bg-opacity-50 bg-green"
                    }`}
    >
      <Logo />
      <div className="block">
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
