import Image from "next/image";
import QuotePattern from "public/images/pattern block.png";

type QuoteBaseColor = "gold" | "purple";
interface QuoteBlockInterface {
  id: string;
  body: string;
  authorName: string;
  authorRole: string;
  color?: QuoteBaseColor;
}

const QuoteBlock = ({
  id,
  body,
  authorName,
  authorRole,
  color,
}: QuoteBlockInterface) => {
  const baseColor = color ? color : "gold";
  return (
    <blockquote className={`bg-gold-700`}>
      <div className="responsive-container py-2xl md:py-4xl grid gap-x-2xl grid-cols-6">
        <div className={`col-span-full md:col-span-1 pb-4xl 
        h-[56px] w-[100px] lg:h-[72px] lg:w-[128px] 
        `}>
          <Image
            src={QuotePattern}
            height={70}
            width={128}
            layout={"responsive"}
            alt="quotation marks"
          ></Image>
        </div>
        <div className={`col-span-full md:col-span-5  flex`}>
          <div className="pr-md">
            <p
              className={`font-sans type-preset-3  text-gray-900 font-bold mb-md`}
            >
              {body}
            </p>
            <p className={`font-serif type-preset-6 text-gray-900 pt-lg`}>
              {authorName}, {authorRole}
            </p>
          </div>
        </div>
      </div>
    </blockquote>
  );
};

export default QuoteBlock;
