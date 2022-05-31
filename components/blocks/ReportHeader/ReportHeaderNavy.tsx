import { TealBar } from "components/atom";

const ReportHeaderNavy = ({ title, maxWidth = "" }) => {
  return (
    <section className="bg-navy-800 text-white relative z-3">
      <div className="responsive-container">
        <div className={` py-4xl mx-0 ${maxWidth}`}>
          <h1 className="max-w-xl font-black type-preset-1">{title}</h1>
          <TealBar />
        </div>
      </div>
    </section>
  );
};

export default ReportHeaderNavy;