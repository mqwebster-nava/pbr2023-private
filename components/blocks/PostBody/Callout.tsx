


const Callout = ({ body, colorTheme, variant="statistic",attribution=null}) => {
    return (
      <div
        className={`bg-${colorTheme}-50 px-sm border-y-[1px] border-${colorTheme}-900 w-full flex justify-start my-md min-h-[100px] md:min-h-[140px]`}
      >
        <p className={`py-md type-preset-3 font-serif font-light text-${colorTheme}-900`}>{body}</p>
      </div>
    );
  };
  
  export default Callout;
  