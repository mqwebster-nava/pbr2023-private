import { Button } from "components/atom";

const ReportHeaderHero = ({ title, banner, altText, pdfLink }) => {
  return (
    <header className="py-6 grid justify-items-center text-center px-xl bg-pbr-ecru-base">
      <h1 className="text-navy-900 font-bold md:font-black type-preset-1">{title}</h1>
      <div className="h-4/5">
        <img src={banner} alt={altText} />
      </div>
      {pdfLink && <Button href={pdfLink}>View as PDF</Button>}
    </header>
  );
};

export default ReportHeaderHero;
