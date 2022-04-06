import { ContentfulImageAsset } from "lib/post_data_models";
import CardWithImage from "./CardWithImage";

export interface ContentCardInterface {
  title: String;
  path: String;
  type: String;
  promoImage?: ContentfulImageAsset;
}

const ContentCard: React.FC<ContentCardInterface> = (props) => {
  if (props.promoImage) return <CardWithImage {...props} />;
  return <DefaultContentCard {...props} />;
};

const DefaultContentCard: React.FC<ContentCardInterface> = ({
  title,
  path,
  type,
  children,
}) => {
  return (
    <a
      href={`${path}`}
      className="block max-w-sm h-full bg-white  border border-gray-200 hover:bg-gray-100 rounded"
    >
      <div className="relative h-52 w-full mb-md bg-gold-400">
            
      </div>
      <div className=" p-sm ">
      <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-900 font-sans">
        {type}
      </h6>
      <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 font-sans">
        {title}
      </h5>
      <p className=" text-base font-sans text-gray-700 dark:text-gray-400">
        {children}
      </p>
      </div>
    </a>
  );
};

export default ContentCard;
