import { Button } from "../../atom/Button/Button";
import { MarkdownComponent } from "utils/utils";
import ill from "public/images/Illustrations-for-website-V019 1.png";
import Image from "next/image";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
interface CTABlockInterface {
  id: string;
  title: string;
  body: any;
  image: ContentfulImageAsset;
  buttonText: string;
  buttonPath: string;
  type: string;
}


const CTABlock = ({
  id,
  title,
  body,
  image,
  buttonPath,
  buttonText,
}:CTABlockInterface) => {
  return (
    <div className=" w-full bg-sage-50 " key={id}>
      <div className="responsive-container flex items-center">
      <div className="w-1/2 max-h-[500px] max-w-[500px]">
          <Image
            className=" object-cover "
            src={image?image.url:ill}
            layout="responsive"
          ></Image>
        </div>
        <div className={`w-full lg:w-1/2 px-lg py-md`}>
          <h3 className=" type-preset-2 font-bold  text-sage-600">{title} </h3>
          <p className={`pt-lg  type-preset-2 font-bold text-sage-900 mb-lg`}>
            {<MarkdownComponent content={body} />}
          </p>
          {buttonText && (
            <Button href={buttonPath} variant="white" children={buttonText}/> 
          )}
        </div>
        
      </div>
    </div>
  );
};

export default CTABlock;
