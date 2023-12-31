import HighlightedInfoCard from "components/atom/HighlightedInfoCard/HighlightedInfoCard";

/*
Content Grid sets up the layout and background color 
for the different types of cards used throughout the site.
*/

interface HighlightedInformationListInterface {
  id: string;
  colorTheme?: string;
  items: any;
}

const HighlightedInformationList = ({
  id,
  colorTheme,
  items,
}: HighlightedInformationListInterface) => {
  items = items.filter((item) => item != null);
  return (
    <section
      className={colorTheme == "Nava Labs" ? `bg-plum-900` : `bg-purple-900`}
      key={id}
    >
      <div className={`responsive-container pt-2xl pb-3xl`} key={id}>
        <div className={`w-full`}>
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-3 gap-x-md md:gap-x-2xl gap-y-xl `}
          >
            {items.map((item, i) => {
              return (
                <div className={`w-full self-stretch `} key={item.id}>
                  <HighlightedInfoCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedInformationList;
