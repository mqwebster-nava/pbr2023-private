import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";
import Image from "next/image";



const ReportHero2020 = ({
  title, image,
}:PageHeaderInterface) => {
  return (
    <>
    <section className="bg-navy-800 text-white relative z-3">
      <div className="responsive-container">
        <div className={` py-4xl mx-0 max-w-xl`}>
          <h1 className="max-w-xl font-bold md:font-black type-preset-1">{title}</h1>
          <TealBar />
        </div>
      </div>
    </section>
    <Image
          alt={image.description}
          src={image.url}
          width={image.width}
          height={image.height}
          layout="responsive"
      />
    </>
  );
};

const TealBar = () => (
  <div className="pt-2xl">
    <hr
      style={{ width: "50px" }}
      className="float-left border border-sage-400"
    />
  </div>
);


export default ReportHero2020;
