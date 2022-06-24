import Image from "next/image";
import QuotePattern from "public/images/pattern block.png";

type QuoteBaseColor = "gold" | "purple";
interface QuoteBlockInterface {
  id:string;
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
  color
}:QuoteBlockInterface) => {
  const baseColor = color ? color : "gold";
  return (
    <blockquote className={`bg-gold-700`}>
      <div className="responsive-container py-2xl md:py-4xl flex flex-wrap">
      <div className={`w-full pb-md`}>
         <Image src={QuotePattern} height={70} width={128} layout={"fixed"} alt="quotation marks"></Image>
       </div>
        <div className={`w-full lg:w-4/5 flex`}>
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
