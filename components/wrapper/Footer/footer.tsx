import Image from "next/image";
import logo from "public/images/N logo.png";
import FooterSiteSection from "./FooterSiteSection";
import NavData from "../Navbar/navbar_data";
import NavaDigest from "./NavaDigest";




const Footer = () => {
  let currentYear =  new Date().getFullYear();

  return (
    <>
      <NavaDigest />
      <div className={"bg-navy-900 relative z-4"}>
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
            <div className="type-preset-5 text-white flex-1">
              We envision a world where our interactions with government are
              delightful and we are confident in government’s ability to achieve
              the goals we set for it.
            </div>
          </div>
          <div className="flex flex-wrap text-white  my-xl ">
           {NavData.map((data)=><FooterSiteSection navDataSection={data}/>)}
          
          </div>
        </div>
        <div className="bg-navy-600 py-xl">
          <div
            className={"responsive-container flex items-center justify-between flex-col-reverse sm:flex-row"}
          >
            <p className="text-white font-sans type-preset-8">
              {`©${currentYear} Nava PBC. All rights reserved`}
            </p>
            <div className="flex gap-2xl text-white font-bold type-preset-6">
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
