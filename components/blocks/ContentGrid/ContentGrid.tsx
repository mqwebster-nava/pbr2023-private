import { getContentUrl, getDateStr } from "utils/utils";
import { ContentCard, } from "components/atom";
import classNames from "classnames";
import HighlightedInfoCard from "components/atom/HighlightedInfoCard/HighlightedInfoCard";
import ColorTheme from "shared_interfaces/ColorThemes";

/*
Content Grid sets up the layout and background color 
for the different types of cards used throughout the site.
*/


export type ListLayout = "feature" | "default";
type ContentType = "default" | "posts" | "feature cards";
interface ContentGridInterface {
  id: string;
  items: any;
  layout?: ListLayout;
  contentType?: ContentType;
  cycleNum?: number;
  colorTheme?: ColorTheme;
  padding?:string;
}

const ContentGrid = ({
  id,
  items,
  layout = "feature",
  contentType,
  colorTheme= "default",
  padding="",
  cycleNum = Math.floor(Math.random() * 4),
}: ContentGridInterface) => {
  const bg = classNames({
    "bg-gold-50": colorTheme=="gold",
    "bg-sage-100": colorTheme=="sage",
    "bg-navy-900": colorTheme=="navy",
  });

  const GridStyle = classNames({
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3": layout == "default",
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4": layout == "feature",
  });

  items = items.filter((item) => item != null);
  return (
    <section className={`${bg}`} key={id}>
    <div className={`responsive-container ${padding}`} key={id}>
      <div className={`w-full`}>
        <div className={`w-full ${GridStyle} gap-x-lg gap-y-xl my-2xl`}>
          {items.map((item, i) => {
            const feature = classNames({
              "lg:col-span-2": layout === "feature" && i == 0,
            });
            return (
              <div className={`w-full self-stretch ${feature}`} key={item.id}>
                {contentType == "feature cards" ? (
                  <HighlightedInfoCard {...item}/>
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
                    kicker={item.contentType == "Case Study" && item.clientName ||item.contentType == "News" && getDateStr(item.date)}
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
  </section>
  );
};

export default ContentGrid;
