import { LinkText } from "components/atom";
import Image from "next/image";
import logo from "public/images/N logo.png";
import FooterNavData from "./footer_nav_data.js";
import NavaDigest from "./NavaDigest";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <NavaDigest />
      <div className={"bg-navy-900 relative z-4 "}>
        <nav
          aria-label={"secondary"}
          className="responsive-container py-2xl sm:py-4xl grid grid-cols-12 gap-x-md md:gap-x-2xl"
        >
          <div className={"col-span-12 sm:col-span-2 pb-xl"}>
            <Image
              src={logo}
              alt="Nava Logo"
              height={109}
              width={65}
              className=""
            />
          </div>
          <div className={"hidden col-span-0 sm:block  md:col-span-2 lg:col-span-4"}></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 ">
            {FooterNavData[0].map((data) => (
               <div className={"pb-lg"}>
              <LinkText href={data.slug} variant={"default"}  color={"white"}>
                {data.title}
              </LinkText>
              </div>
            ))}
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3">
            {FooterNavData[1].map((data) => (
               <div className={"pb-lg"}>
                <LinkText href={data.slug} variant={"default"} color={"white"}>
                  {data.title}
                </LinkText>
              </div>
            ))}
          </div>
        </nav>
        <div className="bg-navy-600 py-xl">
          <div
            className={
              "responsive-container flex items-center justify-between flex-col-reverse sm:flex-row"
            }
          >
            <p className="text-white font-sans type-preset-8 pt-md sm-pt-0">
              {`©${currentYear} Nava PBC. All rights reserved`}
            </p>
            <div className="flex gap-2xl  type-preset-7">
            <LinkText href={"https://twitter.com/NavaPBC"} variant={"default"} color={"white"}> Twitter</LinkText>
            <LinkText href={"https://www.linkedin.com/company/nava-pbc"} variant={"default"} color={"white"}>LinkedIn</LinkText>
            <LinkText href={"https://www.youtube.com/channel/UClJmJSvy2G_7JPrjlr_taGg/featured"} variant={"default"} color={"white"}>  Youtube</LinkText>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
