const FooterSiteSection = ({ navDataSection }) => navDataSection.subpages?(
    <div className="w-1/2 md:w-1/5 font-sans p-sm">
      <h4 className="font-bold">{navDataSection.title}</h4>
      {navDataSection.subpages.map((subpage) => (
        <a
          className="block hover:underline"
          key={subpage.title}
          href={`${subpage.slug}`}
        >
          {subpage.title}
        </a>
      ))}
    </div>
  ): (<div className="w-1/2 md:w-1/5 font-sans p-sm">
  <a
    className="block hover:underline font-bold"
    key={navDataSection.title}
    href={`${navDataSection.slug}`}
  >
    {navDataSection.title}
  </a>
  </div>);

  export default FooterSiteSection;