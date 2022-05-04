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
  isStorybook
}:ContentBlockInterface) => {

  return (
    <div className={"responsive-container py-2xl"} key={id}>
    <div className={`w-full flex flex-col md:flex-row`}>
      <div className={`w-full md:w-2/3 `}>
       { isStorybook ? <Image height={"300px"} width={"300px"} src={image} /> :
            <Image src={image} />
        }
      </div>
      <div className={`w-full md:w-1/3 md:ml-xl flex justify-between flex-col`}>
        <div>
        <h3 className={`font-sans type-preset-5 font-bold `}>{title} </h3>
        <p className={`font-sans pt-lg type-preset-6 text-gray-800`}>{body}</p>
        </div>
        {buttonText && <Button  href={buttonPath}>{buttonText}</Button> }
      </div>
    </div>
    </div>
  );
};

export default LeftRepeater;
