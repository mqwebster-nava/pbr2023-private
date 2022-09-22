export const BlockQuote = ({ children }) => {
  return (
    <blockquote
      className={`py-0 pl-[18px] 
      mt-[40px] mr-0 mb-[40px] -ml-[22px] 
      border-l-[5px] border-sage-600 
      text-sage-900
      before:content-none`}
    >
      {children}
    </blockquote>
  );
};
