import { ContentCardInterface } from "./ContentCard";

const LargeTextCard: React.FC<ContentCardInterface> = ({
    title,
    path,
    children,
  }) => {
      return ( 
        <a
        href={`${path}`}
        className="block  h-[460px] w-full bg-navy-700 hover:bg-sage-400"
      >
    
        <div className="p-lg">
        <h6 className="mb-2 type-preset-6 font-bold  text-white font-sans ">
          How to
        </h6>
        <h5 className=" type-preset-4 font-bold  text-white font-sans h-56">
          {title}
        </h5>
        <p className=" type-preset-6 font-sans text-white dark:text-gray-400">
          {children}
        </p>
        </div>
      </a>
    );
  }
  export default LargeTextCard;
