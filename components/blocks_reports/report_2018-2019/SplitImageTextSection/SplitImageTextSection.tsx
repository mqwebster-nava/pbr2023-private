
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { ContentfulImageAsset } from "lib/data_models/post_interface";
import Image from "next/image";
import ReportContent, { REPORT_YEAR } from "../../ReportContent/ReportContent";


export interface SplitImageTextSectionInterface {
  title: string;
  image: ContentfulImageAsset;
  introduction: any;
  richBody: any;
  textSide:string;
  colorTheme: string;
  reportYear: REPORT_YEAR
}

const SplitImageTextSection: React.FC<SplitImageTextSectionInterface> = ({
    title,
    image,
    introduction,
    richBody,
    textSide,
    colorTheme,
    reportYear
}) => {
  const variant = colorTheme==="sage" ? "report sage": "report";
  return (
    <section className={`${colorTheme==="sage" ? "bg-sage-50" : ""}`} >
    <ResponsiveContentContainer padding="py-4xl" alignment="center">
        <h2 className="type-preset-3 font-bold  text-sage-pbr">{title}</h2>
       <div className="font-serif type-preset-6">
        <ReportContent 
            docData={introduction.json} 
            docLinks={introduction.links}  
            variant={variant}
            reportYear={reportYear}
            />
        </div>
       <div className="md:hidden block">
         <Image
          src={image.url}
          height={image.height}
          width={image.width}
          className="w-full"
        />
        </div>
    </ResponsiveContentContainer>
      <div className="grid md:grid-cols-2">
        {textSide === "left" && (
          <div className="p-2xl font-serif type-preset-6">
            <ReportContent 
            docData={richBody.json} 
            docLinks={richBody.links} 
            variant={variant}
            reportYear={reportYear}
            />
          </div>
        )}
        <div
          className="hidden md:block sticky top-0 h-screen"
          style={{
            background: `url(${image.url})` + " no-repeat center center",
            backgroundSize: "cover",
          }}
        />
        {textSide === "right" && (
          <div className="p-2xl font-serif type-preset-6">
            <ReportContent 
            docData={richBody.json}
             docLinks={richBody.links}  
             variant={variant} 
             reportYear={reportYear}
             />
          </div>
        )}
      </div>
    </section>
  );
};

export default SplitImageTextSection;
