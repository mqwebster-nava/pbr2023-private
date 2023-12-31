import classNames from "classnames";

const Callout = ({
  body,
  colorTheme,
  variant = "statistic",
  attribution = null,
  attributionRole = null,
  isMobileLandscape = false
}) => {

  const textColor = colorTheme=="gold"? "text-gold-darktext" : `text-${colorTheme}-900`;
  
  const borderColor = classNames({
    "border-t-plum-700 border-b-plum-100":colorTheme==="plum",
    "border-t-purple-700 border-b-transparent":colorTheme==="purple",
    "border-t-sage-800 border-b-sage-100":colorTheme==="sage",
     "border-t-navy-600 border-b-navy-100":colorTheme==="navy",
    "border-t-gold-pbrcustomdark border-b-gold-pbrcustomlight": colorTheme==="gold",
  });

  return (
    <aside className={`bg-${colorTheme}-50 pt-md pb-lg `}>
    <blockquote
      className={` border-y-[1px] ${borderColor} w-full pb-md min-h-[100px] md:min-h-[140px]`}
    >
     {variant==="quote" && <div className="pt-lg"><QuoteMarkSVG colorTheme={colorTheme} /></div>}
      <p
        className={`${isMobileLandscape? "type-preset-5": "type-preset-3"} py-md font-serif font-light ${textColor}`}
      >
        {body}
      </p>
      {variant==="quote" && attribution && 
      <p className={`font-serif  ${textColor} type-preset-6 pb-lg`}> 
         <b className="font-bold">{attribution}</b>{attributionRole && `, ${attributionRole}`}
      </p>}
    </blockquote>
    </aside>
  );
};

export default Callout;

const QuoteMarkSVG = ({colorTheme="sage"}) => {
  const quoteColor = colorTheme==="gold"? `fill-gold-pbrcustomdark`: `fill-${colorTheme}-900`
  return (
    <svg
    aria-label=""
      width="68"
      height="38"
      viewBox="0 0 68 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`${quoteColor}`}
        d="M10.9058 0C3.15695 2 0 6.35714 0 12.3571V25.1429H14.3498V11.6429H8.03587V11.5C8.03587 8.42857 9.11211 6.78571 13.6323 5.57143L10.9058 0ZM28.5561 0C20.8072 2 17.6502 6.35714 17.6502 12.3571V25.1429H32V11.6429H25.6861V11.5C25.6861 8.42857 26.7623 6.78571 31.2825 5.57143L28.5561 0Z"
      />
      <path
      className={`${quoteColor}`}
        d="M57.0942 37.1445C64.843 35.1445 68 30.7874 68 24.7874L68 12.0017L53.6502 12.0017L53.6502 25.5017L59.9641 25.5017L59.9641 25.6445C59.9641 28.716 58.8879 30.3588 54.3677 31.5731L57.0942 37.1445ZM39.4439 37.1445C47.1928 35.1445 50.3498 30.7874 50.3498 24.7874L50.3498 12.0017L36 12.0017L36 25.5017L42.3139 25.5017L42.3139 25.6445C42.3139 28.716 41.2377 30.3588 36.7175 31.5731L39.4439 37.1445Z"
        
      />
    </svg>
  );
};
