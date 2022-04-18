
import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import React, { Children } from "react";
import { getContentUrl } from "utils/utils";
import { ContentCard, LinkText } from "components/atom";

interface ContentBlockInterface {
     title?: string;
     buttonText?:string;
     buttonPath?:string;
     body?: string;
     posts: any;
     cycleNum?:number;
     max?: number;
}
  
  
  const ContentBlockArticleList: React.FC<ContentBlockInterface> = ({ 
    title,  
    body, 
    posts,
    buttonPath,
    buttonText, 
    cycleNum =Math.floor(Math.random() * 4),
    max = 6,
    children,
    
  }) => {
    return (
      <div className="responsive-container py-xl">
        <div className={`w-full`}>
          {title && <h3 className="font-sans text-3xl md:text-4xl  font-bold">{title} </h3>}
          {body && (
            <p className={`font-sans pt-lg text-xl text-gray-600 mb-sm`}>
              {body}
            </p>
          )}
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-x-lg gap-y-xl my-2xl`}
          >
            {posts.slice(0, max).map((post) =>{
            if(!post.promoImage) cycleNum+=1;
            return ( <div className=" w-full max-w-[400px] self-stretch ">
                <ContentCard
                type={post.contentType}
                  title={post.title}
                  promoImage={post.promoImage}
                  path={getContentUrl(post.contentType, post.slug)}
                  cycleNum={cycleNum}
                >
                  {post.shortSummary}
                </ContentCard>
              </div>
  )})}
          </div>
          
          {buttonPath!=null && posts.length>max && 
           <div className="flex justify-end">
            <LinkText href={buttonPath}>Read more</LinkText>
            </div>}
        </div>
      </div>
    );
  }
    
  export default ContentBlockArticleList;


  /*
  const childrenArray = Children.toArray(children);

  return ( 
     <div className="responsive-container py-2xl">
     <div className={`w-full `}>
      
                {title &&  <h3 className="font-sans text-lg font-bold">{title} </h3> }
                {body && <p className={`font-sans pt-lg text-base text-gray-800 mb-md`}>{body}</p> }
                  <div className={`w-full flex  items-stretch md:flex-row flex-col gap-8 my-3xl `}>
          <div className="w-full md:w-1/3 self-stretch"> {childrenArray[0]} </div>
          <div className="w-full md:w-1/3 self-stretch"> {childrenArray.length>1 && childrenArray[1]} </div>
          <div className="w-full md:w-1/3 self-stretch"> {childrenArray.length>2 && childrenArray[2]} </div>
      </div> 
                  
              {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
          </div>
      </div> 
  );
  */