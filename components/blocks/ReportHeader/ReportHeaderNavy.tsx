import { TealBar } from "components/atom";

const ReportHeaderNavy = ({ title }) => {
  return (
    <section className="bg-navy-pbr-2020 text-white relative z-3">
      <div className="responsive-container">
        <div className="py-xl px-md max-w-xl pl-10">
          <h1 className="font-black text-6xl">{title}</h1>
          <TealBar />
        </div>
      </div>
    </section>
  );
};

export default ReportHeaderNavy;
