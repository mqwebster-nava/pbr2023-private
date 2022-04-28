import Image from "next/image";
import logo from "public/images/N logo.png";
import brandDirection from "public/images/Nava-Brand Pattern-Direction1-Heavy-White-V01@4x 3.svg";
import brandTerrain from "public/images/Nava-Brand Pattern-Terrain3-Medium-White-V01@4x 2.svg";
import { Button } from "components/atom";
const NavData = [
  {
    title: "Insights",
    slug: "/insights",
  },
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

const NavaDigest = () => {
  return (
    <div className=" bg-sage-400 font-sans">
      <div className="responsive-container text-white pt-2xl">
        <h3 className="font-sans text-3xl font-bold">Nava Digest</h3>

        <div className=" w-full pt-lg flex pb-2xl flex-col md:flex-row">
          <p className={`w-full md:w-1/2 font-sans mr-3xl text-base  mb-md`}>
            Get Nava updates on new open roles, government partnerships,
            learnings, and news from the broader civic tech community.
          </p>
          <div className="w-full md:w-1/2 ">
            <label htmlFor="newsletter-sign-up" className="block">
              email
            </label>
            <div className="flex gap-md w-full">
              <input
                id="newsletter-sign-up"
                type="text"
                placeholder="Your email address"
                className=" text-black w-full p-sm rounded-sm"
              />
              <Button href={null} variant="black">
                {" "}
                Subscribe{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image src={brandTerrain} height={100} width={100} alt="" />
          <Image src={brandDirection} height={100} width={100} alt="" />
        </div>
      </div>
    </div>
  );
};
const FooterSiteSection = ({ navDataSection }) => (
  <div className="">
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
);

const Footer = () => {
  return (
    <>
      <NavaDigest />
      <div className={"bg-navy-900 "}>
        <div className="responsive-container py-2xl">
          <div className=" font-sans flex flex-col sm:flex-row sm:gap-4xl pb-xl">
            <div className={"pt-md"}>
              <Image
                src={logo}
                alt="Nava"
                height={109}
                width={65}
                className=""
              />
            </div>
            <div className="text-xl md:text-2xl text-white flex-1">
              We envision a world where our interactions with government are
              delightful and we are confident in government’s ability to achieve
              the goals we set for it.
            </div>
          </div>
          <div className="flex flex-wrap text-white  my-xl ">
            <div className="w-1/2 md:w-1/5 font-sans p-sm">
              <a
                className="block hover:underline font-bold"
                key={NavData[0].title}
                href={`${NavData[0].slug}`}
              >
                {NavData[0].title}
              </a>
            </div>

            <div className="w-1/2 md:w-1/5 font-sans p-sm">
              <FooterSiteSection navDataSection={NavData[1]} />
            </div>
            <div className="w-1/2 md:w-1/5 font-sans p-sm">
              <FooterSiteSection navDataSection={NavData[2]} />
            </div>
            <div className="w-1/2 md:w-1/5 font-sans p-sm">
              <FooterSiteSection navDataSection={NavData[3]} />
            </div>
            <div className="w-1/2 md:w-1/5 font-sans p-sm">
              <FooterSiteSection navDataSection={NavData[4]} />
            </div>
          </div>
        </div>
        <div className="bg-navy-600 py-xl">
          <div
            className={"responsive-container flex items-center justify-between flex-col-reverse sm:flex-row"}
          >
            <p className="text-white font-sans text-xs">
              ©2021 NavaPBC. All rights reserved.
            </p>
            <div className="flex gap-2xl text-white font-bold text-base">
              <a>Twitter</a>
              <a>Medium</a>
              <a>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
