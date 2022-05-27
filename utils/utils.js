

import ReactMarkdown from "react-markdown";

export function MarkdownComponent({ content }) {
    return (
      <ReactMarkdown
        children={content}
        // todo add styling here for markdown
        components={{
          ul: ({ node, ...props }) => <ul className="list-style" {...props} />,
        }}
      />
    );
  };


export function getContentUrl(contentType, slug){
    const contentMap ={
        "Insight": "insights",
        "Case Study": "case-studies",
        "Toolkit":"toolkits",
        "Working at Nava":"working-at-nava",
        "News":"news"
    }
    const contentPart = contentMap[contentType];
    return `/${contentPart}/${slug}`;
}

export function liftData(data){
    if(!data) return data;
    
    let newData = data;
    if ("sys" in data && "id" in data["sys"]){
        newData = {
            id:data.sys.id,
            ...data
        }
    }
    // For Article Post List component
    if( "postsCollection" in data && "items" in data.postsCollection){
        newData = {
            ...newData,
            posts:data.postsCollection.items.map((item)=>liftData(item))
        }
    }

    if( "featureCardsCollection" in data && "items" in data.featureCardsCollection){
      newData = {
          ...newData,
          items:data.featureCardsCollection.items.map((item)=>liftData(item))
      }
    }
    return newData;
}
// Slugify for turning tags into urls
export function slugify(text) {
    return text
      .toString()                           // Cast to string (optional)
      .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                                  // Remove whitespace from both sides of a string (optional)
      .replace(/\s+/g, '-')            // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}
