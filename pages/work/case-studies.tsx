import ContentfulApi from "lib/contentful";



export default function CaseStudies({posts}) {
    console.log(posts)
    return ( <div> 
        <h1>Case Studies </h1>
        {posts.map((post)=>{
            return (
            <a href={`/case-studies/${post.slug}`}>
                <h3>{post.title}</h3>
                 <p>{post.shortSummary}</p>
            </a>
        )
        })}

    </div>  );
}


export async function getStaticProps(context) {
    const posts = await ContentfulApi.getPostsByContentType("Case Study");
    
    return {
      props: {
          posts
      }, // will be passed to the page component as props
    }
  }