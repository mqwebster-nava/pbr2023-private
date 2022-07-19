import { Button } from "../../atom/Button/Button";
import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";

interface CTABlockInterface {
  id: string;
  title: string;
  body: any;
  image: ContentfulImageAsset;
  buttonText: string;
  buttonPath: string;
  isBottom: boolean
}

const CTABlock = ({
  id,
  title,
  body,
  image,
  buttonPath,
  buttonText,
  isBottom=false
}:CTABlockInterface) => {
  return (
    <section className={`relative w-full bg-plum-50`}  key={id}>
      <div className={`responsive-container pt-md flex flex-col md:flex-row justify-start`} >
      <div className={`w-full md:w-1/2  pt-3xl pb-md md:pt-4xl md:pb-3xl `}>
          <h3 className={` type-preset-3 font-bold text-plum-900`}>{title} </h3>
          <p className={`pt-sm  type-preset-3 font-bold text-plum-600 pb-2xl`}>
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
      <div className={`absolute left-0 right-0 -bottom-[200px] h-[200px] -z-20 bg-plum-50`}>
      </div>
     }
    </section>
  );
};

export default CTABlock;
