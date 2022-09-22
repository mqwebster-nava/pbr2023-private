export const PullQuote = ({ children }) => {
  return (
    <blockquote className="py-xl text-sage-900 before:content-none">
      <img src="/images/pbrs/quote_mark.svg" alt=""  />
      {children}
    </blockquote>
  );
};
