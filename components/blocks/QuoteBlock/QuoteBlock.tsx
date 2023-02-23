import classNames from "classnames";
import Image from "next/image";
import QuotePattern from "public/images/quote-marks-gold-900.png";
import QuotePatternPlum from "public/images/quote-marks-plum-300.png";

type QuoteBlockVariant = "Nava Labs(Plum)"| "Default";

interface QuoteBlockInterface {
  id?: string;
  body: string;
  authorName: string;
  authorRole: string;
  variant?:QuoteBlockVariant;
}
const QuoteBlock = ({
  body,
  authorName,
  authorRole,
  variant="Default",
}: QuoteBlockInterface) => {

 const bgColor = classNames ({
    "bg-gold-700": variant !="Nava Labs(Plum)",
    "bg-purple-700": variant =="Nava Labs(Plum)"
  })
  const textColor = classNames ({
    "text-gray-700": variant !="Nava Labs(Plum)",
    "text-white": variant =="Nava Labs(Plum)"
  })

  return (
    <blockquote className={`${bgColor}`}>
      <div className="responsive-container pt-2xl pb-3xl md:pb-4xl md:pt-3xl grid gap-x-2xl grid-cols-6">
        <div className={`col-span-full md:col-span-1 pb-3xl 
        h-[56px] w-[100px] lg:h-[72px] lg:w-[128px] 
        `}>
          <Image
            src={variant =="Nava Labs(Plum)" ? QuotePatternPlum: QuotePattern}
            height={70}
            width={128}
            layout={"responsive"}
            alt="quotation marks"
          ></Image>
        </div>
        <div className={`col-span-full md:col-span-5  flex pt-sm md:pt-0 `}>
          <div className="pr-md">
            <p
              className={`font-sans type-preset-3  ${textColor} font-bold mb-md`}
            >
              {body}
            </p>
            <p className={`font-serif type-preset-6 ${textColor} pt-lg`}>
              {authorName}, {authorRole}
            </p>
          </div>
        </div>
      </div>
    </blockquote>
  );
};

export default QuoteBlock;
