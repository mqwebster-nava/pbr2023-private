
import Image from "next/image";
import { AuthorPostInterface } from "shared_interfaces/post_interface";

//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/
import AuthorFiller from "public/images/author-filler.png"

const AuthorBios = (authors: Array<AuthorPostInterface>) => {
    return (
      <div className="mt-xl font-sans">
        <h5 className="font-bold type-preset-6">Written By</h5>
        <hr />
        {authors.map((author) => ( 
        <div className="flex w-full font-sans type-preset-7 pt-md">
            <div className="w-[125px]" >
            <Image
                  src={author.image? author.image.url : AuthorFiller}
                  className="object-cover"
                  height={65}
                  width={65}
                  alt=""
              />
            </div>
            <div className="pl-md w-[400px]">
              <h5 className="font-bold">{author.name}</h5>
              <h6 className="text-gray-600">{author.role}</h6>
            </div>
            <div className="grow pl-md">
            {author.bio}
            </div>
          </div>)
        )}
      </div>
    );
  };

  export default AuthorBios;