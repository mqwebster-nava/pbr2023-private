
const NavButton = (props) => {
    return (
      <a 
      key={props.slug} 
      href={props.slug}
      className="relative inline-block  cursor-pointer ">
        <div
          className={` 
          text-navy-900 pt-md font-sans 
          mt-sm  mr-3xl
          pb-sm
          hover:border-black border-b-2  border-transparent
            `}
        >
          {props.children}
        </div>
      </a>
    );
  };
export default NavButton;  
