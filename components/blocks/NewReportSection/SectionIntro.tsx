import MarkdownComponent from "utils/MarkdownComponent";

const SectionIntro = ({ section }) => {
    const colorTheme = section.colorTheme ?? "purple";
    let textColor = section.colorTheme==="gold" ? "black" : "white";
    return (
      <section id={`${section.anchor}`} className="h-auto lg:h-[200vh]">
      <div className={`bg-${colorTheme}-900 w-full lg:min-h-screen block lg:sticky lg:top-[70px]`}>
      <div
        className="responsive-container  "
        id={section.anchor}
      >
        <div className="lg:pt-[160px] pt-3xl ">
        <p
            className={`text-${textColor} type-preset-1 pb-xl max-w-screen-md mr-auto font-serif`}
          >
            Theme 1
          </p>
          <h2
            className={`font-black text-${textColor} md:text-7xl type-preset-1 pb-3xl max-w-screen-md mr-auto`}
            id={`h2-${section.anchor}`}
          >
            {section.title}
          </h2>
          <p className={`type-preset-5 font-serif font-light text-${textColor} pb-[160px] max-w-screen-md`}>
            <MarkdownComponent content={section.body} />
          </p>
          

        </div>
      </div>
    </div>
    </section>
    );
  };

  
  export default SectionIntro;