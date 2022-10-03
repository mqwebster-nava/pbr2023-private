
import FloatingButtonBlock from "components/blocks/FloatingButtonBlock/FloatingButtonBlock";
import dynamic from "next/dynamic";
import React from "react";


const ContentBlock = dynamic(() => import("components/blocks/ContentBlock/ContentBlock"));
const QuoteBlock= dynamic(() => import("components/blocks/QuoteBlock/QuoteBlock"));
const ArticleFeed= dynamic(() => import("components/blocks/ArticleFeed/ArticleFeed"));
const CTABlock= dynamic(() => import("components/blocks/CTABlock/CTABlock"));
const PageHeader= dynamic(() => import("components/blocks/PageHeaders/PageHeader"));
const ListBlock = dynamic(() => import("components/blocks/ListBlock/ListBlock"));
const SectionHeader = dynamic(() => import("components/blocks/SectionHeader/SectionHeader"));
const PostBody = dynamic(() => import("components/blocks/PostBody/PostBody"));
const ImageGalleryBlock  = dynamic(() => import("components/blocks/ImageGallery/ImageGallery"));
const TextBodyBlock = dynamic(() => import("components/blocks/TextBodyBlock/TextBodyBlock"));
const AuthorBioBlock  = dynamic(() => import("components/custom_blocks/AuthorBioBlock/AuthorBioBlock"));
const MarkdownComponent  = dynamic(() => import("utils/MarkdownComponent"));
const CapabilitiesSection  = dynamic(() => import("components/blocks/CapabilitiesSection/CapabilitiesSection"));
const EmployeeList = dynamic(() => import("components/custom_blocks/EmployeeList/EmployeeList"));
const OpenRolesComponent  = dynamic(() => import("components/custom_blocks/OpenRolesComponent/OpenRolesComponent"));
const HighlightedInformationList  = dynamic(() => import("components/blocks/HighlightedInformationList/HighlightedInformationList"));
const PostEventSpeakersRow  = dynamic(() => import("components/blocks/PostEventSpeakersRow/PostEventSpeakersRow"));



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
      "ListBlock": ()=> <ListBlock key={index} {...entry} body={<MarkdownComponent content={entry.body}/>}/>,
      "SectionCtaBlock": ()=> <CTABlock key={index} {...entry}/>,
      "ContentBlock": ()=> <ContentBlock key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>} />,
      "ContentBlockLinkToPage": ()=> <ContentBlock key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>}  />,
      "QuoteBlock": ()=> <QuoteBlock key={index} {...entry}/>,
      "ContentBlockArticleList": ()=>  <ArticleFeed key={index} {...entry} />,
      "ImageGallery": ()=> <ImageGalleryBlock key={index} {...entry} images={entry.imagesCollection.items}/>,
      "TextBodyBlock": () => <TextBodyBlock key={index} {...entry}/>,
      "PostBody":()=><PostBody key={`${index}`} {...entry}/>,
      "AuthorBioBlock":()=><AuthorBioBlock key={index} {...entry}/>,
      "CapabilitiesSection":()=><CapabilitiesSection key={index} {...entry}/>,
      "FloatingButtonBlock":()=><FloatingButtonBlock key={index} {...entry}/>,
      "PostEventSpeakersRow": ()=><PostEventSpeakersRow key={index} {...entry}/>,
      "HighlightedInformationList": // Highlighted Information Card
         ()=><HighlightedInformationList key={index}  {...entry} />,
      "CustomBlock": ()=> {
        if (entry.type == "Employee List") return <EmployeeList key={index}  {...entry} />
        if (entry.type == "Open Roles") return <OpenRolesComponent key={index} {...entry}/>
        return <div></div>
      }
    }
    return typename in componentMap ? componentMap[typename](entry) : <div></div>
  };
  return (
    <main id="main">
      <PageHeader {...pageHeader}/>
      <div className="animate-fadeIn2">
      {children}
      {contentBlocks.map((block,i) =>  getComponent(block,i))}
      </div>
    </main>
  );
};

export default PageTemplate;
