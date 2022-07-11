import { Button } from "components/atom";
import Image from "next/image";
import banner from "public/images/pbrs/2019-head.png"
const ReportHeaderHero = ({ title, altText, pdfLink }) => {
  return (
    <header className="py-6 grid justify-items-center text-center px-xl bg-pbr-ecru-base">
      <h1 className="text-gray-900 font-bold md:font-black type-preset-1">{title}</h1>
      <div className="h-4/5">
        <Image 
            src={banner.src} 
            alt={altText}
            height={banner.height}
            width={banner.width}
            />
      </div>
      {pdfLink && <Button href={pdfLink}>View as PDF</Button>}
    </header>
  );
};

export default ReportHeaderHero;
