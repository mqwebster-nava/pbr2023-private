

const DropdownNavItem = (props) => {
    return (
      
      <a
      role="menuitem"
        href={props.href}
        className="text-navy-900 text-left  block py-md px-[28px] font-sans hover:underline  "
      >
        {props.children}
      </a>
    );
  };

  export default DropdownNavItem;