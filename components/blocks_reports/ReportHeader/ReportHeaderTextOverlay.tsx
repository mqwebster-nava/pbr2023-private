const ReportHeaderTextOverlay = ({
  reportTheme,
  title,
  banner,
  altText,
  pdfLink,
}) => {
  return (
    <section className="flex items-center justify-center bg-navy-500">
      <div className="absolute text-center text-white z-10">
        <h1 className=" type-preset-4 font-bold py-lg">{reportTheme}</h1>
        <h2 className="type-preset-5 py-lg">{title}</h2>
        <a className="type-preset-5 underline" href={pdfLink}>
          View as PDF
        </a>
      </div>
      <img
        src={banner}
        className="relative object-cover opacity-30"
        alt={altText}
      />
    </section>
  );
};

export default ReportHeaderTextOverlay;
