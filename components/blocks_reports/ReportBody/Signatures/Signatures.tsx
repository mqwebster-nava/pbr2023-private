import Image from "next/image";
import classNames from "classnames";
import rohanSignature from "/public/images/pbrs/rohan-signature.png";
import shaSignature from "/public/images/pbrs/sha-signature.png";
import jodiSignature from "/public/images/pbrs/jodi-signature.png";
import darcySignature from "/public/images/pbrs/darcy-signature.png";
export interface SignaturesProps {
  isGreenBG?: boolean;
  isNew?: boolean;
  fullList?: boolean;
  margin?: string;
}

const fullListOfSignatures = [
  {
    name: "Rohan Bhobe",
    titleAbbreviation: "CEO",
    title: "Chief Executive Officer",
    image: rohanSignature,
    width: 136,
  },
  {
    name: "Sha Hwang",
    titleAbbreviation: "COO",
    title: "Chief Operating Officer",
    image: shaSignature,
    width: 158,
  },
  {
    name: "Jodi Leo",
    titleAbbreviation: "CDO",
    title: "Chief Delivery Officer",
    image: jodiSignature,
    width: 150,
  },
  {
    name: "Darcy Williamson",
    titleAbbreviation: "CFO",
    title: "Chief Financial Officer",
    image: darcySignature,
    width: 150,
  },
];

export const Signatures: React.FC<SignaturesProps> = ({
  isGreenBG,
  isNew =false,
  fullList = false,
  margin = "",
}) => {
  const textColor = classNames({
    "text-sage-pbr": isGreenBG === true,
    "text-gray-900": isGreenBG === false && isNew===false,
    "text-purple-900":isNew===true
  });

  const signatures = fullList
    ? fullListOfSignatures
    : fullListOfSignatures.slice(0, -2);
  const numberOfSignatures = signatures.length;

  const gridColumns = classNames({
    "grid-cols-2": true,
    "md:grid-cols-2": numberOfSignatures <= 2,
    "lg:grid-cols-4": numberOfSignatures > 2,
  });

  return (
    <div className={`py-xl ${margin}`}>
      <div className={`grid ${gridColumns} w-full`}>
        {signatures.map((signature, index) => (
          <div key={index}>
            <Image
              src={signature.image}
              layout="fixed"
              height={'80'}
              width={signature.width}
              alt={`Image of ${signature.name}'s signature`}
            />
            <p className={`${textColor} type-preset-5 py-md font-serif font-bold `}>
              {signature.name} <br/> <span className={`font-light ${isNew && "font-purple-500"}`}>{signature.titleAbbreviation}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
