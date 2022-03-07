import AnchorLink from "components/templates/PostTemplate/AnchorLink";

const SideNavComponent = ({h2Sections, activeSection}) => {
  //const headers = doc.content.filter(node => node.nodeType=="heading-2").map(node=>node.content[0].value);
  return (
    <div className="mt-md  p-lg sticky top-48 border-2 w-fit hidden md:block">
      <h3>On This Page</h3>
      {h2Sections.map((section) => {
        let header = section.title;
        let isActive = activeSection === header;
        return (
          <p className={`font-sans text-blue-500 hover:text-blue-900 ${isActive&&"font-bold"}`}>
            <AnchorLink href={`#${header}`}>{header}</AnchorLink>
          </p>
        );
      })}
    </div>
  );
};

export default SideNavComponent;
