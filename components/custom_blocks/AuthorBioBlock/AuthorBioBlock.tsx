import { AuthorPostInterface } from "shared_interfaces/post_interface";
import Image from "next/image";


const AuthorBioBlock = ({bio, image, slug }:AuthorPostInterface) => {
    return (
    <div className="responsive-container grid grid-cols-12 py-3xl">
        <div className="col-span-7">
            <p>
                {bio}
            </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 ">
            <div className="max-h-[253px] max-w-[350px]">
           {image &&
            <Image 
                src={image.url}
                height={253}
                width={350}
                layout={"responsive"}
                objectFit="cover"
                alt={image.description}
            />
            }
            </div>
        </div>
    </div>
    );
}



export default AuthorBioBlock;
