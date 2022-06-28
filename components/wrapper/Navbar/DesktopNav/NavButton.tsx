import styles from "./desktopnav.module.css";

const NavButton = (props) => {
    return (
      <a 
      key={props.slug} 
      href={props.slug}
      className={`group relative inline-block  cursor-pointer    ${styles.lineAnimations}`}>
        <p
          className={` 
          text-gray-600 pt-md font-sans 
           mr-3xl
          pb-sm
          group-hover:text-gray-900
       
        `}
        >
          {props.children}
        </p>
      </a>
    );
  };
export default NavButton;  
