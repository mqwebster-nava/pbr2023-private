import { Button } from "components/atom";

const ReportHeaderHero = ({ title, banner, altText, pdfLink }) => {
  return (
    <section className="py-6 grid justify-items-center text-center px-xl bg-ecru-pbr-2019">
      <h1 className="text-navy-900 font-black text-6xl">{title}</h1>
      <div className="h-4/5">
        <img src={banner} alt={altText} />
      </div>
      {pdfLink && <Button href={pdfLink}>View as PDF</Button>}
    </section>
  );
};

export default ReportHeaderHero;
