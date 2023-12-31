
import FloatingButtonBlock from "components/blocks/FloatingButtonBlock/FloatingButtonBlock";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";


const ContentBlock = dynamic(() => import("components/blocks/ContentBlock/ContentBlock"));
const QuoteBlock= dynamic(() => import("components/blocks/QuoteBlock/QuoteBlock"));
const ArticleFeed= dynamic(() => import("components/blocks/ArticleFeed/ArticleFeed"));
const CTABlock= dynamic(() => import("components/blocks/CTABlock/CTABlock"));
const PageHeader= dynamic(() => import("components/blocks/PageHeaders/PageHeader"));
const SectionHeader = dynamic(() => import("components/blocks/SectionHeader/SectionHeader"));
const PostBody = dynamic(() => import("components/blocks/PostBody/PostBody"));
const ImageGalleryBlock  = dynamic(() => import("components/blocks/ImageGallery/ImageGallery"));
const TextBodyBlock = dynamic(() => import("components/blocks/TextBodyBlock/TextBodyBlock"));
const MarkdownComponent  = dynamic(() => import("utils/MarkdownComponent"));
const CapabilitiesSection  = dynamic(() => import("components/blocks/CapabilitiesSection/CapabilitiesSection"));
const EmployeeList = dynamic(() => import("components/custom_blocks/EmployeeList/EmployeeList"));
const OpenRolesComponent  = dynamic(() => import("components/custom_blocks/OpenRolesComponent/OpenRolesComponent"));
const HighlightedInformationList  = dynamic(() => import("components/blocks/HighlightedInformationList/HighlightedInformationList"));
const PostEventSpeakersRow  = dynamic(() => import("components/blocks/PostEventSpeakersRow/PostEventSpeakersRow"));
//const AuthorBioBlock  = dynamic(() => import("components/custom_blocks/AuthorBioBlock/AuthorBioBlock"));



import { PageInterface } from "lib/data_models/page_interface";
import DEISection from "components/custom_blocks/DEISection/DEISection";
import ContactSection from "components/custom_blocks/ContactSection/ContactSection";

const PageTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
  slug,
  DEIpageColor,
  isBottomGapRemoved
}) => {
  const isDEI2022 = slug?.includes("dei/2022") ||slug?.includes("dei2023")

  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const isBottomAndUnderFooter = contentBlocks.length-1 == index && isBottomGapRemoved;
    const componentMap = {
      "SectionHeader": (entry)=>(<SectionHeader key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>} />),
      "SectionCtaBlock": ()=> <CTABlock key={index} {...entry}/>,
      "ContentBlock": ()=> <ContentBlock key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>} />,
      "ContentBlockLinkToPage": ()=> <ContentBlock key={index} {...entry} body={entry.body && <MarkdownComponent content={entry.body}/>}  />,
      "QuoteBlock": ()=> <QuoteBlock key={index} {...entry}/>,
      "ContentBlockArticleList": ()=>  <ArticleFeed key={index} {...entry} />,
      "ImageGallery": ()=> {
        if (!isDEI2022) return <ImageGalleryBlock key={index} {...entry} images={entry.imagesCollection.items} />
        let imgs  = entry.imagesCollection.items;
        imgs = (DEIpageColor=="navy") ? imgs.slice(0,3)
              :(DEIpageColor=="plum") ? imgs.slice(3,6)
              :(DEIpageColor=="sage") ? imgs.slice(6,9)
              :(DEIpageColor=="gold") ? imgs.slice(9,12)
              : imgs.slice(12,15);
        return <ImageGalleryBlock key={index} {...entry} images={imgs} background={DEIpageColor}/>
      },
      "TextBodyBlock": () => <TextBodyBlock key={index} {...entry} colorTheme={isDEI2022?DEIpageColor:entry.colorTheme}/>,
      "PostBody":()=><PostBody key={`${index}`} {...entry}/>,
      //"AuthorBioBlock":()=><AuthorBioBlock key={index} {...entry}/>,
      "CapabilitiesSection":()=><CapabilitiesSection key={index} {...entry}/>,
      "FloatingButtonBlock":()=><FloatingButtonBlock key={index} {...entry}/>,
      "PostEventSpeakersRow": ()=><PostEventSpeakersRow key={index} {...entry}/>,
      "HighlightedInformationList": // Highlighted Information Card
         ()=><HighlightedInformationList key={index}  {...entry} />,
      "CustomBlock": ()=> {
        if (entry.type == "Employee List") return <EmployeeList key={index}  {...entry} />
        if (entry.type == "Open Roles") return <OpenRolesComponent key={index} {...entry}/>
        if (entry.type == "Contact Section") return <ContactSection key={index}/>
        if(entry.type == "DEI Section") 
          return  <DEISection 
                      key={index} {...entry} 
                      colorTheme={!isDEI2022?entry.colorTheme: entry.colorTheme=="white"?entry.colorTheme:DEIpageColor} 
                      isBottomAndUnderFooter={isBottomAndUnderFooter}/>
        return null
      }
    }
    return typename in componentMap ? componentMap[typename](entry) : null;
  };

  return (
    <main id="main">
      <PageHeader {...pageHeader} />
      <div className="animate-fadeIn2">
      {children}
      {contentBlocks.map((block,i) =>  getComponent(block,i))}
      </div>
    </main>
  );
};

export default PageTemplate;
