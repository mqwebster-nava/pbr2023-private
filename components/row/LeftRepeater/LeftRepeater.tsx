import Image from "next/image";

export interface LeftRepeaterInterface {
  title: string;
  image: StaticImageData;
  buttonText?: string;
  buttonPath?: string;
}

const LeftRepeater: React.FC<LeftRepeaterInterface> = ({
  title,
  image,
  buttonPath,
  buttonText,
  children,
}) => {
  return (
    <div className={"mx-3xl my-2xl"}>
    <div className={`w-full flex`}>
      <div className={`w-1/3 `}>
        <Image src={image} />
      </div>
      <div className={`w-2/3 ml-xl`}>
        <h3 className={`font-sans text-xl `}>{title} </h3>
        <p className={`font-sans pt-lg text-xl text-grey-base`}>{children}</p>
      </div>
    </div>
    </div>
  );
};

export default LeftRepeater;
