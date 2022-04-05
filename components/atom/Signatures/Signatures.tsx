import Image from "next/image";
import classNames from "classnames";
import rohanSignature from "/public/images/pbrs/rohan-signature.png";
import shaSignature from "/public/images/pbrs/sha-signature.png";

export interface SignaturesProps {
  isGreenBG: boolean;
}

export const Signatures: React.FC<SignaturesProps> = ({ isGreenBG }) => {
  const textColor = classNames({
    "text-sage-pbc-2019": isGreenBG,
    "text-navy-900": !isGreenBG,
  });

  return (
    <div
      className={`${textColor} grid md:grid-cols-2 responsive-container-content pt-2xl`}
    >
      <div>
        <Image src={rohanSignature} layout="fixed" height="80" width="136" />
        <p className="text-base font-sans py-md">Rohan Bhobe, CEO</p>
      </div>
      <div>
        <Image src={shaSignature} layout="fixed" height="80" width="165" />
        <p className="text-base font-sans py-md">Sha Hwang, COO</p>
      </div>
    </div>
  );
};
