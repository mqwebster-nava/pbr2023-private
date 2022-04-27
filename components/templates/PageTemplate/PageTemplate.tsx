import {
  SectionHeader,
  ContentBlockText,
  PageHeader,
  CTABlock,
  ContentBlockLinkToPage,
  QuoteBlock,
  ContentBlockArticleList,
} from "components/blocks";
import { PageInterface } from "shared_interfaces/page_interface";
import PostBody from "components/blocks/PostBody/PostBody";

const PageTemplate: React.FC<PageInterface> = ({
  id,
  slug,
  title,
  description,
  pageHeader,
  contentBlocks,
  preview = false,
  children,
}) => {
  // need to deconstruct post
  // const doc = page.body ? page.body.json : null;


  const getComponent = (entry: any) => {
    const typename = entry.__typename;
    const componentMap = {
      "SectionHeader": (entry)=>(<SectionHeader {...entry}></SectionHeader>),
      "SectionContentBlockText": ()=> <ContentBlockText {...entry}/>,
      "SectionCtaBlock": ()=> <CTABlock {...entry}/>,
      "ContentBlockLinkToPage": ()=> <ContentBlockLinkToPage {...entry} />,
      "QuoteBlock": ()=> <QuoteBlock {...entry}/>,
      "ContentBlockArticleList": ()=>  <ContentBlockArticleList {...entry} />,
      "PostBody":()=><PostBody {...entry}/>
    }
    return typename in componentMap ? componentMap[typename](entry) : <div></div>
  };
  return (
    <>
      <PageHeader {...pageHeader}/>
      {contentBlocks.map((block) => getComponent(block))}
      {children}
    </>
  );
};

export default PageTemplate;
