import Image from "next/image";
import logo from "public/images/N logo.png";
import FooterSiteSection from "./FooterSiteSection";
import FooterNavData from "./footer_nav_data.js";
import NavaDigest from "./NavaDigest";



const Footer = () => {
  let currentYear =  new Date().getFullYear();

  return (
    <footer>
      <NavaDigest />
      <div className={"bg-navy-900 relative z-4"}>
        <div className="responsive-container py-2xl">
          <div className=" font-sans flex flex-col sm:flex-row sm:gap-4xl pb-xl">
            <div className={"pt-md"}>
              <Image
                src={logo}
                alt="Nava Logo"
                height={109}
                width={65}
                className=""
                
              />
            </div>
            <div className="type-preset-5 text-white flex-1">
            Nava's mission is to make government services simple, effective, and accessible to all.
            </div>
          </div>
          <nav aria-label={"secondary"} className="flex flex-wrap text-white  my-xl ">
           {FooterNavData.map((data)=>
           <FooterSiteSection  key={data.title} navDataSection={data}/>
           )}
          
          </nav>
        </div>
        <div className="bg-navy-600 py-xl">
          <div
            className={"responsive-container flex items-center justify-between flex-col-reverse sm:flex-row"}
          >
            <p className="text-white font-sans type-preset-8">
              {`©${currentYear} Nava PBC. All rights reserved`}
            </p>
            <div className="flex gap-2xl text-white font-bold type-preset-6">
             <a href="https://twitter.com/NavaPBC" > Twitter</a>
             <a href="https://www.linkedin.com/company/nava-pbc">  LinkedIn</a>
             <a href="https://www.youtube.com/channel/UClJmJSvy2G_7JPrjlr_taGg/featured"> Youtube</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
