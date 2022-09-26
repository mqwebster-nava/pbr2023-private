import { Button } from "components/atom";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";
import Image from "next/image";
import banner from "public/images/pbrs/2019-head.png"
const ReportHeaderHero2019 = ({ title,buttonPath, image }:PageHeaderInterface) => {
  return (
    <header className="py-6 grid justify-items-center text-center px-xl bg-pbr-ecru-base">
      <h1 className="text-gray-900 font-bold md:font-black type-preset-1">{title}</h1>
      <div className="h-4/5">
        <Image 
            src={image.url} 
            alt={image.description}
            height={image.height}
            width={image.width}
            />
      </div>
      {<b></b> && <Button href={buttonPath}>View as PDF</Button>}
    </header>
  );
};

export default ReportHeaderHero2019;
