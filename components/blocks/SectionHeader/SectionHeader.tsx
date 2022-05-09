import classNames from "classnames";
import { MarkdownComponent } from "utils/utils";

// TODO move as much to tailwind

export type SectionColorVariant = "default" | "gold";
export interface SectionHeaderInterface {
  title: string;
  id: string;
  subtitle?: string;
  variant?: SectionColorVariant;
}

const SectionHeader: React.FC<SectionHeaderInterface> = ({
  id,
  title,
  subtitle,
  children,
  variant = "default",
}) => {
  const bg = classNames({
    "bg-gold-50": variant=="gold"
  })

  const TitleBlock = () => {
    return (
      <div className="lg:w-3/4 w-full">
        <h1
          className={`w-full font-sans text-navy-900 type-preset-2 font-black mt-xl mb-xl`}
        >
          {title}
        </h1>
      </div>
    );
  };
  const BodyBlock = () => {
    return (
      <div className={`flex`}>
        <div className={`md:w-3/4 type-preset-3  font-serif text-navy-900`}>
          {<MarkdownComponent content={subtitle} />}
        </div>
      </div>
    );
  };
  const ColoredLine = () => {
    return variant == "gold" ? (
      <div className="flex mb-xl">
        <div className="bg-gold-900 h-[12px] w-[46px]"></div>
        <div className="bg-gold-700 h-[12px] w-[46px]"></div>
        <div className="bg-gold-500 h-[12px] w-[46px]"></div>
      </div>
    ) : (
      <div className="flex mb-xl">
        <div className="bg-purple-900 h-[12px] w-[46px]"></div>
        <div className="bg-purple-500 h-[12px] w-[46px]"></div>
        <div className="bg-purple-300 h-[12px] w-[46px]"></div>
      </div>
    );
  };

  return (
    <div className={`${bg}`}>
    <div className={`responsive-container pt-4xl pb-2xl`} key={id}>
      <TitleBlock />
      <ColoredLine/>
      <BodyBlock />
    </div>
    </div>
  );

};
export default SectionHeader;
