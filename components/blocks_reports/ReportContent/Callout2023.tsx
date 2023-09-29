import classNames from "classnames";

const QuoteEl = ({
  body,
  colorTheme,
  attribution = null,
  attributionRole = null,
}) => {
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

  const textColor = colorTheme=="gold"? "text-gold-pbrcustomdark" : `text-${colorTheme}-900`;

  return (
    <aside className={`bg-${colorTheme}-50 pt-md pb-lg `}>
    <blockquote
      className={`w-full pb-md min-h-[100px] md:min-h-[140px]`}
    >
     <div className="pt-lg"><QuoteMarkSVG colorTheme={colorTheme} /></div>
      <p
        className={`py-lg font-serif font-light leading-[20px] ${textColor}`}
      >
        {body}
      </p>

      {attribution &&
      <p className={`flex flex-col font-sans ${textColor} text-xs leading-[140%] pb-lg`}> 
         <span className="font-bold">{attribution}</span>
         <span>{attributionRole && attributionRole}</span>
      </p>}
    </blockquote>
    </aside>
  );
};

const StatEl = ({body, anchor, colorTheme}) => {
  const borderStyles = classNames({
    "border-gold-pbrcustomdark": colorTheme == "gold",
    "border-plum-200": colorTheme == "plum",
    "border-sage-200": colorTheme == "sage",
    "border-purple-200": colorTheme == "purple",
    "border-navy-200": colorTheme == "navy",
  });

  const statList = body.split("\n\n---\n\n");

  return (
    <div>
      {statList && <div className={`flex flex-col lg:px-4`}>
        {statList.map((stat, i) => {
          let stats = stat.split("\n");
          return (
            <div
              key={`${anchor}-statGroup-${i}`}
              className={`w-full h-full flex flex-col bg-${colorTheme}-50 relative`}
            >
              {i > 0 && <hr className={`my-8 w-3/5 h-[1px] border-t-[1px] ${borderStyles}`} />}
              <div className={`flex flex-col gap-2`}>
                {stats.map((statItem, j) => {
                  const statistic = statItem.split("__")[1];
                  const statisticBefore = statItem.split("__")[0];
                  const statisticAfter = statItem.split("__")[2];
                  return (
                    <div
                      key={`${anchor}-statGroup${i}Item-${j}`}
                      className={`inline-flex flex-col gap-0 text-xs`}
                    >
                      <span>{statisticBefore}</span>
                      <span
                        className={`text-4xl md:text-[48px] !leading-none font-serif font-light`}
                      >
                        {statistic}
                      </span>
                      <span className="pt-2">{statisticAfter}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>}
    </div>
  )};

  const Callout2023 = ({variant, body, anchor, colorTheme, attribution=null, attributionRole=null}) => {
    return (
      <div>
        {variant == 'quote' ?
          <QuoteEl body={body} colorTheme={colorTheme} attribution={attribution} attributionRole={attributionRole} /> :
          <StatEl body={body} anchor={anchor} colorTheme={colorTheme} />
        }
      </div>
    )
  }

export default Callout2023;
