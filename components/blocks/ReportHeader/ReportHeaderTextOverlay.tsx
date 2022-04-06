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
        <h1 className="text-5xl font-bold font-sans py-lg">{reportTheme}</h1>
        <h2 className="text-2xl font-sans py-lg">{title}</h2>
        <a className="text-xl font-sans underline" href={pdfLink}>
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
