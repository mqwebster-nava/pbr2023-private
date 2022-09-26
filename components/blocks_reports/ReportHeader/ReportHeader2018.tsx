import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHeader2018 = ({
  title, subtitle, variant, image, buttonPath, buttonText
}:PageHeaderInterface) => {
  return (
    <section className="flex items-center justify-center bg-navy-500">
      <div className="absolute text-center text-white z-10">
        <h1 className=" type-preset-4 font-bold py-lg">{subtitle}</h1>
        <h2 className="type-preset-5 py-lg">{title}</h2>
        <a className="type-preset-5 underline" href={buttonPath}>
          View as PDF
        </a>
      </div>
      <img
        src={image.url}
        className="relative object-cover opacity-30"
        alt={image.description}
      />
    </section>
  );
};

export default ReportHeader2018;
