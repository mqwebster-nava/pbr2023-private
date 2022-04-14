
import {
  SectionHeader,
  ContentBlockText2,
  PlaceholderPageHeader,
  CTABlock,
  ContentBlockLinkToPage,
  QuoteBlock,
  ContentBlockArticleList 
} from "components/blocks";
import Fade from "react-reveal/Fade";
import { PageProps } from "utils/pageUtils";
import ReactMarkdown from 'react-markdown'
import { ContentCard } from "components/atom";
import { getContentUrl } from "utils/utils";
import { Children } from "react";

const PageTemplate: React.FC<PageProps> = ({ page, preview, children})=> {
  // need to deconstruct post
  // const doc = page.body ? page.body.json : null;
  const MarkdownComponent = ({content}) => {
    return ( < ReactMarkdown 
      children={content}
      // todo add styling here for markdown
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        ul: ({node, ...props}) => <ul className="list-disc" {...props} />
      }}/> )
  } 
  
  
  const getComponent = (entry: any) => {
    const typename = entry.__typename;
    switch (typename) {
      case "SectionHeader":
        return (
          <SectionHeader 
          title={entry.title}>
            {entry.subtitle}
        </SectionHeader>
        );
      case "SectionContentBlockText":
        //todo render in markdown
        return (
          <ContentBlockText2 title={entry.title}>
            <MarkdownComponent content={entry.body}/>
          </ContentBlockText2>
        );
      case "SectionCtaBlock":
        return (
          <CTABlock
            title={entry.title}
            buttonText={entry.buttonText}
            buttonPath={entry.buttonPath}
            type={entry.type}
          >
             <MarkdownComponent content={entry.body}/>
          </CTABlock>
        );
      case "ContentBlockLinkToPage":
        return (
          <ContentBlockLinkToPage title={entry.title} buttonText={entry.buttonText} buttonPath={entry.buttonPath}>
            <MarkdownComponent content={entry.body}/>
          </ContentBlockLinkToPage>
        );
      case "QuoteBlock":
        return (
          <QuoteBlock
            content={entry.body}
            author={entry.authorName}
            authorRole={entry.authorRole}
          ></QuoteBlock>
        );
      case "ContentBlockArticleList":
        return (
        <ContentBlockArticleList title={entry.title} body={entry.body}>
          {entry.postsCollection.items.map((post)=>{
            return (<ContentCard
            key={post.title}
            type={post.contentType}
              title={post.title}
              path={getContentUrl(post.contentType, post.slug)}
            >
              {post.shortSummary}
            </ContentCard>)
          })}
        </ContentBlockArticleList>);
    }
    return <div></div>;
  };

  return (
    <>
      <PlaceholderPageHeader
        title={page.pageHeader.title}
        subtitle={page.pageHeader.subtitle}
        brandElements="top"
        textLocation="bottom"
        backgroundImage={("backgroundImage" in page.pageHeader)? page.pageHeader.backgroundImage : null}    
      />
      {page.contentBlocks.map((block) => (
       getComponent(block)
        // <Fade bottom>{
         
        //   }</Fade>
      ))}
       {/* <Fade bottom > */}
         {children}
     
    {/* </Fade> */}
    </>
  );
}
// {/* {children&& Children.map(children, (child) => ( {child}))} */

export default PageTemplate;