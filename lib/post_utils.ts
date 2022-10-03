import { PostEventSpeaker } from "components/blocks/PostEventSpeakersRow/PostEventSpeakersRow";
import { AuthorPostInterface, BasicPostInterface, ContentfulImageAsset, FullPostInterface } from "../shared_interfaces/post_interface";



const formatImageAsset = (imgData) => {
    if(!imgData) return null;
  
    const imgAsset: ContentfulImageAsset =  {
      id: imgData.sys.id,
      url: imgData.url,
      title:imgData.title,
      description:imgData.description,
      width:imgData.width,
      height:imgData.height
    } 
    return imgAsset;
  }

  const formatPosts = (posts) =>{
    return posts.map((post)=>{
      const newPost: BasicPostInterface = {
        __typename:"Post",
        id: post.sys.id,
        contentTags:post.contentTags,
        slug: post.slug,
        title: post.title,
        date: post.date,
        clientName: post.clientName,
        contentType: post.contentType,
        shortSummary: post.shortSummary,
        promoImage: ("promoImage" in post) ? formatImageAsset(post.promoImage): null,
        
      }
      return newPost;
    })
  }
  

  const formatFullPost = (post) =>{
   
    const formattedPost: FullPostInterface = {
      __typename:"Post",
      id: post.sys.id,
      slug: post.slug,
      title: post.title,
      contentTags:post.contentTags,
      clientName: post.clientName,
      longSummary: post.longSummary,
      hideSideNav:post.hideSideNav,
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
      date: post.date,
      contentType: post.contentType,
      shortSummary: post.shortSummary,
      leadImage: ("leadImage" in post) ? formatImageAsset(post.leadImage): null,
      promoImage: ("promoImage" in post) ? formatImageAsset(post.promoImage): null,
      registrationLink: post.registrationLink,
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
  
  export {formatImageAsset, formatPosts, formatFullPost}

