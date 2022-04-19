

/*
This returns the article as a list of sections, which can more easily be used with the 
intercept observer.
*/

import { PageInterface } from "models/page_models";


export function formatPage(page){
    
    const formattedPage: PageInterface = {
        id: page.sys.id,
        slug: page.slug,
        title: page.title,
        pageHeader: page.pageHeader,
        contentBlocks: page.contentCollection.items,
        description: page.description,
  
    }
    return formattedPage;
}
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