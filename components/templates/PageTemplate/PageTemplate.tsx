
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import ReactMarkdown from 'react-markdown';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { SectionHeader, ContentBlockText2, PlaceholderPageHeader, CTABlock } from "components/blocks";
import Fade from 'react-reveal/Fade';


  export default function PageTemplate({page, preview }) {
    // need to deconstruct post 
    const doc = page.body.json;

    const getImg= (data:any) => {
        const id = data.target.sys.id;
        const assets = page.body.links.assets.block;
        const asset = assets.find(element => element.sys.id === id);
        return (<Image src={asset.url} height={asset.height} width={asset.width} alt={asset.description}/>);
    }
    const getComponent= (data:any) => {
      const id = data.target.sys.id;
              const entries = page.body.links.entries.block;
              const entry = entries.find(element => element.sys.id === id);
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

  // TODO Where should I do the rendering for this post
      const options = {
        renderMark: {
          [MARKS.BOLD]: text => <span className="text-blue-500 font-bold ">{text}</span>,
          [MARKS.ITALIC]: text => <span className="italic font-sans">{text}</span>,
          [MARKS.UNDERLINE]: text => <span className="text-blue-500 font-bold">{text}</span>,
        },
        renderNode: {
          
          [BLOCKS.EMBEDDED_ASSET]: ({ data }) => getImg(data),
          [BLOCKS.EMBEDDED_ENTRY]: ({data}) =>{
              return  <Fade bottom>{getComponent(data)}</Fade> ;
          }
        },
    };
  
      return (
        < >
         <PlaceholderPageHeader 
            title={page.pageHeader.title} 
            subtitle={page.pageHeader.subtitle}/>
         {documentToReactComponents(doc, options)}
        </>
      );
    }
  