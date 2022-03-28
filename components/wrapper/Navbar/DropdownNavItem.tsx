

const DropdownNavItem = (props) => {
    return (
      <a
        href={props.href}
        className="text-navy-900 border-b-2 border-black block pb-sm font-sans hover:bg-navy-50   pr-sm"
      >
        {props.children}
      </a>
    );
  };

  export default DropdownNavItem;