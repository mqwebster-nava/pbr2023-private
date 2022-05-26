import { getContentUrl } from "utils/utils";
import { ContentCard, LinkText } from "components/atom";
import classNames from "classnames";
import FeatureCard from "components/atom/FeatureCard/FeatureCard";
import LeadershipBioCard from "components/atom/LeadershipBioCard/LeadershipBioCard";

/*
Content Grid sets up the layout and background color 
for the different types of cards used throughout the site.

*/


export type ListLayout = "feature" | "default";
type ContentType = "default" | "posts" | "feature cards" | "leadership bios" ;
interface ContentGridInterface {
  id: string;
  items: any;
  layout?: ListLayout;
  contentType?: ContentType;
  cycleNum?: number;
}

const ContentGrid = ({
  id,
  items,
  layout = "feature",
  contentType,
  cycleNum = Math.floor(Math.random() * 4),
}: ContentGridInterface) => {
  const GridStyle = classNames({
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3": layout == "default",
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4": layout == "feature",
  });

  items = items.filter((item) => item != null);
  return (
    <div className="responsive-container py-xl" key={id}>
      <div className={`w-full`}>
        <div className={`w-full ${GridStyle} gap-x-lg gap-y-xl my-2xl`}>
          {items.map((item, i) => {
            const feature = classNames({
              "lg:col-span-2": layout === "feature" && i == 0,
            });
            return (
              <div className={`w-full self-stretch ${feature}`} key={item.id}>
                {contentType == "feature cards" ? (
                  <FeatureCard {...item}/>
                ) : contentType == "leadership bios" ? (
                  <LeadershipBioCard {...item} />
                ) : item["__typename"] == "Post" ?
                (
                  <ContentCard
                    size={
                      layout == "default" || i > 3
                        ? "third"
                        : i == 0
                        ? "half"
                        : "quarter"
                    }
                    kicker={item.contentType == "Case Study" && item.clientName}
                    title={item.title}
                    image={item.promoImage}
                    path={getContentUrl(item.contentType, item.slug)}
                    cycleNum={cycleNum}
                    summary={item.shortSummary}
                 />
                )
                 :(
                  <ContentCard
                    size={
                      layout == "default" || i > 3
                        ? "third"
                        : i == 0
                        ? "half"
                        : "quarter"
                    }
                    {...item}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
