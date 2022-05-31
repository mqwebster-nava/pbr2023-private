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
    "bg-sage-400": insideBarColor === "sage",
    "bg-navy-900": insideBarColor === "navy",
  });
  return (
    <div className="min-h-[140px] w-full mb-xl bg-sage-50">
      <div
        className={`${insideBar} min-h-[inherit] px-2 py-4 text-white`}
        style={{ width: `${percent}%` }}
      >
        <h2 className="type-preset-3 font-black inline-block">{percent}%</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};