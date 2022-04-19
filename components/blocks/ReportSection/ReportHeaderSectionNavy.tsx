import { TealBar } from "components/atom";
import { ResponsiveContainer } from "../../../components/blocks";

const ReportSectionHeaderNavy = ({ title, titleId = null, introduction }) => {
  return (
    <section className="bg-navy-pbr-2020 text-white py-2xl lg:px-6xl relative z-3">
      <ResponsiveContainer contentClass="py-xl mx-0">
        <h2 id={titleId} className="max-w-xl font-black text-3xl">
          {title}
        </h2>
        <TealBar />
        <p className="pt-lg text-lg font-light">{introduction}</p>
      </ResponsiveContainer>
    </section>
  );
};

export default ReportSectionHeaderNavy;
