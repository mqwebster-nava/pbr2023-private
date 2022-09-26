
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import Image from "next/image";
import PostContent from "components/blocks/PostBody/PostContent";


export interface SplitImageTextSectionInterface {
  title: string;
  image: ContentfulImageAsset;
  introduction: any;
  richBody: any;
  textSide:string;
  colorTheme: string;
}

const SplitImageTextSection: React.FC<SplitImageTextSectionInterface> = ({
    title,
    image,
    introduction,
    richBody,
    textSide,
    colorTheme
}) => {
  return (
    <section className={`${colorTheme==="sage" ? "bg-sage-50" : ""}`} >
    <ResponsiveContentContainer padding="py-4xl" alignment="center">
        <h2 className="type-preset-3 font-bold text-sage-pbr">{title}</h2>
        <PostContent docData={introduction.json} docLinks={introduction.links} />
       
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
          <div className="p-2xl">
            <PostContent docData={richBody.json} docLinks={richBody.links}/>
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
          <div className="p-2xl">
            <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SplitImageTextSection;
