
import {  useState } from "react";

/*
TODO - Need to update the navbar for dropdown menu
*/

const Navbar = ({  }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const Logo = () => (
    <div className="flex items-center flex-shrink-0 text-black ml-6 lg:mr-5">
      <span className="font-semibold text-xl tracking-tight">NAVA</span>
    </div>
  );

  const NavLink = (props) => {
    return (
      <a
        href={props.href}
        className="block lg:inline-block h-12 hover:bg-green px-4 cursor-pointer"
      >
        <p className="navbar-text  text-black hover:text-green py-2">
          {props.children}
        </p>
      </a>
    );
  };

  const IndentedNavLink = (props) => {
    return (
      <a
        href={props.href}
        className="block lg:inline-block h-12  hover:bg-green px-4 cursor-pointer"
      >
        <p className="block navbar-text text-black hover:text-green-300 py-2 pl-5">
          {props.children}
        </p>
      </a>
    );
  };

  const NavLinksDesktop = () => (
    <div className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto ">
      <div className="lg:flex-grow">
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/careers">Careers</NavLink>
        <NavLink href="/mission">Mission</NavLink>
        <NavLink href="/insights">Insights</NavLink>
      </div>
    </div>
  );

  const NavLinksMobile = () => (
    <div className="lg:hidden w-full flex flex-col items-start bg-gray-200">
      <div className="pl-5">
      <NavLink href="/work">Work</NavLink>
            <IndentedNavLink href="/work/case-studies">Case Studies</IndentedNavLink>
            <IndentedNavLink>Toolkits</IndentedNavLink>
            <IndentedNavLink>Public benefit reports</IndentedNavLink>
        <NavLink href="/about">About</NavLink>
            <IndentedNavLink href="/about/team">Team</IndentedNavLink>
            <IndentedNavLink>News</IndentedNavLink>
            <IndentedNavLink>Contact</IndentedNavLink>
        <NavLink href="/careers">Careers</NavLink>
            <IndentedNavLink href="/careers/working-at-nava">Working At Nava</IndentedNavLink>
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
                        ? "pb-14 g-opacity-90 bg-blue"
                        : "bg-opacity-50 bg-green"
                    }`}
    >
      <Logo />
      <div className="block lg:hidden">
        <button
          onClick={() => {
            setIsShowingMenu(!isShowingMenu);
          }}
          className="m-4 px-3 py-2 border rounded text-black hover:text-green-200 border-grey  hover:border-green-200"
        >
          Menu
        </button>
      </div>
      <NavLinksDesktop />
      {isShowingMenu && <NavLinksMobile />}
    </nav>
  );
};
export default Navbar;
