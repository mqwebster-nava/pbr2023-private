// TODO move as much to tailwind
export interface SectionHeaderInterface {
  title: string;
}

const LargeHero: React.FC<SectionHeaderInterface> = ({
  title,
  children,
}) => {
  const TitleBlock = () => {
    return (
      <div className="lg:w-3/5 w-full">
        <h1
          className={`w-full font-sans text-black  md:text-2xl text-xl font-black mt-xl mb-3xl`}
        >
          {title}
        </h1>
        <div className="w-full flex"></div>
      </div>
    );
  };
  const BodyBlock = () => {
    return (
      <div className={`flex justify-end`}>

        <div className={`md:w-2/3 text-lg md:text-xl font-serif text-black`}>{children}</div>
      </div>
    );
  };

  return (
    <div className="responsive-container py-2xl">
      <TitleBlock />
      <BodyBlock />
    </div>
  );
};
export default LargeHero;
