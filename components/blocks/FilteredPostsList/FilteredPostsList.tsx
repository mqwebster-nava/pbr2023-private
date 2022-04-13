
import ContentCard from "components/atom/ContentCard/ContentCard";
import { Button, LinkText } from "components/atom";
import { BasicPostInterface } from "lib/post_data_models";
import { getContentUrl } from "utils/utils";


interface PostListInterface {
  title?: string;
  buttonText?: string;
  buttonPath?: string;
  posts: Array<BasicPostInterface>;
  body?: string;
  max?: number; 
  // Cycling through colors
  cycleNum?: number; 
}

const FilteredPostsList: React.FC<PostListInterface> = ({
    title,
    body,
    posts,
    buttonPath,
    buttonText,
    cycleNum=Math.floor(Math.random() * 4),
    children,
    max,
  }) => {
    max = max ?? 6;
    return (
      <div className="responsive-container py-xl">
        <div className={`w-full`}>
          {title && <h3 className="font-sans text-4xl  font-bold">{title} </h3>}
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
          
          {buttonText && posts.length>max && 
           <div className="flex justify-end">
            <LinkText href={buttonPath}>{buttonText}</LinkText>
            </div>}
        </div>
      </div>
    );
  
  };

  export default FilteredPostsList;