import { ContentCardInterface } from "./ContentCard";
import Image from "next/image";



const CardWithImage: React.FC<ContentCardInterface> = ({
    title,
    path,
    promoImage,
    children,
  }) => {
      return ( 
        <a href={`${path}`} className="block p-6 max-w-sm h-full bg-white border border-gray-200 hover:bg-gray-100 ">
        <div className="relative h-64 w-full mb-md">
            <Image layout={"fill"} className="object-fill" src={promoImage.url}></Image>
        </div>
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 font-sans">{title}</h5>
        <p className=" text-base font-sans text-gray-700 dark:text-gray-400">{children}</p>
    </a>
    );
  }
  export default CardWithImage;

