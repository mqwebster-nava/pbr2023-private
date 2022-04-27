

const DropdownNavItem = (props) => {
    return (
      <a
      key={props.href}
        href={props.href}
        className="text-navy-900 border-b-2 border-gray-300 block p-sm font-sans hover:bg-sage-50  "
      >
        {props.children}
      </a>
    );
  };

  export default DropdownNavItem;