
const NavButton = (props) => {
    return (
      <div className="relative font-bold inline-block  text-navy-900  cursor-pointer ">
        <a
          className="  w-full
          text-navy-900 pt-md font-sans flex
          mt-sm pr-3xl
          hover:border-b-sage-base border-b-8 border-transparent
            "
          href={props.slug}
        >
          {props.children}
        </a>
      </div>
    );
  };
export default NavButton;  