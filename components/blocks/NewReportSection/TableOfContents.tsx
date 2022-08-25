import { LinkText } from "components/atom";

const TableOfContentsSection = ({ entry, onClick=()=>{} }) => {
    return (
      <section className={` w-full h-screen flex flex-col `}>
        {entry.reportSubsectionsCollection.items.map((section) => {
          const color = section.colorTheme ?? "purple";
          return (
            <div className={`w-full flex-1 bg-${color}-900 `}>
              <div
                className={`responsive-container text-white grid grid-cols-12 `}
              >
                <h2 className="col-span-4 type-preset-3 font-bold pt-sm">
                <LinkText
                          href={`#${section.anchor}`}
                          variant={"default"}
                          color={"white"}
                        >
                  {section.title}
                  </LinkText>
                </h2>
                <div className="col-span-8 pt-md">
                  {section.storiesCollection.items.map((story) => {
                    const anch2 = `#${section.anchor}--${story.anchor}`;
                    return (
                      <div onClick={onClick}>
                        <LinkText
                          href={anch2}
                          variant={"default"}
                          color={"white"}
                        >
                          {story.title}
                        </LinkText>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  };
  export default TableOfContentsSection;