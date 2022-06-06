export interface ResourceGroupBlockInterface {
  title: string;
  description: string;
}

const color = {
  earthtones: {
    title: "text-dei-brown-base",
    bg: "bg-gradient-to-r from-dei-brown-dark via-dei-brown-light to-dei-brown-lightest",
  },
  "Gender equity": {
    title: "text-dei-green-base",
    bg: "bg-gradient-to-r from-dei-green-base to-dei-green-base",
  },
  Juntos: {
    title: "text-dei-pink-base",
    bg: "bg-gradient-to-r from-dei-blue-lightest via-dei-pink-light to-dei-green-light",
  },
  Kaleidoscope: {
    title: "text-dei-blue-dark",
    bg: "rainbow-gradient",
  },
};

export const ResourceGroupBlock: React.FC<ResourceGroupBlockInterface> = ({
  title,
  description,
}) => {
  const background = color[title] ? color[title].bg : "";
  const textColor = color[title] ? color[title].title : "";
  return (
    <div className="md:max-w-[45%] flex-grow flex flex-col items-stretch  mt-4 mr-4">
      <div className={`h-[10px] ${background}`} />
      <div className="flex-grow flex flex-col items-stretch bg-white p-6">
        <h4 className={`font-bold type-preset-5 mb-lg ${textColor}`}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
