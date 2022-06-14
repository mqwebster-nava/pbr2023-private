
const NavButton = (props) => {
    return (
      <div key={props.slug} className="relative inline-block  cursor-pointer ">
        <a
          className={` 
          text-navy-900 pt-md font-sans flex
          mt-sm pr-3xl
          pb-sm
          hover:border-black border-b-2 border-transparent
            `}
          href={props.slug}
        >
          {props.children}
        </a>
      </div>
    );
  };
export default NavButton;  
