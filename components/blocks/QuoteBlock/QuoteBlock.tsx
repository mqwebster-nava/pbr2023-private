import Image from "next/image";
import purpleIllustration from '../../../public/images/illistration-1.png'

interface QuoteBlockInterface {
  content: String;
  author: String;
  authorRole: String;
  isStorybook?:boolean;
}

const QuoteBlock: React.FC<QuoteBlockInterface> = ({
  content,
  author,
  authorRole,
  isStorybook
}) => {
  return (
    <div className="bg-purple-lightest">
      <div className="responsive-container py-2xl flex flex-wrap">
        <div className={`w-full lg:w-1/2 flex`}>
            <div className="pr-md">
            <p className={`font-serif pt-lg text-xl  text-purple-base mb-md`}>
                {content}
            </p>
            <p className="font-bold text-purple-base font-sans pt-lg">{author},<br/>{authorRole}</p>
          </div>
          <div className=" bg-purple-dark w-1 h-full hidden lg:block"></div>
        </div>
        <div className={`w-full lg:w-1/2`}>
        {(isStorybook)? <Image height={"400px"} width={"400px"} className="max-w-full mix-blend-multiply" src={purpleIllustration} alt="me" />
                 : 
            <Image src={purpleIllustration} className="mix-blend-multiply" />}
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
