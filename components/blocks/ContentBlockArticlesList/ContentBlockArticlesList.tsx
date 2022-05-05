
import { getContentUrl } from "utils/utils";
import { ContentCard, LinkText } from "components/atom";
import classNames from "classnames";


type ListVariant = "feature" | "default";
interface ArticleListInterface {
     id:string;
     title?: string;
     buttonText?:string;
     buttonPath?:string;
     body?: string;
     posts: any;
     cycleNum?:number;
     max?: number;
     variant?: ListVariant;
}
  
  
  const ContentBlockArticleList = ({ 
    id,
    title,  
    body, 
    posts,
    buttonPath,
    buttonText, 
    cycleNum =Math.floor(Math.random() * 4),
    max = 6,
    variant = "feature"
    
  }: ArticleListInterface) => {

    const GridStyle = classNames({
      "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3": variant = "default",
      "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4": variant = "feature",
    })


    posts = posts.filter((post)=>post!=null);
    return (
      <div className="responsive-container py-xl" key={id}>
        <div className={`w-full`}>
          <hr className={`pb-sm`}/>
          {title && <h3 className="font-sans type-preset-3  font-bold">{title} </h3>}
          {body && (
            <p className={`font-sans pt-lg type-preset-5 text-gray-600 mb-sm`}>
              {body}
            </p>
          )}
          <div
            className={`w-full ${GridStyle} gap-x-lg gap-y-xl my-2xl`}
          >
            {posts.slice(0, max).map((post, i) =>{
            if(!post.promoImage) cycleNum+=1;
           
            return ( <div className={`w-full self-stretch ${i==0 && "lg:col-span-2"}`} key={post.id}>
                <ContentCard
                 variant = {(variant=="default" || i>3) ? "third" : i==0 ? "half" : "quarter" }
                  kicker = {post.contentType=="Case Study" && post.clientName}
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
            <LinkText href={buttonPath} variant="large arrow">Read more</LinkText>
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
      
                {title &&  <h3 className="font-sans type-preset-5 font-bold">{title} </h3> }
                {body && <p className={`font-sans pt-lg type-preset-6 text-gray-800 mb-md`}>{body}</p> }
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