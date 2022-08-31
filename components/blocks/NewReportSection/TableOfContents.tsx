import { LinkText } from "components/atom";
const TableOfContentsSection = ({ contentBlocks, onClick=()=>{} }) => {
   // Have the bottom rule not have a hr
    return (
      <section className={` w-full h-screen flex flex-col `}>
        {contentBlocks.filter((entry)=>entry.__typename==="ReportIllustrationOverlaySubsection").map((section) => {
          const color = section.colorTheme ?? "purple";
          const textColor = section.colorTheme==="gold"?"black" : "white";
          return (
            <div className={`w-full flex-1 bg-${color}-900 `}>
              <div
                className={`responsive-container  text-white grid grid-cols-12 pl-[108px] gap-lg`}
              >
                <h2 className="col-span-4 type-preset-3 font-bold pt-sm">
                <LinkText
                          href={`#${section.anchor}`}
                          variant={"default"}
                          color={textColor}
                        >
                  {section.title}
                  </LinkText>
                </h2>
                <div className={`col-span-8 pt-md divide-y divide-${textColor}`}>
                  {section.storiesCollection.items.map((story) => {
                    const anch2 = `#${section.anchor}--${story.anchor}`;
                    const title = story.shortTitle ?? story.title;
                    return (
    
                      <div onClick={onClick} className="font-serif py-sm">
                        <LinkText
                          href={anch2}
                          variant={"default"}
                          color={textColor}
                        >
                          {title}
                        </LinkText>
                        
                      </div>
                    
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
         <div className={`w-full flex-1 bg-white `}>
              <div
                className={`responsive-container  text-black grid grid-cols-12 pl-[108px] gap-lg`}
              >
                <h2 className="col-span-4 type-preset-3 font-bold pt-sm">
                <LinkText
                          href={``}
                          variant={"default"}
                          color={'black'}
                        >
                 Download PDF
                  </LinkText>
                </h2>
            
              </div>
            </div>
      </section>
    );
  };
  export default TableOfContentsSection;