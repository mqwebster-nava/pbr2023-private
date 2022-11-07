import { PageInterface } from "lib/data_models/page_interface";
import { liftData } from "utils/utils";
import { formatImageAsset } from "./formatImageAsset";

export function formatPage(page){
    let formattedPage: PageInterface = {
        id: page.sys.id,
        slug: page.slug,
        title: page.title,
        socialImage:formatImageAsset(page.socialImage),
        pageHeader:liftData(page.pageHeader),
        contentBlocks: page.contentCollection.items.map((item)=>liftData({...item})),
        description: page.description,
        isBottomCTA: false
    }
    if(!formattedPage.contentBlocks || formattedPage.contentBlocks.length<1) return formattedPage;
    // Check for CTA block at bottom bc it requires extra formatting
    const lastBlockIndex = formattedPage.contentBlocks.length-1;
    if ( formattedPage.contentBlocks[lastBlockIndex]["__typename"]=="SectionCtaBlock"){
      formattedPage.contentBlocks[lastBlockIndex].isBottom=true;
      formattedPage.isBottomCTA =  true
    }
    return formattedPage; 
}



