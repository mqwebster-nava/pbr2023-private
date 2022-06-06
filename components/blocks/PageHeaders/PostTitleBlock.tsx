
const TitleBlock = ({ title, subtitle, body, textColor }) => {
    return (
      <div >
        <h1 className={` font-sans type-preset-1  ${textColor} font-bold md:font-black`}>
          {title}
        </h1>
        <p
          className={` text-white font-sans  type-preset-1 sm:pr-xl pr-0 md:pr-4xl font-bold md:font-black mr-xl pb-md`}
        >
          {subtitle}
        </p>
        {body && (
          <p className="font-serif font-light type-preset-4 py-lg text-white">
            {body}
          </p>
        )}
      </div>
    );
  };

export default TitleBlock;
  