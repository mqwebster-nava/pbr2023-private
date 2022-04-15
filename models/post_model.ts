
export interface ContentfulImageAsset{
  id:string;
  url:string;
  width?:Number;
  height?:Number;
  title?:string;
  description?:string;
}
export interface BasicPostInterface{
    id:string;
    slug:string;
    title:string;
    date:string;
    contentType:string;
    clientName:string;
    contentTags:Array<string>;
    shortSummary:string;
    promoImage:ContentfulImageAsset;
}
export interface FullPostInterface extends BasicPostInterface{
    longSummary:string;
    hideSideNav:boolean;
    authors:Array<AuthorPostInterface>;
    body:any;
}

export interface AuthorPostInterface{
    name:string;
    slug:string;
    role?:string;
    bio?:string;
    posts?:Array<BasicPostInterface>;
}



/*
This returns the article as a list of sections, which can more easily be used with the 
intercept observer.
*/

export function sortDocIntoH2Sections(doc){
    let buffer = [];
    let sections = [];
    let titles = ["Intro"]
    doc.content.forEach((node)=>{
      // if it is the end of 1 section
      if(node.nodeType=="heading-2"){
        sections.push(buffer);
        titles.push(node.content[0].value);
        buffer = [];
      }
      buffer.push(node);
    });
    sections.push(buffer);
    let i = -1;
    let output = sections.map((section)=>{
      i+=1;
     return {
       title: titles[i],
       doc: {...doc, content:section},
       ref:null,
       
      }
    });
    return  output;
  }