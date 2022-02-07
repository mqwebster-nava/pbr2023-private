
interface PostHeaderProps {
    title: string,
    long_summary: boolean,
    lead_image?: string, // todo make a model for assets
    content_type: string, // todo make this a type?
  }
  
const PostHeader = ({ title, long_summary, lead_image, content_type }:PostHeaderProps)=> {
    console.log(long_summary)
    return ( 
    <div className="w-screen h-96 bg-sage-400"> 
        <h3> {content_type&&"CONTENT TYPE"}</h3>
        <h1> {title}</h1>
        <p>{long_summary}</p>
    </div>  
    );
}
export default PostHeader;
