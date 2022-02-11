import ContentfulApi from "lib/contentful";
import LargeHero from "components/row/LargeHero/LargeHero";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import { getContentUrl } from "utils/utils";
export default function AuthorPosts({ posts, name, role, bio }) {
  return (
    <div>
      <div>
        <h1 className="mx-3xl my-2xl">Author: {name}</h1>
        <CardsGrid title={"Author Posts"}>
          {posts.map((post) => (
            <ContentCard title={post.title} path={getContentUrl(post.contentType, post.slug)}>
              {post.shortSummary}
            </ContentCard>
          ))}
        </CardsGrid>
      </div>
    </div>
  );
}

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllAuthorSlugs();
  //console.log(postSlugs);
  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const author = await ContentfulApi.getPostsByAuthor(params.slug);

  const posts = author.linkedFrom.postCollection.items;
  const { name, role, bio } = author;
  console.log(name, role, bio);
  //console.log(posts);
  return {
    props: {
      posts,
      name,
      role,
      bio,
    },
  };
}
