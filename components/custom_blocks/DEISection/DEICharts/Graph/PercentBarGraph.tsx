import classNames from "classnames";

export interface PercentBarGraphInterface {
  percent: string;
  description: string;
  insideBarColor?: string;
}

export const PercentBarGraph: React.FC<PercentBarGraphInterface> = ({
  percent,
  description,
  insideBarColor = "sage",
}) => {
  const insideBar = classNames({
    "bg-sage-700": insideBarColor === "sage",
    "bg-navy-900": insideBarColor === "navy",
    "bg-plum-900": insideBarColor === "plum",
  });
  return (
    <div className="min-h-[140px] w-full mb-xl bg-sage-50">
      <div
        className={`${insideBar} min-h-[inherit] px-2 py-4 text-white`}
        style={{ width: `${percent}%` }}
      >
        <p className="type-preset-3 font-black inline-block">{percent}%</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
