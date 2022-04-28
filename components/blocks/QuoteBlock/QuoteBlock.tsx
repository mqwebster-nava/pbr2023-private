import Image from "next/image";
import goldIllustration from '../../../public/images/illistration-1.png'

type QuoteBaseColor = "gold" |"purple";
interface QuoteBlockInterface {
  id:string;
  content: string;
  author: string;
  authorRole: string;
  color?: QuoteBaseColor;
}

const QuoteBlock = ({
  id,
  content,
  author,
  authorRole,
  color
}:QuoteBlockInterface) => {
  const baseColor = color ? color : "gold";
  return (
    <div className={`bg-${baseColor}-50`} key={id}>
      <div className="responsive-container py-2xl flex flex-wrap">
        <div className={`w-full lg:w-1/2 flex`}>
            <div className="pr-md">
            <p className={`font-serif pt-lg text-xl  text-${baseColor}-700 mb-md`}>
                {content}
            </p>
            <p className={`font-bold text-${baseColor}-700 font-sans pt-lg`}>{author},<br/>{authorRole}</p>
          </div>
          <div className={`bg-${baseColor}-800 w-1 h-full hidden lg:block`}></div>
        </div>
        <div className={`w-full lg:w-1/2`}>
      {/* //  {(isStorybook)? <Image height={"400px"} width={"400px"} className="max-w-full mix-blend-multiply" src={goldIllustration} alt="me" />            :  */}
            <Image src={goldIllustration} className="mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
