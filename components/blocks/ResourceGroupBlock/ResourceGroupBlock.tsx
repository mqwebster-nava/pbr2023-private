export interface ResourceGroupBlockInterface {
  title: string;
  description: string;
}

const color = {
  earthtones: {
    title: "text-brown-base",
    bg: "bg-gradient-to-r from-brown-dark via-brown-light to-brown-lightest",
  },
  "Gender equity": {
    title: "text-green-base",
    bg: "bg-gradient-to-r from-green-base to-green-base",
  },
  Juntos: {
    title: "text-pink-base",
    bg: "bg-gradient-to-r from-blue-lightest via-pink-light to-green-light",
  },
  Kaleidoscope: {
    title: "text-blue-dark",
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
        <h2 className={`font-bold text-lg mb-lg ${textColor}`}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
