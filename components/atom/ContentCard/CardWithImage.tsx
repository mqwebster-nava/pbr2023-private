import { ContentCardInterface } from "./ContentCard";
import Image from "next/image";



const CardWithImage: React.FC<ContentCardInterface> = ({
    title,
    path,
    promoImage,
    children,
  }) => {
      return ( 
        <a href={`${path}`} className="block max-w-sm h-full ">
        <div className="relative h-52 w-full mb-md">
            <Image layout={"fill"} className="object-cover" src={promoImage.url}></Image>
        </div>
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 font-sans">{title}</h5>
        <p className=" text-base font-sans text-gray-700 dark:text-gray-400">{children}</p>
    </a>
    );
  }
  export default CardWithImage;

