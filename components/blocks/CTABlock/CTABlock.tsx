import { Button } from "../../atom/Button/Button";
import Newsletter from "./NewsletterBlock";
import { MarkdownComponent } from "utils/utils";
import ill from "public/images/Illustrations-for-website-V019 1.png";
import Image from "next/image";
interface CTABlockInterface {
  id: string;
  title: string;
  body: any;
  buttonText: string;
  buttonPath: string;
  type: string;
}

const CTABlock: React.FC<CTABlockInterface> = (props) => {
  if (props.type === "Newsletter") return <Newsletter></Newsletter>;
  return <DefaultCTABlock {...props}></DefaultCTABlock>;
};

const DefaultCTABlock: React.FC<CTABlockInterface> = ({
  id,
  title,
  body,
  buttonPath,
  buttonText,
  children,
}) => {
  return (
    <div className=" w-full bg-sage-50 " key={id}>
      <div className="responsive-container flex items-center">
      <div className="w-1/2 max-h-[500px] max-w-[500px]">
          <Image
            className=" object-cover "
            src={ill}
            layout="responsive"
          ></Image>
        </div>
        <div className={`w-full lg:w-1/2 px-lg font-sans type-preset-2 font-bold`}>
          <h3 className="  text-sage-600">{title} </h3>
          <p className={`pt-lg  text-sage-900 mb-lg`}>
            {<MarkdownComponent content={body} />}
          </p>
          {buttonText && (
            <Button href={buttonPath} variant="black">
              {buttonText}
            </Button>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default CTABlock;
