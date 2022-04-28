

import ReactMarkdown from "react-markdown";

export function MarkdownComponent({ content }) {
    return (
      <ReactMarkdown
        children={content}
        // todo add styling here for markdown
        components={{
          ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
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
    if( "postsCollection" in data && "items" in data.postsCollection){
        newData = {
            ...newData,
            posts:data.postsCollection.items.map((item)=>liftData(item))
        }
    }
    return newData;
}


class TwoWayMap {
    constructor(map) {
       this.map = map;
       this.reverseMap = {};
       for(const key in map) {
          const value = map[key];
          this.reverseMap[value] = key;   
       }
    }
    getMap(){return this.map}
    get(key) { return this.map[key]; }
    revGet(key) { return this.reverseMap[key]; }
}

// TODO


export const allTagsSlugIdPair = new TwoWayMap({
    "a-day-at-nava":"Day At Nava",
    "accessibility-and-equity":"Accessibility and Equity",
    "adapting-to-change":"Adapting To Change",
    "agile-development":"Agile Development",
    "apis-and-documentation":"APIs and Documentation",
    "backend-engineering":"Backend Engineering",
    "careers":"Careers",
    "content-strategy": "Content Strategy",
    "continuous-improvement":"Continuous Improvement",
    "crisis-response":"Crisis Response",
    "healthcare":"Healthcare",
    "human-centered-design":"Human-Centered Design",
    "integrated-benefits":"Integrated Benefits",
    "modernization":"Modernization",
    "policy":"Policy",
    "product-management":"Product Management",
    "program-outcomes":"Program Outcomes",
    "scalable-solutions":"Scalable Solutions",
    "unemployment-insurance":"Unemployment Insurance",
    "user-experience-research": "User Experience Research",
    "veterans":"Veterans",
    "what-were-learning":"What We’re Learning"
});