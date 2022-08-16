const SectionIntro = ({ subsection }) => {
    const bg = subsection.colorTheme ?? "purple";
    return (
      <div
        className={`bg-${bg}-900 w-full h-screen `}
      >
        <div
          className="responsive-container max-w-screen-lg"
          id={subsection.anchor}
        >
          <div className="pt-[160px] ">
            <h2 className=" font-black text-white text-7xl pb-2xl " id={`h2-${subsection.anchor}`}>
              {subsection.title}
            </h2>
            <p className="type-preset-5 font-serif text-white">
              Veterans who file claims to receive benefits to cover certain health
              issues can sometimes get stuck in a waiting pattern. Nava is working
              with the U.S. Department of Veterans Affairs Office of the CTO’s
              (OCTO) Benefits Delivery Team to build tools that reduce the amount
              of time it takes to process a Veterans’ disability benefits claim.
              We envision a future where Veterans hear back about benefits claims
              in days instead of months, ensuring that they and their families
              receive the healthcare they need in a timely manner.
            </p>
          </div>
        </div>
      </div>
    );
  };

  
  export default SectionIntro;