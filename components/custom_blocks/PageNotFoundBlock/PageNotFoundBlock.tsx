/*
Page Not Found

- Block shown on the /404 and /500 pages when the user goes to pages that don't exist
- It's set up in the 404 and 500 pages rather than being in contentful
*/


import { Button } from "components/atom/Button/Button";
import React from "react";
import ill from "public/images/Not-Found-Image.png";
import { ContentfulImageAsset } from "lib/data_models/post_interface";
import Image from "next/image";

const image: ContentfulImageAsset = {
  id: "2noBSMs0a4cEnhGkcWIxdC",
  url: ill.src,
  width: ill.width,
  height: ill.height,
  title: "Purple Nava Logo",
  description: "An illustration of an old man",
};

export default function PageNotFoundBlock() {
  return (
    <section className="bg-gold-50">
      <div className={`responsive-container w-full flex flex-col md:flex-row-reverse justify-between py-4xl`}>
      <div className={`w-full md:w-1/2 md:max-w-[478px] max-w-[200px]`}>
          <Image
            objectFit={"fill"}
            height={image.height}
            width={image.width}
            layout={"responsive"}
            src={image.url}
            alt={image.description}
          />
        </div>
        <div className={`w-full md:w-1/2 flex justify-center flex-col`}>
          <h1 className={`font-sans type-preset-3 font-bold pt-lg`}>
            Page not found...{" "}
          </h1>
          <p className={`font-sans pt-lg type-preset-5 font-text-body-color pb-2xl`}>
            {
              "Sorry, the page you are looking for doesn’t exist or has been moved. "
            }
          </p>
          {
            <Button href={"/"} variant="outlined">
              {"Go Back to Home"}
            </Button>
          }
        </div>
        
      </div>
    </section>
  );
}
