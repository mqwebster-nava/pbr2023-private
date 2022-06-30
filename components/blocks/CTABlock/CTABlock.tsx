import { Button } from "../../atom/Button/Button";
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
  colorTheme?: CTAColorTheme;
  isBottom: boolean
}

const CTABlock = ({
  id,
  title,
  body,
  image,
  buttonPath,
  buttonText,
  colorTheme="plum",
  isBottom=false
}:CTABlockInterface) => {
  const bgColor= classNames({"bg-plum-50": colorTheme=="plum","bg-sage-50": colorTheme=="sage",})
  const headerColor= classNames({"text-plum-900": colorTheme=="plum","text-sage-900": colorTheme=="sage",})
  const subtitleColor= classNames({"text-plum-600": colorTheme=="plum","text-sage-600": colorTheme=="sage",})
  //const layout= classNames({"flex-row-reverse": colorTheme=="plum"})
  return (

    <section className={`relative w-full ${bgColor}`}  key={id}>
      <div className={`responsive-container pt-md flex flex-col md:flex-row justify-start`} >
      <div className={`w-full md:w-1/2  pt-3xl pb-md md:pt-4xl md:pb-3xl `}>
          <h3 className={` type-preset-3 font-bold  ${headerColor}`}>{title} </h3>
          <p className={`pt-sm  type-preset-3 font-bold ${subtitleColor} pb-2xl`}>
            {body}
          </p>
          {buttonText && (
            <Button href={buttonPath} variant="white" children={buttonText}/> 
          )}
        </div>
      <div className=" self-center md:self-end w-full md:w-1/2 max-h-[400px] max-w-[400px] lg:max-h-[500px] lg:max-w-[500px] overflow-hidden align-end">
          <Image
            className="pt-auto"
            src={image.url}
            layout="responsive"
            height={500}
            width={500}
            alt={image.description} // TODO add alt image names for the illustrations
          ></Image>
        </div>
      </div>
      { isBottom &&
      <div className={`absolute left-0 right-0 -bottom-[200px] h-[200px] -z-20 ${bgColor}`}>
      </div>
     }
    </section>
  );
};

export default CTABlock;
