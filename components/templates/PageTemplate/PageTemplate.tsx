
import dynamic from "next/dynamic";
import React from "react";


const ContentBlock = dynamic(() => import("components/blocks/ContentBlock/ContentBlock"));
const QuoteBlock= dynamic(() => import("components/blocks/QuoteBlock/QuoteBlock"));
const ArticleFeed= dynamic(() => import("components/blocks/ArticleFeed/ArticleFeed"));
const CTABlock= dynamic(() => import("components/blocks/CTABlock/CTABlock"));
const PageHeader= dynamic(() => import("components/blocks/PageHeaders/PageHeader"));
const ContentBlockText= dynamic(() => import("components/blocks/ContentBlockText/ContentBlockText"));
const SectionHeader = dynamic(() => import("components/blocks/SectionHeader/SectionHeader"));
const PostBody = dynamic(() => import("components/blocks/PostBody/PostBody"));
const ImageGalleryBlock  = dynamic(() => import("components/blocks/ImageGallery/ImageGallery"));
const TimelineSection = dynamic(() => import("components/custom_blocks/TimelineSection/TimelineSection"));
const AuthorBioBlock  = dynamic(() => import("components/custom_blocks/AuthorBioBlock/AuthorBioBlock"));
const ContentGrid  = dynamic(() => import("components/blocks/ContentGrid/ContentGrid"));
const MarkdownComponent  = dynamic(() => import("utils/MarkdownComponent"));
const CapabilitiesSection  = dynamic(() => import("components/custom_blocks/CapabilitiesSection/CapabilitiesSection"));
const EmployeeList = dynamic(() => import("components/custom_blocks/EmployeeList/EmployeeList"));
const OpenRolesComponent  = dynamic(() => import("components/custom_blocks/OpenRolesComponent/OpenRolesComponent"));

import { PageInterface } from "shared_interfaces/page_interface";

const PageTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {

  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
      "SectionHeader": (entry)=>(<SectionHeader key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>} />),
      "SectionContentBlockText": ()=> <ContentBlockText key={index} {...entry} body={<MarkdownComponent content={entry.body}/>}/>,
      "SectionCtaBlock": ()=> <CTABlock key={index} {...entry}/>,
      "ContentBlock": ()=> <ContentBlock key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>} />,
      "ContentBlockLinkToPage": ()=> <ContentBlock key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>}  />,
      "QuoteBlock": ()=> <QuoteBlock key={index} {...entry}/>,
      "ContentBlockArticleList": ()=>  <ArticleFeed key={index} {...entry} />,
      "ImageGallery": ()=> <ImageGalleryBlock key={index} {...entry} images={entry.imagesCollection.items}/>,
      "TimelineSection": () => <TimelineSection key={index} {...entry}/>,
      "PostBody":()=><PostBody key={`${index}`} {...entry}/>,
      "AuthorBioBlock":()=><AuthorBioBlock key={index} {...entry}/>,
      "CapabilitiesSection":()=><CapabilitiesSection key={index} {...entry}/>,
      "ContentGridFeatureCards": // Highlighted Information Card
         ()=><ContentGrid key={index}  {...entry} contentType={"feature cards"} layout={"default"}  padding="py-2xl" />,
      "CustomBlock": ()=> {
        if (entry.type == "Employee List") return <EmployeeList key={index} />
        if (entry.type == "Open Roles") return <OpenRolesComponent key={index}/>
        return <div></div>
      }
    }
    return typename in componentMap ? componentMap[typename](entry) : <div></div>
  };
  return (
    <main>
      <PageHeader {...pageHeader}/>
      {children}
      {contentBlocks.map((block,i) =>  getComponent(block,i))}
    </main>
  );
};

export default PageTemplate;
