import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React from "react";

const ReportSectionHeaderNavy = ({ title, titleId = null, introduction }) => {
  return (
    <section className="bg-navy-800 text-white py-2xl relative z-3">
      <ResponsiveContentContainer padding="py-xl">
        <h2 id={titleId} className="max-w-xl font-black type-preset-3">
          {title}
        </h2>
        <TealBar />
        <p className="pt-lg type-preset-5 font-serif font-light">{introduction}</p>
      </ResponsiveContentContainer>
    </section>
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

export default ReportSectionHeaderNavy;
