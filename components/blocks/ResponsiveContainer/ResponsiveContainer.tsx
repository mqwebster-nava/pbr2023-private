export const ResponsiveContainer = ({
  children,
  containerClass = "",
  contentClass = "",
}) => {
  return (
    <div className={`responsive-container ${containerClass}`}>
      <div className={`responsive-container-content ${contentClass}`}>
        {children}
      </div>
    </div>
  );
};

export default ResponsiveContainer;
