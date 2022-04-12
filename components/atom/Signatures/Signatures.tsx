import Image from "next/image";
import classNames from "classnames";
import rohanSignature from "/public/images/pbrs/rohan-signature.png";
import shaSignature from "/public/images/pbrs/sha-signature.png";
import jodiSignature from "/public/images/pbrs/jodi-signature.png";
export interface SignaturesProps {
  isGreenBG?: boolean;
  fullList?: boolean;
  asContainer: boolean;
}

export const Signatures: React.FC<SignaturesProps> = ({
  isGreenBG = false,
  fullList = false,
  asContainer = false,
}) => {
  const textColor = classNames({
    "text-sage-pbr": isGreenBG,
    "text-navy-900": !isGreenBG,
  });

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
  ];

  const signatures = fullList
    ? fullListOfSignatures
    : fullListOfSignatures.slice(0, -1);
  const numberOfSignatures = signatures.length;

  const container = classNames({
    "responsive-container-content": asContainer === false,
    "responsive-container": asContainer === true,
  });

  const gridColumns = classNames({
    "grid-cols-1": true,
    "md:grid-cols-2": numberOfSignatures <= 2,
    "lg:grid-cols-3": numberOfSignatures > 2,
  });

  return (
    <div className={`${container} py-xl`}>
      <div className={`grid ${gridColumns} justify-items-left max-w-lg`}>
        {signatures.map((signature, index) => (
          <div key={index}>
            <Image
              src={signature.image}
              layout="fixed"
              height="80"
              width={signature.width}
            />
            <p className={`${textColor} text-base py-md`}>
              {signature.name}, {signature.titleAbbreviation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
