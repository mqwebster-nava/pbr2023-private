
import dynamic from "next/dynamic";


const ContentBlockLinkToPage = dynamic(() => import("components/blocks/ContentBlockLinkToPage/ContentBlockLinkToPage"));
const QuoteBlock= dynamic(() => import("components/blocks/QuoteBlock/QuoteBlock"));
const ContentBlockArticleList= dynamic(() => import("components/blocks/ContentBlockArticlesList/ContentBlockArticlesList"));
const CTABlock= dynamic(() => import("components/blocks/CTABlock/CTABlock"));
const PageHeader= dynamic(() => import("components/blocks/PageHeaders/PageHeader"));
const ContentBlockText= dynamic(() => import("components/blocks/ContentBlockText/ContentBlockText"));
const SectionHeader = dynamic(() => import("components/blocks/SectionHeader/SectionHeader"));
const PostBody = dynamic(() => import("components/blocks/PostBody/PostBody"));


import { PageInterface } from "shared_interfaces/page_interface";

const PageTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {

  const getComponent = (entry: any) => {
    const typename = entry.__typename;
    console.log(entry)
    const componentMap = {
      "SectionHeader": (entry)=>(<SectionHeader {...entry}/>),
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
