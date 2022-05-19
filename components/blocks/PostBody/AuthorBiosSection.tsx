
import Image from "next/image";
import { AuthorPostInterface } from "shared_interfaces/post_interface";
//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/
import AuthorFiller from "public/images/author-filler.png"

interface AuthorBioInterface {
    authors: Array<AuthorPostInterface>
}

const AuthorBios = ({authors}:AuthorBioInterface) => {
    return (
      <div className="mt-xl font-sans">
        <h5 className="font-bold type-preset-6">Written By</h5>
        <hr />
        {authors.map((author) => ( 
        <div className="grid grid-cols-9 w-full font-sans type-preset-7 py-md">
            <div className="col-span-2 sm:col-span-1" >
            <Image
              src={author.image? author.image.url : AuthorFiller}
              className="object-cover"
              height={65}
              width={65}
              alt=""
              />
            </div>
            <div className="sm:pl-md col-span-6 sm:col-span-3">
              <h5 className="font-bold">{author.name}</h5>
              <h6 className="text-gray-600">{author.role}</h6>
            </div>
            <div className="col-span-9 sm:col-span-5 sm:pl-md pt-sm sm:pt-0">
            {author.bio}
            </div>
          </div>)
        )}
      </div>
    );
  };

  export default AuthorBios;