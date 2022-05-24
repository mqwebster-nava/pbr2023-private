import { getContentUrl } from "utils/utils";
import { ContentCard, LinkText } from "components/atom";
import classNames from "classnames";
import FeatureCard from "components/atom/FeatureCard/FeatureCard";
import LeadershipBioCard from "components/atom/LeadershipBioCard/LeadershipBioCard";

type ListVariant = "feature" | "default";
type ContentType = "items" | "feature cards" | "leadership bios";

interface ContentGridInterface {
  id: string;
  items: any;
  variant?: ListVariant;
  contentType?: ContentType;
  cycleNum?: number;
}

const ContentGrid = ({
  id,
  items,
  variant = "feature",
  contentType,
  cycleNum = Math.floor(Math.random() * 4),
}: ContentGridInterface) => {
  const GridStyle = classNames({
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3": variant == "default",
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4": variant == "feature",
  });

  items = items.filter((item) => item != null);
  return (
    <div className="responsive-container py-xl" key={id}>
      <div className={`w-full`}>
        <div className={`w-full ${GridStyle} gap-x-lg gap-y-xl my-2xl`}>
          {items.map((item, i) => {
            const feature = classNames({
              "lg:col-span-2": variant === "feature" && i == 0,
            });
            console.log(feature, variant);
            return (
              <div className={`w-full self-stretch ${feature}`} key={item.id}>
                {contentType == "feature cards" ? (
                  <FeatureCard {...item}/>
                ) : contentType == "leadership bios" ? (
                  <LeadershipBioCard {...item} />
                ) : (
                  <ContentCard
                    size={
                      variant == "default" || i > 3
                        ? "third"
                        : i == 0
                        ? "half"
                        : "quarter"
                    }
                    kicker={item.contentType == "Case Study" && item.clientName}
                    type={item.contentType}
                    title={item.title}
                    promoImage={item.promoImage}
                    path={getContentUrl(item.contentType, item.slug)}
                    cycleNum={cycleNum}
                  >
                    {item.shortSummary}
                  </ContentCard>
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
