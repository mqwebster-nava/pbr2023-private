/*
A special page building template for PBR reports
Even though the reports are build using the [Site] Page Content model, 
they need special logic to set up full page navs so that logic is done here

*/


import { PageInterface } from "lib/data_models/page_interface";
import dynamic from "next/dynamic";

// 2021
const ReportNavbar = dynamic(() => import("components/blocks_reports/report_2021/ReportNavbar/ReportNavbar"));
const ReportHero2021 = dynamic(() => import("components/blocks_reports/report_2021/ReportHero2021"));
const ReportIntroduction2021 = dynamic(() => import("components/blocks_reports/report_2021/ReportIntroduction2021"));
const SectionIntro = dynamic(() => import("components/blocks_reports/report_2021/SectionIntro"));
const StorySection = dynamic(() => import("components/blocks_reports/report_2021/StorySection/StorySection"));
const TableOfContentsSection = dynamic(() => import("components/blocks_reports/report_2021/TableOfContents/TableOfContents"));
const ReportConclusion2021 = dynamic(() => import("components/blocks_reports/report_2021/ReportConclusion2021"));

//2020
const ReportHero2020 = dynamic(() => import("components/blocks_reports/report_2020/ReportHero2020"));
const ReportSectionWMetrics = dynamic(() => import("components/blocks_reports/report_2020/ReportSectionWMetrics/ReportSectionWMetrics"));
const ConclusionSection2020 = dynamic(() => import("components/blocks_reports/report_2020/Conclusion2020"));

// 2018-2019
const ReportHero2018 = dynamic(() => import("components/blocks_reports/report_2018-2019/ReportHero2018"));
const ReportHero2019 = dynamic(() => import("components/blocks_reports/report_2018-2019/ReportHero2019"));
const ReportIntroductionBlock = dynamic(() => import("components/blocks_reports/ReportIntroduction/ReportIntroduction"));
const SplitImageTextSection = dynamic(() => import("components/blocks_reports/report_2018-2019/SplitImageTextSection/SplitImageTextSection"));
const ShoutoutSection = dynamic(() => import("components/blocks_reports/report_2018-2019/ShoutoutSection"));


const ReportTemplate: React.FC<PageInterface> = ({
  slug,
  pageHeader,
  contentBlocks,
  children,
}) => {


  let reportSections = getSectionsInfo(contentBlocks);
  let reportYear = slug.includes("2021")?"2021": slug.includes("2020")?"2020":slug.includes("2019")?"2019":slug.includes("2018")?"2018":null;


  let links2020 = [
  { text: "Letter from leadership", id: "intro" },
  {id: "veterans",  text: "Supporting Veterans",},
  { id: "california", text: "Delivering unemployment benefits",},
  {id: "cmsmax", text: "Designing a personal healthcare experience",},
  {id: "cms", text: "Building human-centered cloud infrastructure",},
];

  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;

    const componentMap = {
      "2021":{
       ReportIllustrationOverlaySubsection: (entry) => (
        <div  key={`${entry.anchor}-${index}`}>
          <SectionIntro section={entry} key={entry.anchor} i={entry.themeNum}   />
          {entry.storiesCollection.items.filter((story)=>story.hideStory!==true).map((story, j) => {
          // If another story next
          const shownStories = entry.storiesCollection.items.filter((story)=>story.hideStory!==true)

          let nextSection = shownStories.length>j+1 ? `${entry.anchor}--${shownStories[j+1].anchor}` : null;
          let nextSectionTitle =  shownStories.length>j+1 ? shownStories[j+1].title : null;
          let nextSectionType = "story";
          // if no other story left but 
          if(!nextSection && contentBlocks.length > index && "anchor" in contentBlocks[index+1]) {
            nextSection = contentBlocks[index+1].anchor;
            nextSectionTitle = contentBlocks[index+1].title;
            nextSectionType="section"
          }
           
          return (
            <StorySection
              key={story.anchor}
              story={story}
              colorTheme={entry.colorTheme}
              sectionAnchor={entry.anchor}
              nextSection={nextSection}
              nextSectionTitle={nextSectionTitle}
              nextSectionType={nextSectionType}
            />
          )})}
        </div>
      ),
      ReportSectionCustom: (entry) => 
      (entry.type=='Table of Contents') ?<TableOfContentsSection key={index} {...entry} contentBlocks={contentBlocks} /> 
      :(entry.type=='Introduction 2021') ? <ReportIntroduction2021  key={index} {...entry} signatures={entry.signaturesCollection?.items}/>
      :(entry.type=='Conclusion 2021') ? <ReportConclusion2021 key={index} {...entry}/>
      
      :null //contentBlocks={contentBlocks}
    },
    "2020": {
      ReportSectionWithMetrics: () => <ReportSectionWMetrics key={index} reportYear={reportYear} {...entry} links={links2020} metrics={entry.metricsCollection?.items} />,
      ReportSectionCustom: (entry) => 
      (entry.type=='Conclusion 2020') ? <ConclusionSection2020 key={index} {...entry}/> :
      (entry.type=='Introduction 2020') ? <ReportIntroductionBlock  key={index} {...entry}  signatures={entry.signaturesCollection?.items}/>:null //contentBlocks={contentBlocks}
    },
    "2019":{
      ReportSectionSplitImageText: (entry) => <SplitImageTextSection key={index} reportYear={reportYear} {...entry}  />,
      ReportSectionCustom: (entry) => 
      (entry.type=='Shoutout 2019' ||entry.type=='Shoutout 2018') ? <ShoutoutSection key={index} {...entry}/>:
      (entry.type=='Introduction 2019' ||entry.type=='Introduction 2018') ? <ReportIntroductionBlock  key={index} {...entry} signatures={entry.signaturesCollection?.items} />: null 
    }
  };
    let yr = reportYear==="2018" ? "2019" : reportYear
    return typename in componentMap[yr] ? (
      componentMap[yr][typename](entry)
    ) : (
      null
    );
  };

  return (
    <main id="main">
   { slug=="/public-benefit-reports/2021" && <ReportNavbar
        contentBlocks={contentBlocks}
        reportSections={reportSections}
      />}
       {(reportYear==="2018"? <ReportHero2018 {...pageHeader}/>
         : reportYear==="2019" ? <ReportHero2019  {...pageHeader}/>
         : reportYear==="2020" ?  <ReportHero2020  {...pageHeader}/>
         : reportYear==="2021" ? <ReportHero2021  {...pageHeader}/>
         : null )}
      <div className="animate-fadeIn2">
        {contentBlocks.map((block, i) => getComponent(block, i))}
      </div>
    </main>
  );
};

export function getSectionsInfo(contentBlocks) {
  let output = [];

  function addSection(title, anchor, type, colorTheme, parentAnchor) {
    output.push({
      title: title,
      anchor: anchor,
      type: type,
      colorTheme: colorTheme,
      parentAnchor: parentAnchor, 
    });
  }
  addSection("Hero", "reportHeader", null, "purple", null);
  contentBlocks.forEach((section) => {
    const typename = section.__typename;
    if (typename == "ReportIllustrationOverlaySubsection"){
      addSection(
        section.title,
        section.anchor,
        typename,
        section.colorTheme,
        null,
    );
      section.storiesCollection.items.forEach((story, i) => {
        if(!story.hideStory)
          addSection(
            story.title,
            `${section.anchor}--${story.anchor}`,
            "story",
            section.colorTheme,
            section.anchor,
          );
       })

    } else {
      addSection(
        section.title,
        section.anchor,
        typename,
        ("colorTheme" in section) ? section.colorTheme: "purple",
        null, 
      )
    } return;
  });
  return output;
}



export default ReportTemplate;