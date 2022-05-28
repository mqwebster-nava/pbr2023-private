import { getContentUrl } from "utils/utils";
import { ContentCard, LinkText } from "components/atom";
import classNames from "classnames";
import ContentGrid, { ListLayout } from "../ContentGrid/ContentGrid";

interface ArticleListInterface {
  id: string;
  title?: string;
  buttonText?: string;
  buttonPath?: string;
  body?: string;
  posts: any;
  cycleNum?: number;
  max?: number;
  layout?: ListLayout;
}

const ContentBlockArticleList = ({
  id,
  title,
  body,
  posts,
  buttonPath,
  buttonText,
  cycleNum = Math.floor(Math.random() * 4),
  max = 6,
  layout = "feature",
}: ArticleListInterface) => {
  const GridStyle = classNames({
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3": (layout= "default"),
    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4": (layout= "feature"),
  });
  posts = posts.filter((post) => post != null);
  return (
    <section key={id}>
      <div className="responsive-container pt-xl" key={id}>
        <div className={`w-full border-t-2 pt-md flex justify-between`}>
          <div>
            {title && (
              <h3 className="font-sans type-preset-3  font-bold">{title} </h3>
            )}
            {body && (
              <p
                className={`font-sans pt-lg type-preset-5 text-gray-700 mb-sm`}
              >
                {body}
              </p>
            )}
          </div>
          <div>
          {buttonPath != null && (
       
          <LinkText href={buttonPath} variant="large arrow">
            Read more
          </LinkText>
      )}
          </div>
        </div>
      </div>
      <ContentGrid
        id={"id"}
        items={posts}
        contentType={"posts"}
        layout={layout}
        cycleNum={cycleNum}
      />
     
    </section>
  );
};

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
