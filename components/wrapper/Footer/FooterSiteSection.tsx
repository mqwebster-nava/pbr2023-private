const FooterSiteSection = ({ navDataSection }) => navDataSection.subpages?(
    <div className="w-1/2 md:w-1/5 font-sans p-sm" key={navDataSection.title}>
      <h4 className="font-bold pb-sm">{navDataSection.title}</h4>
      {navDataSection.subpages.map((subpage) => (
        <a
          className="block hover:underline pb-sm"
          key={subpage.title}
          href={`${subpage.slug}`}
        >
          {subpage.title}
        </a>
      ))}
    </div>
  ): (<div className="w-1/2 md:w-1/5 font-sans pb-sm" key={navDataSection.title}>
  <a
    className="block hover:underline font-bold"
    href={`${navDataSection.slug}`}
  >
    {navDataSection.title}
  </a>
  </div>
  );

  export default FooterSiteSection;