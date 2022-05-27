


import ContentGrid from "components/blocks/ContentGrid/ContentGrid";
import dynamic from "next/dynamic";


const ContentBlock = dynamic(() => import("components/blocks/ContentBlock/ContentBlock"));
const QuoteBlock= dynamic(() => import("components/blocks/QuoteBlock/QuoteBlock"));
const ContentBlockArticleList= dynamic(() => import("components/blocks/ContentBlockArticlesList/ContentBlockArticlesList"));
const CTABlock= dynamic(() => import("components/blocks/CTABlock/CTABlock"));
const PageHeader= dynamic(() => import("components/blocks/PageHeaders/PageHeader"));
const ContentBlockText= dynamic(() => import("components/blocks/ContentBlockText/ContentBlockText"));
const SectionHeader = dynamic(() => import("components/blocks/SectionHeader/SectionHeader"));
const PostBody = dynamic(() => import("components/blocks/PostBody/PostBody"));
const ImageGalleryBlock  = dynamic(() => import("components/blocks/ImageGallery/ImageGallery"));
const TimelineSection = dynamic(() => import("components/custom_blocks/TimelineSection/TimelineSection"));
const AuthorBioBlock  = dynamic(() => import("components/custom_blocks/AuthorBioBlock/AuthorBioBlock"));

import { PageInterface } from "shared_interfaces/page_interface";

const PageTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {

  const getComponent = (entry: any) => {
    const typename = entry.__typename;
    const componentMap = {
      "SectionHeader": (entry)=>(<SectionHeader {...entry}/>),
      "SectionContentBlockText": ()=> <ContentBlockText {...entry}/>,
      "SectionCtaBlock": ()=> <CTABlock {...entry}/>,
      "ContentBlock": ()=> <ContentBlock {...entry} />,
      "ContentBlockLinkToPage": ()=> <ContentBlock {...entry} />,
      "QuoteBlock": ()=> <QuoteBlock {...entry}/>,
      "ContentBlockArticleList": ()=>  <ContentBlockArticleList {...entry} />,
      "ImageGallery": ()=> <ImageGalleryBlock {...entry}/>,
      "TimelineSection": () => <TimelineSection {...entry}/>,
      "PostBody":()=><PostBody {...entry}/>,
      "AuthorBioBlock":()=><AuthorBioBlock {...entry}/>,
      "ContentGridFeatureCards": ()=><ContentGrid {...entry} layout={"default"}  contentType={"feature cards"}/>
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
