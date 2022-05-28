import { Button } from "../../atom/Button/Button";
import { MarkdownComponent } from "utils/utils";
import sageIll from "public/images/Illustrations-for-website-V019 1.png";
import plumIll from "public/images/plum cta illustration.png";
import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import classNames from "classnames";


type CTAColorTheme =   "plum" | "sage";
interface CTABlockInterface {
  id: string;
  title: string;
  body: any;
  image: ContentfulImageAsset;
  buttonText: string;
  buttonPath: string;
  colorTheme?: CTAColorTheme
}


const CTABlock = ({
  id,
  title,
  body,
  image,
  buttonPath,
  buttonText,
  colorTheme="plum"
}:CTABlockInterface) => {
  const bgColor= classNames({"bg-plum-50": colorTheme=="plum","bg-sage-50": colorTheme=="sage",})
  const headerColor= classNames({"text-plum-900": colorTheme=="plum","text-sage-900": colorTheme=="sage",})
  const subtitleColor= classNames({"text-plum-600": colorTheme=="plum","text-sage-600": colorTheme=="sage",})
  const layout= classNames({"flex-row-reverse": colorTheme=="plum"})
  
  const img = colorTheme=="plum"?plumIll:sageIll;

  return (
    <section className={` w-full ${bgColor}`}  key={id}>
      <div className={`responsive-container flex justify-start items-center ${layout}`} >
      <div className="w-1/2 max-h-[500px] max-w-[500px]">
          <Image
            src={img}
            layout="responsive"
            height={500}
            width={500}
            alt="Illustration" // TODO add alt image names for the illustrations
          ></Image>
        </div>
        <div className={`w-full lg:w-1/2 px-lg py-lg`}>
          <h3 className={` type-preset-2 font-bold  ${headerColor}`}>{title} </h3>
          <p className={`pt-lg  type-preset-2 font-bold ${subtitleColor} mb-lg`}>
            {<MarkdownComponent content={body} />}
          </p>
          {buttonText && (
            <Button href={buttonPath} variant="white" children={buttonText}/> 
          )}
        </div>
        
      </div>
    </section>
  );
};

export default CTABlock;
