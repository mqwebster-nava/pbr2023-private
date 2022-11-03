import { ContentfulImageAsset } from "lib/data_models/post_interface";
import Image from "next/image";
import React from "react";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
interface CapabilitiesInterface {
  icon: ContentfulImageAsset;
  body: string;
}
interface CapabilitiesSectionInterface {
  title?: string;
  capabilityTitle: string;
  body: string;
  items: Array<CapabilitiesInterface>;
}

const defaultIcon: ContentfulImageAsset = {
  id: "3hBHof0lL9fl2Ui7QQdGnD",
  url: "https://images.ctfassets.net/t2ekr6eg3fr3/3hBHof0lL9fl2Ui7QQdGnD/031cc4c1e72fb98b335ae54f3e2840eb/icon-house.svg",
  width: 38,
  height: 38,
  title: "icon-house",
  description: "Icon of a house",
};

const CapabilitiesSection = ({
  title,
  capabilityTitle,
  body,
  items,
}: CapabilitiesSectionInterface) => {
  return (
    <div className="bg-sage-50">
      <div className="responsive-container py-xl">
        {title && (
          <h3 className="type-preset-4 font-black font-sans pb-md">{title}</h3>
        )}
       <HorizontalLine variant="light"/>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-xl md:gap-x-2xl">
          <div className="">
            <p className="type-preset-7 text-gray-900 md:pb-lg pb-sm">Services</p>
            <h4 className="type-preset-4 font-bold pb-sm md:pb-lg">{capabilityTitle}</h4>
            <p className="type-preset-5 pb-2xl">{body}</p>
          </div>
          <div>
            <p className="type-preset-7 font-text-body-color md:pb-xl pb-sm">Capabilities</p>
            {items.map((cap) => {
              const icon = cap.icon ?? defaultIcon;
              return (
                <div className="bg-white flex my-sm p-xl gap-xl" key={cap.body}>
                  <img
                    src={icon.url}
                    height={"25px"}
                    width={"25px"}
                    className={"mb-auto mt-[6px]"}
                    alt={""}
                  ></img>
                  <p>{cap.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CapabilitiesSection;
