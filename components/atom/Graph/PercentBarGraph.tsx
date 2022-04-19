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
    "bg-sage-dei": insideBarColor === "sage",
    "bg-navy-dei": insideBarColor === "navy",
  });
  return (
    <div className="min-h-[140px] w-full mb-xl bg-sea-foam-base">
      <div
        className={`${insideBar} min-h-[inherit] px-2 py-4 text-white`}
        style={{ width: `${percent}%` }}
      >
        <h2 className="text-3xl font-black inline-block">{percent}%</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
