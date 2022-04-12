import { TealBar } from "components/atom";

const ReportSectionHeaderNavy = ({ title, titleId = null, introduction }) => {
  return (
    <section className="bg-navy-pbr-2020 text-white py-2xl lg:px-6xl relative z-3">
      <div className="responsive-container">
        <div className="py-xl max-w-xl">
          <h2 id={titleId} className="font-black text-3xl">
            {title}
          </h2>
          <TealBar />
          <p className="text-lg font-light">{introduction}</p>
        </div>
      </div>
    </section>
  );
};

export default ReportSectionHeaderNavy;
