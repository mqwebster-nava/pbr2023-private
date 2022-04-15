import ContentfulApi from "lib/contentful";
import LargeHero from "components/blocks_core/PageHeader/LargeHero";
import CardsGrid from "components/blocks_core/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import { getContentUrl } from "utils/utils";
import { FilteredPostsList, PlaceholderPageHeader } from "components/blocks_core";

export default function AuthorPosts({ posts, name, role, bio }) {
  return (
    <div>
      <PlaceholderPageHeader title={"Author"} subtitle={name}/>
     <FilteredPostsList
        max={50}
        posts={posts}
      ></FilteredPostsList>
    </div>
  );
}

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllAuthorSlugs();
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

  return {
    props: {
      posts,
      name,
      role,
      bio,
    },
  };
}
