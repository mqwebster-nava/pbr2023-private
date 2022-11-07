
import { AnalyticsLabelType } from "utils/Analytics";
import styles from "./desktopnav.module.css";

interface NavButtonnInterface {
  title: string;
  slug: string;
  analyticsLabel?: AnalyticsLabelType
}


const NavButton = ({title, slug, analyticsLabel="navbar"}:NavButtonnInterface) => {
    return (
      <a 
      key={slug} 
      href={slug}
      className={`group relative inline-block  cursor-pointer ${styles.lineAnimations} ${analyticsLabel} `}>
        <p
          className={` 
          text-gray-600 pt-md font-sans 
           mr-3xl
          pb-sm
          group-hover:text-gray-900
       
        `}
        >
          {title}
        </p>
      </a>
    );
  };
export default NavButton;  
