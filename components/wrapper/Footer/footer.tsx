import Image from "next/image";
import logo from "public/images/Nava-Logomark-All-White-V01.png";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg"
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg"

const NavData = [
  {
    title: "Mission",
    subpages: [
      { title: "Impact", slug: "/impact" },
      { title: "Values", slug: "/values" },
    ],
  },
  {
    title: "Work",
    subpages: [
      { title: "Services", slug: "/services" },
      { title: "Case studies", slug: "/case-studies" },
      { title: "Toolkits", slug: "/toolkits" },
    ],
  },
  {
    title: "Insights",
    slug: "/insights",
  },
  {
    title: "Careers",
    subpages: [
      { title: "Working at Nava", slug: "/working-at-nava" },
      { title: "Open roles", slug: "/open-roles" },
    ],
  },
  {
    title: "About",
    subpages: [
      { title: "Nava's story", slug: "/story" },
      { title: "Our people", slug: "/people" },
      { title: "Diversity, equity, and inclusion", slug: "/dei" },
      { title: "News", slug: "/news" },
    ],
  },
];
const FooterSiteSection = ({navDataSection}) => (
  <div className="py-sm">
    <h4 className="font-bold">{navDataSection.title}</h4>
    {navDataSection.subpages.map((subpage)=>(
        <a className="block hover:underline" key={subpage.title}
        href={`${subpage.slug}`}>{subpage.title}</a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className={"bg-navy-900 "}>
     
      <div className="responsive-container pb-md">
        <div className="flex">
          <Image src={brandTerrain} height={100} width={100}></Image>
          <Image src={brandDirection} height={100} width={100}></Image>

        </div>
        <div className="flex flex-wrap text-white  my-xl ">
          <div className="w-full md:w-1/3 font-sans">
            <Image src={logo} ></Image>
          </div>

          <div className="w-1/2 md:w-1/6 font-sans p-sm">
           <FooterSiteSection navDataSection={NavData[0]}/>
          </div>
          <div className="w-1/2 md:w-1/6 font-sans p-sm">
          <FooterSiteSection navDataSection={NavData[4]}/>
          </div>
          <div className="w-1/2 md:w-1/6 font-sans p-sm">
            <FooterSiteSection navDataSection={NavData[3]}/>
          </div>
          <div className="w-1/2 md:w-1/6 font-sans p-sm">
            <FooterSiteSection navDataSection={NavData[1]}/>
          </div>
        </div>
        
        <hr className=" border-white" />
        <div>
          <p className="text-white font-sans text-xs">
            ©2021 NavaPBC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
