
import Image from "next/image";
import { AuthorPostInterface } from "shared_interfaces/post_interface";
//https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/
import AuthorFiller from "public/images/author-filler.png"
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import React from "react";
import { LinkText } from "components/atom";

interface AuthorBioInterface {
    authors: Array<AuthorPostInterface>
}

const AuthorBios = ({authors}:AuthorBioInterface) => {
    const isNotNavaPBC = authors.length!=1 || authors[0].name !="Nava PBC";
    return isNotNavaPBC && (
      <div className="mt-xl font-sans">
        <h5 className="font-bold type-preset-6 pb-xs">Written by</h5>
       <HorizontalLine variant="light"/>
        {authors.map((author) => ( 
        <div className="grid grid-cols-9 w-full font-sans type-preset-7 py-md" key={author.name}>
            <div className="col-span-2 sm:col-span-1 mr-sm" >
            <Image
              src={author.image? author.image.url : AuthorFiller}
              className="object-cover"
              height={65}
              width={65}
              alt={author.image? author.image.description : "Nava Logo"} //TODO create alt text for nava logo
              />
            </div>
            <div className="sm:pl-md col-span-7 sm:col-span-8 block sm:grid sm:grid-cols-8">
              <div className="w-full sm:col-span-3 pr-sm">
              <h5 className="font-bold">
              <LinkText
                    href={`/authors/${author.slug}`}
                    variant={"underlined"}
                  >
                    {author.name}
              </LinkText>
             </h5>
              <h6 className="text-gray-700">{author.role}</h6>
            </div>
              <div className="w-full sm:col-span-5 sm:pt-0 pt-sm">
              {author.bio}
              </div>
            </div>
            
          </div>)
        )}
      </div>
    );
  };

  export default AuthorBios;