import { getContentUrl, getDateStr, getEventDateStr } from "utils/utils";
import { ContentCard, } from "components/atom";
import classNames from "classnames";
import ColorTheme from "shared_interfaces/ColorThemes";

/*
Content Grid sets up the layout and background color 
for the different types of cards used throughout the site.
*/

export type ListLayout = "1 large 2 small cards row" | "3 card row";
type ContentType = "default" | "posts";


interface ContentGridInterface {
  id: string;
  items: any;
  layout?: ListLayout;
  contentType?: ContentType;
  colorTheme?: ColorTheme;
  padding?:string;
}

const ContentGrid = ({
  id,
  items,
  layout,
  colorTheme= "default",
  padding="",
}: ContentGridInterface) => {
  layout ??= "1 large 2 small cards row";
  const bg = classNames({
    "bg-gold-50": colorTheme=="gold",
    "bg-sage-100": colorTheme=="sage",
    "bg-navy-900": colorTheme=="navy",
    "bg-purple-900": colorTheme=="purple"
  });

  const GridStyle = classNames({
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3": layout == "3 card row",
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4": layout == "1 large 2 small cards row",
  });

  items = items.filter((item) => item != null);

  return (
    <section className={`${bg}`} key={id}>
    <div className={`responsive-container ${padding}`} key={id}>
      <div className={`w-full`}>
        <div className={`w-full ${GridStyle} gap-x-md md:gap-x-2xl  gap-y-3xl `}>
          {items.map((item, i) => {
            const feature = classNames({
              "lg:col-span-2": layout === "1 large 2 small cards row" && i == 0,
            });
            const kicker = item.contentType == "Case Study" ? item.clientName :
                           item.contentType == "News" ? getDateStr(item.date) :
                           item.contentType == "Events" ? getEventDateStr(item.date): null;

            return (
              <div className={`w-full self-stretch ${feature}`} key={item.id}>
                { item["__typename"] == "Post" ?
                (
                  <ContentCard
                    size={
                      layout =="3 card row" || i > 3
                        ? "third"
                        : i == 0
                        ? "half"
                        : "quarter"
                    }
                    kicker={kicker}
                    title={item.title}
                    image={item.promoImage}
                    path={getContentUrl(item.contentType, item.slug)}
                    summary={item.shortSummary}
                 />
                )
                 :(
                  <ContentCard
                    size={
                      layout =="3 card row" || i > 3
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
