
import {
  SectionHeader,
  ContentBlockText2,
  PageHeader,
  CTABlock,
  ContentBlockLinkToPage,
  QuoteBlock,
  ContentBlockArticleList 
} from "components/blocks";
import { PageInterface } from "shared_interfaces/page_interface";
import ReactMarkdown from 'react-markdown'
import PostBody from "components/blocks/PostBody/PostBody";

const PageTemplate: React.FC<PageInterface> = ({ 
  id,
  slug,
  title,
  description,
  pageHeader,
  contentBlocks,
  preview= false,
  children
})=> {
  // need to deconstruct post
  // const doc = page.body ? page.body.json : null;
  const MarkdownComponent = ({content}) => {
    return ( < ReactMarkdown 
      children={content}
      // todo add styling here for markdown
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        ul: ({node, ...props}) => <ul className="list-disc" {...props} />
      }}/> );
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
        <ContentBlockArticleList 
        title={entry.title} 
        body={entry.body}
        posts={entry.postsCollection.items}
        >
        </ContentBlockArticleList>);
      case "PostBody":
        return (
          <PostBody 
            body={entry.body} 
            contentTags={entry.contentTags} 
            authors={entry.authors} 
            date={entry.date} />);
    }
    return <div></div>;
  };
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
        bannerColor={pageHeader.bannerColor}
        variant={pageHeader.variant}
  
      />
      {contentBlocks.map((block) => (
       getComponent(block)
      ))}
       {/* <Fade bottom > */}
         {children}
    {/* </Fade> */}
    </>
  );
}

export default PageTemplate;


// {/* {children&& Children.map(children, (child) => ( {child}))} */

// brandElements="top"
        // textLocation="bottom"
        // backgroundImage={("backgroundImage" in page.pageHeader)? page.pageHeader.backgroundImage : null}    