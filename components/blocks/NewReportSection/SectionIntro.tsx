import MarkdownComponent from "utils/MarkdownComponent";

const SectionIntro = ({ section }) => {
    const colorTheme = section.colorTheme ?? "purple";
    let textColor = section.colorTheme==="gold" ? "black" : "white";
    return (
      <section id={`${section.anchor}`} >
      <div className={`bg-${colorTheme}-900 w-full min-h-screen `}>
      <div
        className="responsive-container mr-auto lg:pl-[108px]"
        id={section.anchor}
      >
        <div className="pt-[160px] ">
          <h2
            className={`font-black text-${textColor} text-7xl pb-3xl max-w-screen-md mr-auto`}
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