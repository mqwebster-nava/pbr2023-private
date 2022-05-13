import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import { ContentBlockInterface } from "./ContentBlockLinkToPage";

const LeftRepeater: React.FC<ContentBlockInterface> = ({
  id,
  title,
  body,
  image,
  buttonPath,
  buttonText,
}:ContentBlockInterface) => {

  return (
    <div className={"responsive-container py-2xl"} key={id}>
    <div className={`w-full flex flex-col md:flex-row`}>
      <div className={`w-full md:w-1/2 md:pr-4xl`}>
     <Image objectFit={"cover"} height={image.height} width={image.width}layout={"responsive"} src={image.url} className="max-w-[478px]" /> 
      </div>
      <div className={`w-full md:w-1/2 md:ml-xl flex justify-center flex-col`}>
       {title && <h3 className={`font-sans type-preset-3 font-bold `}>{title} </h3> }
        <p className={`font-sans pt-lg type-preset-5 text-gray-800 pb-2xl`}>{body}</p>
        {buttonText && <Button  href={buttonPath} variant="outlined">{buttonText}</Button> }
      </div>
    </div>
    </div>
  );
};

export default LeftRepeater;
