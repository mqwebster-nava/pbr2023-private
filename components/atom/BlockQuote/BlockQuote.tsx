export const BlockQuote = ({ children }) => {
  return (
    <blockquote
      className={`py-0 pl-[18px] 
      mt-[40px] mr-0 mb-[40px] -ml-[22px] 
      border-l-[5px] border-sage-pbr-2020-light 
      text-sage-pbr 
      before:content-none`}
    >
      {children}
    </blockquote>
  );
};
