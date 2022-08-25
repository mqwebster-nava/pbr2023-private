import MarkdownComponent from "utils/MarkdownComponent";

const SectionIntro = ({ subsection }) => {
    const bg = subsection.colorTheme ?? "purple";
    return (
      <div
        className={`bg-${bg}-900 w-full min-h-[200vh] `}
      >
        <div
          className="responsive-container max-w-screen-lg"
          id={subsection.anchor}
        >
          <div className="pt-[160px] ">
            <h2 className=" font-black text-white text-7xl pb-2xl " id={`h2-${subsection.anchor}`}>
              {subsection.title}
            </h2>
            <p className="type-preset-5 font-serif text-white pb-[160px]">
            <MarkdownComponent content={subsection.body}/>
            </p>
          </div>
        </div>
      </div>
    );
  };

  
  export default SectionIntro;