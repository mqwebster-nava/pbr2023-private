

export function getContentUrl(contentType, slug){
    const contentMap ={
        "Insight": "insights",
        "Case Study": "case-studies",
        "Toolkit":"toolkits"
    }
    const contentPart = contentMap[contentType];
    return `/${contentPart}/${slug}`;
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
    "accessibility-and-equity":"Accessibility and Equity",
    "adapting-to-change":"Adapting To Change",
    "agile-development":"Agile Development",
    "apis-and-documentation":"APIs and Documentation",
    "backend-engineering":"Backend Engineering",
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
});