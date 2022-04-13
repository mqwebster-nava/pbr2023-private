const ReportHeaderTextOverlay = ({
  reportTheme,
  title,
  banner,
  altText,
  pdfLink,
}) => {
  return (
    <section className="flex items-center justify-center bg-navy-pbr-2018">
      <div className="absolute text-center text-white z-10">
        <h1 className="sm:text-5xl text-2xl font-bold py-lg">{reportTheme}</h1>
        <h2 className="sm:text-2xl text-lg py-lg">{title}</h2>
        <a className="sm:text-xl text-lg underline" href={pdfLink}>
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
