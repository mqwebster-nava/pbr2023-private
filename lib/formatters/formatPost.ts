import { PostEventSpeaker } from "components/blocks/PostEventSpeakersRow/PostEventSpeakersRow";
import { AuthorPostInterface, FullPostInterface } from "lib/data_models/post_interface";
import { formatImageAsset } from "./formatImageAsset";

  export const formatFullPost = (post) =>{
   if(!post) return null;
    const formattedPost: FullPostInterface = {
      __typename:"Post",
      id: post.sys.id,
      slug: post.slug,
      title: post.title,
      contentTags:post.contentTags,
      clientName: post.clientName,
      longSummary: post.longSummary,
      hideSideNav:post.hideSideNav,
      hideHeroPattern:post.hideHeroPattern,
      authors: post.authorsCollection?.items?.map((author)=>{
        const formattedAuthor: AuthorPostInterface ={
          name: author.name,
          slug: author.slug,
          bio: author.bio,
          role: author.role,
          image: formatImageAsset(author.image)
        }
        return formattedAuthor;
      }),
      body: post.body,
      date: post.date ?? post.sys.firstPublishedAt,
      contentType: post.contentType,
      shortSummary: post.shortSummary,
      leadImage: ("leadImage" in post) ? formatImageAsset(post.leadImage): null,
      promoImage: ("promoImage" in post) ? formatImageAsset(post.promoImage): null,
      socialImage: ("socialImage" in post) ? formatImageAsset(post.socialImage): null,
      eventInfo: post.eventInfo && {
        ...post.eventInfo,
        speakers: post.eventInfo.eventSpeakersCollection?.items?.map((speaker)=>{
          const formattedSpeaker: PostEventSpeaker ={
            name: speaker.name,
            role: speaker.role,
            company: speaker.company,
            image: formatImageAsset(speaker.image)
          }
          return formattedSpeaker;
        }),
      }
    }
    return formattedPost;
  }
  