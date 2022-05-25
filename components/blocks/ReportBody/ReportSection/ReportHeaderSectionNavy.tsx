import { TealBar } from "components/atom";

const ReportSectionHeaderNavy = ({ title, titleId = null, introduction }) => {
  return (
    <section className="bg-navy-pbr-2020 text-white py-2xl lg:px-6xl relative z-3">
      <div className="responsive-containerpy-xl mx-0">
        <h2 id={titleId} className="max-w-xl font-black type-preset-3">
          {title}
        </h2>
        <TealBar />
        <p className="pt-lg type-preset-5 font-light">{introduction}</p>
      </div>
    </section>
  );
};

export default ReportSectionHeaderNavy;
