import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import classNames from "classnames";
import ColorTheme from "shared_interfaces/ColorThemes";
import { ReportMetrics } from "./ReportMetrics/ReportMetrics";
import { Button, LinkText } from "components/atom";
import ReportContent, { REPORT_YEAR } from "../../ReportContent/ReportContent";

export interface ReportSectionWMetricsInterface {
  title: string;
  anchor: string;
  colorTheme: ColorTheme;
  image: ContentfulImageAsset;
  intro: string;
  sectionMetrics: Array<MetricInterface>;
  richBody: any;
  links: Array<any>;
  reportYear: REPORT_YEAR
}
export interface MetricInterface {
  number: string;
  description: string;
}

const ReportSectionWMetrics = ({
  title,
  intro,
  richBody,
  anchor,
  colorTheme,
  image,
  sectionMetrics,
  links,
  reportYear
}: ReportSectionWMetricsInterface) => {
  return (
    <section id={anchor}>
      <ReportSectionHeaderNavy title={title} introduction={intro} />
      <Image
        alt={image.description}
        src={image.url}
        height={image.height}
        width={image.width}
        layout="responsive"
      />
      <ReportSectionContentFull
        body={richBody}
        anchor={anchor}
        colorTheme={colorTheme}
        sectionMetrics={sectionMetrics}
        links={links}
        
      />
    </section>
  );
};

const ReportSectionHeaderNavy = ({ title, introduction }) => {
  return (
    <section className="bg-navy-800 text-white py-2xl relative z-3">
      <ResponsiveContentContainer padding="py-xl">
        <h2 className="max-w-xl font-black type-preset-3">{title}</h2>
        <TealBar />
        <p className="pt-lg type-preset-5 font-serif font-light">
          {introduction}
        </p>
      </ResponsiveContentContainer>
    </section>
  );
};

const TealBar = () => (
  <div className="pt-2xl">
    <hr
      style={{ width: "50px" }}
      className="float-left border border-sage-400"
    />
  </div>
);

interface ReportSectionContentFull {
  colorTheme?: ColorTheme;
  title?: string;
  anchor:string;
  body: any;
  sectionMetrics: Array<MetricInterface>;
  links: Array<any>;
}

const ReportSectionContentFull = ({
  colorTheme = "white",
  title = null,
  body,
  anchor,
  sectionMetrics = null,
  links

}: ReportSectionContentFull) => {
  const backgroundClass = classNames({
    "bg-sage-50": colorTheme === "sage",
    "bg-navy-800": colorTheme === "navy",
    "bg-white": colorTheme === "white",
  });
  const variant = colorTheme==="sage" ? "report sage": "report";
  return (
    <div
      className={`${backgroundClass}  `}
    >
      <div className="responsive-container py-2xl grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 ">
        {sectionMetrics && <ReportMetrics metrics={sectionMetrics} />}
          <div className="font-serif">
            {title && <h2 className="type-preset-3 font-bold">{title}</h2>}
            <ReportContent
              docData={body.json}
              docLinks={body.links}
              variant={variant}
              reportYear={"2020"}
            />
          </div>
      </div>
      <div className="hidden lg:block col-start-10 col-span-3  h-full w-full ">
        <ReportSideMenu links={links} activeSection={anchor}/>
      </div>
      </div>
    </div>
  );
};
export default ReportSectionWMetrics;


const ReportSideMenu = ({ links, activeSection }) => {
    return (
      <aside className="bg-gray-100 p-4 sticky top-[100px]">
        <ul>
          <span className="font-bold">On this page:</span>
          {links.map((link, index) => {
           return (
            <li key={`report_side_menu_${index}`} className={`pt-xl text-sage-dark hover:text-sage-base ${activeSection === link.id ? "font-bold" : ""}`}>
              <LinkText href={`#${link.id}`} variant={"default"} color={activeSection === link.id ? "black":"gray"}>{link.text}</LinkText>
            </li>
          )})}
        </ul>
      </aside>
    );
  };
  


/*
headerSize="large"
          headerColor={{ h3: "text-sage-800" }}
*/
