import AnchorLink from "components/atom/AnchorLink/AnchorLink";


const SideNavComponent = ({h2Sections, activeSection}) => {

  return (
    <div className="mt-md  p-lg sticky top-48 border-2 w-full max-w-[240px]  hidden md:block bg-white">
      <h3 className="font-sans font-bold">On This Page</h3>
      <hr/>
      {h2Sections.map((section) => {
        let header = section.title;
        let isActive = activeSection === header;
        return (
          <p className={`font-sans text-sage-dark hover:text-sage-base ${isActive&&"font-bold"}`}>
            <AnchorLink href={`#${header}`}>{header}</AnchorLink>
          </p>
        );
      })}
    </div>
  );
};

export default SideNavComponent;
