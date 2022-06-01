import { ContentfulImageAsset } from "shared_interfaces/post_interface";

interface CapabilitiesInterface {
  icon: ContentfulImageAsset;
  body: string;
}
interface CapabilitiesSectionInterface {
  title?:string;
  capabilityTitle: string;
  body: string;
  items: Array<CapabilitiesInterface>;
}

const CapabilitiesSection = ({title, capabilityTitle, body, items}:CapabilitiesSectionInterface) => {
  return (
      <div className="bg-sage-50">
    <div className="responsive-container py-xl">
     {title && <h4 className="type-preset-2 font-black font-sans">{title}</h4> }
      <hr className="h-[2px] bg-gray-900"/>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-lg">
        <div className="md:pr-4xl">
          <p className="type-preset-7 text-gray-900 pb-md">Services</p>
          <h4 className="type-preset-4 font-bold pb-md">{capabilityTitle}</h4>
          <p className="type-preset-5 pb-xl">
           {body}
          </p>
        </div>
        <div>
          <p className="type-preset-7 text-gray-900 pb-md">Capabilities</p>
          {
          items.map((cap) => {
            return <div className="bg-white flex my-sm p-xl gap-xl">
                <img 
                src="https://images.ctfassets.net/t2ekr6eg3fr3/3hBHof0lL9fl2Ui7QQdGnD/031cc4c1e72fb98b335ae54f3e2840eb/icon-house.svg"
                height={"25px"}
                width={"25px"}
                />
                <p>
                    {cap.body}
                </p>
            </div>;
          })}
        </div>
      </div>
    </div>
    </div>
  );
};
export default CapabilitiesSection;
