import Image from "next/image";
import classNames from "classnames";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import ColorTheme from "shared_interfaces/ColorThemes";


export interface SignaturesProps {
    signatures: Array<SignatureInterface>;
    colorTheme?: ColorTheme;
    margin?: string;
}

export interface SignatureInterface {
    name: string;
    role:string;
    titleAbbreviation: string;
    image: ContentfulImageAsset;
    width?:number;
  }
  

export const Signatures: React.FC<SignaturesProps> = ({
    signatures,
     colorTheme="default",
     margin=""
}) => {
  const textColor = classNames({
    "text-sage-pbr": colorTheme==="sage",
    "text-gray-900": colorTheme==="default",
    "text-purple-900": colorTheme==="purple"
  });


  const numberOfSignatures = signatures.length;

  const gridColumns = classNames({
    
    "grid-cols-2 md:grid-cols-3": true,
    "lg:grid-cols-4": numberOfSignatures > 3,
  });

  return (
    <div className={`pt-2xl pb-xl ${margin}`}>
      <div className={`grid ${gridColumns} w-full`}>
        {signatures.map((signature, index) => (
          <div key={index} className="max-w-[300px]">
            <Image
              src={signature.image.url}
              height={signature.image.height}
              width={signature.image.width}
              alt={`Image of ${signature.name}'s signature`}
            />
            <p className={`${textColor} type-preset-6 pb-md font-serif font-bold `}>
              {signature.name} <br/> <span className={`font-light ${colorTheme==="purple" && "font-purple-500"}`}>{signature.titleAbbreviation}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
