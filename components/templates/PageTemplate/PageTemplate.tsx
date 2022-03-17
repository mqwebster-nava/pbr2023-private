
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { SectionHeader, ContentBlockText2, PlaceholderPageHeader, CTABlock } from "components/blocks";
import Fade from 'react-reveal/Fade';
import { PageProps } from "utils/pageUtils";


  export default function PageTemplate({page, preview }:PageProps) {
    // need to deconstruct post 
    // const doc = page.body ? page.body.json : null;
    const getComponent= (entry:any) => {  
              const typename = entry.__typename;
              switch (typename) {
                  case "SectionHeader":
                      return <SectionHeader title={entry.title}>{entry.subtitle}</SectionHeader>
                  case "SectionContentBlockText":
                      //todo render in markdown
                      return  <ContentBlockText2 title={entry.title}>{entry.body}</ContentBlockText2> 
                  case "SectionCtaBlock":
                     return <CTABlock title={entry.title} buttonText={entry.buttonText} buttonPath={entry.buttonPath} type={entry.type} >{entry.body}</CTABlock>
                  case "QuoteBlock":
                    return null;
                  case "ContentBlockArticleList":
                    return null;
            }
            return null;
  }


      return (
        < >
         <PlaceholderPageHeader 
            title={page.pageHeader.title} 
            subtitle={page.pageHeader.subtitle}/>
        {page.contentBlocks.map((block)=>  <Fade bottom>{getComponent(block)}</Fade>
        )}
        </>
      );
    }
  