
import ContentCard from "components/atom/ContentCard/ContentCard";
import { Button } from "components/atom";
import { BasicPostInterface } from "lib/post_data_models";
import { getContentUrl } from "utils/utils";


interface PostListInterface {
  title?: string;
  buttonText?: string;
  buttonPath?: string;
  posts: Array<BasicPostInterface>;
  body?: string;
  max?: number; 
}

const FilteredPostsList: React.FC<PostListInterface> = ({
    title,
    body,
    posts,
    buttonPath,
    buttonText,
    children,
    max,
  }) => {
    max = max ?? 6;
    return (
      <div className="responsive-container py-xl">
        <div className={`w-full`}>
          {title && <h3 className="font-sans text-lg font-bold">{title} </h3>}
          {body && (
            <p className={`font-sans pt-lg text-base text-gray-800 mb-md`}>
              {body}
            </p>
          )}
          <div
            className={`w-full flex  flex-wrap md:flex-row flex-col  my-2xl -mx-md`}
          >
            {posts.slice(0, max).map((post) => (
              <div className=" w-full md:w-1/2 lg:w-1/3 p-md self-stretch">
                <ContentCard
                type={post.contentType}
                  title={post.title}
                  promoImage={post.promoImage}
                  path={getContentUrl(post.contentType, post.slug)}
                >
                  {post.shortSummary}
                </ContentCard>
              </div>
            ))}
          </div>
          {buttonText && <Button href={buttonPath}>{buttonText}</Button>}
        </div>
      </div>
    );
  
  };

  export default FilteredPostsList;