// @ts-nocheck

import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import { Button, LinkText } from "components/atom";
//https://www.navapbc.com/public-benefit-reports/2019/
import sec1Image from "public/images/pbrs/2019-1.png";
import sec2Image from "public/images/pbrs/2019-2.png";
import sec3Image from "public/images/pbrs/2019-3.png";
import Image from "next/image";
export default function PBR2019() {

  return (
    <div>
      <PageHeader
        title={"2019 Public Benefit Report"}
        banner={null}
      ></PageHeader>
      <IntroSection
        title={"Introduction"}
        body={`
We started Nava as a public benefit corporation with a lot of urgency—HealthCare.gov needed help, people needed access to care, and the public was losing trust in the government's ability to work in the digital age.

We also started Nava with a lot of aspirations—that the lessons we’d learned fixing HealthCare.gov could help avoid future disasters entirely, and that taking a human-centered approach would in time change the standards, practices, and culture around delivering public digital services. We started Nava because we want to live in a world where public institutions are able to earn trust by quickly and effectively responding to people’s needs.

But it feels like we're a long ways away from that right now. The global pandemic we're living through is unprecedented in our lifetimes. What's being made painfully clear is that the failure of critical public services causes real harm, both physical and financial. Our healthcare system is being overwhelmed, millions are pouring onto unemployment, and we're seeing an unprecedented number of people trying to access government programs.  **It has never been more important for government services to be simple, effective, and accessible to all.**

### Building resilient services at scale

Five years in, and our mission hasn’t changed. We’re here to improve the simplicity, effectiveness, and accessibility of critical government services. [We’re here to help people who need it most](https://blog.navapbc.com/how-nava-picks-government-work-6983cd191739) because it’s here where the stakes are often highest, where trust is either created or destroyed en masse—and not just for the people these programs are designed to serve. As we're seeing now, the impact of broken trust resonates across the broader country.

We’re here to help agencies be more adaptable in a world where the only constant is change. What’s been both humbling and exciting is seeing our aspirations become responsibilities—projects we care deeply about, and roles we’ve taken on that will resonate across lifetimes. Now more than ever, it's important to remember that this work benefits from, if not requires, taking a profoundly long-term perspective.

In the past year, we’ve won new work, including helping the Commonwealth of Massachusetts build and roll out their new Paid Family and Medical Leave legislation, as well as improving the flexibility, security, and resilience of systems at the Centers for  Medicare & Medicaid Services (CMS). In Massachusetts, we’re taking lessons we’ve learned at the federal and state level around eligibility and enrollment systems, and applying them to greenfield work to roll out this [groundbreaking legislation](https://www.mass.gov/info-details/paid-family-and-medical-leave-pfml-fact-sheet). At CMS, we’re listening to developer teams across the agency to update the tools, standards, and practices around building resilient services at scale.

At the same time, we also transitioned off of projects that we’ve loved working on, such as our work on the [Quality Payment Program for Medicare](https://www.navapbc.com/public-benefit-reports/2018/). We’ve also gotten to celebrate milestones, such as VA.gov’s launching of the redesigned Pittsburgh Healthcare System website, and Vermont’s successful integration of our Uploader work piloted the year before.

Between the hard fought wins to the bittersweet transitions, we are reminded that structural change is a difficult and continuous process—a process that demands focus, persistence, and growth. And we've grown a lot this past year.

As a company, Nava is now over 130 people, and growing quickly, with more than 20% of staff working fully remotely. [We launched an apprenticeship program](https://blog.navapbc.com/nava-pbc-welcomes-first-cohort-of-engineering-apprentices-5e89d4bcad6f), were able to hire all the apprentices, and are excited to expand and launch our 2020 program in the fall. In 2019, Nava also became majority women across the company, from all staff to management to the executive team. We still have work to do—people of color represent only 35% across the company—but it’s work we’re ready to take on.

### Looking ahead

We're only four months into the year and structural failures have cost lives and affected millions. But for millions of people in this country, the challenges they face accessing critical public services didn’t start with COVID-19, nor will they end with an election. Building resilience in the face of systemic challenges like a global pandemic, climate change, and surging nationalism will affect us all, and Nava has a role to play. When quarantine is over, there will still be caseworkers and public servants working their hardest to improve brittle systems, or build better ones. There will still be people needing care, people navigating complex services or life changes.

There will still be work to do, work Nava was founded and exists to support, and work we hope you’ll contribute to as well.
`}
      />
      <Section
        picture={sec1Image}
        picture_position={"left"}
        isWhiteBG={true}
        intro_title_text={
          "Creating responsive health care services for 58 million people"
        }
        intro_body={` We’re partnering with Centers for Medicare & Medicaid Services (CMS) to modernize how Medicare pays doctors.

      Using a human-centered, agile approach, we’re improving the efficiency, flexibility, and reliability of claims processing. In turn, this will raise quality of care, facilitate smarter spending, and support a healthier Medicare population.
    `}
        body={`### Supporting first-class care\n\n\nMedicare
delivers critical health care services to more than [58 million people](https://www.cms.gov/files/document/2018-mdcr-enroll-ab-2.pdf)
or 18% of the entire U.S. population. Most are [over the age of 65 and/or living
with disabilities](https://www.cms.gov/files/document/2018-mdcr-enroll-ab-3.pdf).
Medicare provides more than [$2 billion](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet)
of vital services per day, or [$750.2 billion annually](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet),
for vulnerable populations. Its value to the country, health care providers,
and patients is enormous. \n\nThe payments for these services provide financial
stability to our entire health care system. Health care providers—from big,
urban hospitals to small, rural private practices—rely on this cash flow. But
inflexibility of payment models and the work required to document and process
claims prevent doctors from being able to provide the best possible care to
their patients. \n\n#### Modernizing how Medicare pays doctors\n\nWe’re working
on a project called Medicare Payment System Modernization (MPSM), which will
help CMS modernize how Medicare pays doctors. MPSM supports innovative payment
models, reduces the time doctors spend managing paperwork, and lets them focus
on their patients. \n\nThe current system processes claims using a 40-year-old
legacy system, built on the mainframe, using the out-dated programming language
COBOL. It’s inflexible and can’t easily adapt to support things like alternative
payment models. During our research, one doctor at a major health care provider
lamented being unable to try in-home services for elderly patients with mobility
difficulties because they weren’t confident that they would be reimbursed for
it. Others told us that billing processes and mandatory data entry are a cause
of burnout so severe that physicians are leaving smaller practices.\n\n####
Improving quality of care with human-centered design   \n  \nOur
vision for MPSM is to apply human-centered design to make claims processing
painless, establish and promote API-first development, and support a larger
transition from a Fee-for-Service to a Value-based Purchasing Program model.
All of these things will support better quality of care, smarter spending, and
a healthier Medicare population. For example, API-first development practices
power tools like a service-pricing calculator app. As a result, providers are
able to get quick and accurate pricing information, relieving some of the burden
they’re currently facing. \n\nWe’re proud to support CMS’s ability, now and
in the future, to deliver health care services with modern digital infrastructure,
tools, and practices. `}
      ></Section>
      <Section
        picture={sec2Image}
        picture_position={"right"}
        isWhiteBG={false}
        intro_title_text={"Serving Veterans, their families, and caregivers"}
        intro_body={` Nava worked with the Department of Veterans Affairs (VA) and several partners to make it easier for Veterans to find, understand, and use information about health care and benefits on VA’s websites.

      In a nine-month pilot, we built a new website and streamlined existing ones. Our work will guide VA’s multi-year product roadmap, ultimately improving the experience of VA’s 144 medical facilities’ websites.
    `}
        body={`
### Making health care and benefits more accessible

More than 10 million Veterans and their caregivers visit 144 VA’s medical facilities’ websites every month. They come to make appointments, refill prescriptions, order hearing aid batteries, and more. But many can’t find what they need because information is organized according to VA’s internal structure, not Veterans’ needs. It should be easier for Veterans to access their health care and benefits.

We partnered with the VA Office of Information Technology’s Digital Experience Product Office (DEPO), Veterans Health Administration (VHA) Digital Media, Agile Six, and CivicActions on a nine-month pilot. We consolidated top VA health services under just one website (*[va.gov](https://www.va.gov/)*), retired websites that had competing or outdated information, streamlined 300\+ webpages, and developed a new website for one of VA’s largest facilities, VA Pittsburgh Healthcare System.

#### Delivering a better experience now and in the future

This foundational work, which launched on January 29, 2020 at *[va.gov/pittsburgh-health-care](https://www.va.gov/pittsburgh-health-care/)*, will guide VA’s multi-year product roadmap to help deliver a better experience for Veterans, family members, and caregivers across VA’s medical facilities’ websites and 1,200 health care facilities.

The new site is responsive, faster, more reliable, and flexible. It employs a modern tech stack and a custom Drupal content management system (CMS). The CMS supports a new information architecture (IA) that reflects the way Veterans search for information so they can find what they need more quickly.

#### Prioritizing user needs

As with any human-centered design project, we put users at the center of our work and began with research to understand their needs. DEPO surveyed more than 800 Veterans, asking them to complete 10 key tasks using the newly proposed IA. We used their results to organize content and make design prototypes. As an example, one significant finding was that Veterans identify with VA through their local or regional medical or office site. So we used that as a key principle to guide our organization.

We regularly iterated on and improved the content and design by observing and listening to 76 Veterans, family members, caregivers, and patient advocates as they used the prototypes and described their experiences:

"I’d be shocked if this were a VA page. It looks like a modern website. I’m no designer, but the whitespace here helps me find things quicker," said one Veteran.

Prioritizing Veterans and considering their needs helped us deliver tools and systems to support VA content editors too. The CMS we built also provides guidelines for creating and publishing content so that it’s more clear and consistent across VA websites.

"Serving Veterans is our priority. We want to sort out the distinctions on our end to get basic information intuitively on the websites so that VA personnel can use their time to support Veterans on more pressing health concerns," said a Pittsburgh staff member.

 When we began rewriting and redesigning content, we prioritized updates that would address the most significant pain points identified during our research. For example, navigation challenges caused stress and frustration, so we decluttered the design and reorganized content according to what Veterans need most.

"Think about how people are accessing this information when they’re on their mobile devices and are in waiting rooms, trying to find information quickly–and it could be an emergency. This version is good for that. I’m not squinting and having to zoom in and out for everything, especially if I’m stressed," said one Veteran using a prototype with reorganized content.

![In this photograph, squares of yellow paper are neatly organized into columns. Each square has text on it to indicate a type of website content, like, “List of health care providers,” “Medical research," and “Shuttle schedule.” Similar information is organized within the same column. For example, “Becoming a patient” and “Set up an appointment” are both under “Health Care.”](/uploads/vagov_cardsort.jpg)
*During research, one Veteran offered this organization of site content.*


#### Making information clear with plain language

As we got further into content auditing, consolidation, and rewriting for the VA Pittsburgh site, we doubled down on plain language practices. We wanted to make all of the information we published more consistent, conversational, clear, helpful, and empathetic. We conducted three rounds of paraphrase testing with 28 Veterans. The ultimate goal was to draft content that would better prepare Veterans for their medical visits. Overall, we reduced the total word count and site pages by 87 percent.

"I like that it’s pretty simple. I can find things by scrolling rather than clicking on a million tabs," said one Veteran.

As we cut words in some places, we added words in others. We learned that to help Veterans find information quickly, we needed to write in the second person. So, instead of, “The VA provides suicide prevention services,” we used “If you are a Veteran in crisis or concerned about one, connect with qualified responders for confidential help.”

"I like that it’s very straight to the point—and I like that I can see all health services," said one Veteran.

With help from our partners at VA Office of Information Technology’s Digital Experience Product Office (DEPO), Veterans Health Administration (VHA) Digital Media, CivicActions, and Agile 6, we were able to better understand the people we were designing for. By focusing on the experience of Veterans, we helped make it easier—as it should be—for them to access health care and benefits through *[va.gov](https://www.va.gov/)*.`}
      ></Section>
      <Section
        picture={sec3Image}
        picture_position={"left"}
        parent_label={"policy"}
        isWhiteBG={true}
        intro_title_text={"Working to end entrenched poverty"}
        intro_body={`The effort to end entrenched poverty in the U.S. requires enduring
      work. Thankfully, we’ve found partners who are as committed as we are to building
      an equitable, accessible safety net. \n\nIn a multi-year project, we’re using
      a modular approach to unify Vermont’s extensive benefit system. Our goal is
      for people to understand, access, and maintain their benefits more easily, in
      one place.`}
        body={`
### Building seamless access to public benefits for all in need

Over the last two years, we’ve worked with the State of Vermont to improve government services for people who find themselves living at or below the poverty line. The first pilot we worked on together is now a full-fledged service that supports the State’s health care and financial benefit programs. Building on that success, we worked together to bolster a long-term strategy that will ultimately help Vermonters seamlessly access public benefits from a single place.

Vermont’s current benefit system includes up to 37 health care and financial benefit programs—that provide things like free or low-cost health care—for [thousands of Vermonters](https://spotlightonpoverty.org/states/vermont/). People who are living on low incomes, those who are over 65 years old, people with disabilities, and people who are pregnant and/or caring for young children are eligible for benefits.

Vermont’s system is extensive. But even before we started working together, the State had identified opportunities to better support Vermonters. For example, there’s no single place for people to find, apply for, access, and maintain the benefits they’re eligible for. Health care and financial benefit programs require submitting the same information in multiple places. When the State did research, one Vermont resident said that managing their benefits was “extremely time-consuming and frustrating.”

#### Approaching big problems with small, flexible tools

Our approach to addressing large-scale problems like these is to build and release small, modular tools that can be reused and expanded upon. This enables us to quickly and consistently deliver services that help people now, while also building a foundation that supports the long-term vision of integrating all health care and financial benefit programs. Over time, Vermont will be able to replace inflexible and inefficient legacy systems safely, and with minimal impact to services.

![This image shows two parts of a clear and simple form. The headlines say “Tell us about yourself” and “Tell us about your spouse.” The questions ask things like, “What’s your first name? What’s your last name?”](/uploads/vt-mabd-app.gif){: .u-border--dark .u-border--1}
*The online application makes it easier for health care applicants to submit information about themselves and their households.*

#### Creating processes to support integration of new tools

In our first pilot project (which we reported on [last year](https://www.navapbc.com/2018-public-benefit-report/)), we designed and built a tool for Vermonters to submit their eligibility documents electronically. This uploader saves people time and helps them submit documents more easily by using their phone or computer instead of by mail or traveling in person. Alongside the design and development of the tool, we also created a process that helped State staff integrate the uploader into their program’s operations, according to their timelines and priorities.

By late 2019, the uploader was a reliable and robust official channel for Vermonters to apply to any of the 37 programs. And now, thousands of Vermonters have used the uploader. Fifty-five percent of users were able to upload documents within 24 hours, compared to just eleven percent before. And, 98 percent said they would use it again. One reported that it’s the “easiest and clearest website I’ve used in some time.” The immediate improvements are clear. But they’re also just the tip of the iceberg.

#### Repeating success by solving common problems with reusable tools

We built the uploader to solve a common problem across many benefit programs: time wasted while submitting documents by mail or in person. To build it, we used components or patterns that can be reused for other applications: front-end design and code that can be adapted for a range of eligibility documents; back-end code for securely formatting and storing submitted documents; and an automated uploader that reliably makes documents accessible to State staff. So, while the uploader was quickly adopted to meet Vermonters’ current needs, the State can continue to reuse and expand upon it to cover more benefit programs and quickly adapt as policies change.

After the success of the uploader, we used the same strategy to start building Vermont’s first integrated online application. This second pilot serves a specific program, Medicaid for the Aged, Blind, or Disabled. But, like the uploader, it comprises components that can be reused and expanded upon to address a common problem: benefit applications are confusing and require entering the same information in multiple places. The new online application is clear and simple, and will also eventually serve all health care and financial benefit programs, ensuring a consistent and easy experience for benefit applicants. And we’re again working closely with State staffers on training processes and materials that enable adoption of the new service without interrupting current service delivery.

Our strategy with these pilots has helped Vermont more quickly respond to Vermonters’ needs in the near term and will continue to do so efficiently and cost-effectively—even as policies and needs change—in the future. We’re looking forward to seeing this work continuously make it easier for people to get support and assistance from the government, quickly and efficiently. We’re grateful to our partners for helping us bridge best-in-class design, technical, product, and policy expertise to better serve Vermonters in times of need.`}
      ></Section>
      <Section
      picture={sec3Image}
      picture_position= "right"
      intro_title_text="Illuminating policy futures"
      intro_body={`Entrusted with modernizing the digital systems that power the appeals
        process for Veterans applying for benefits, Nava took a holistic, human-centered
        approach. \n\nWe researched, prototyped, and iterated, improving the technology
        *and* the experiences of Veterans and VA employees. Along the way, we also helped
        update an 85-year-old policy.`}
      body={`
### Improving the appeals process for Veterans

Esteemed designer and educator Liz Danzico calls interaction design “the exploration of recently possible futures.” In government, you could say service design is the illumination of policy futures. Because policy change is a long, winding, and often circuitous route from writing to implementing a law, it’s not always easy to see what it will look like in real life. Design practices like user research, prototyping, testing, and mapping can help illuminate a variety of possibilities and build a case for the best one—a policy that meets the needs of those it serves.

While working with the United States Digital Service (U.S. Digital Service) and U.S. Department of Veterans Affairs (VA) to build a suite of digital services called [Caseflow](https://www.usds.gov/report-to-congress/2017/fall/veterans-disability-claims/), we helped update an 85-year-old policy and improve the experiences of millions of Veterans and 380,000 civil servants by applying human-centered design practices.

We were tasked with modernizing the information systems and digital tools behind the Veterans’ appeals process. This process allows Veterans to appeal decisions made about their benefits (compensation for medical conditions connected to military service, financial assistance for education, etc). In some cases, the appeals process is totally straightforward. But if any changes need to be made to a Veteran’s case, it can be delayed or derailed. As a result, [400,000 Veterans wait five years or longer](https://www.wsj.com/articles/hundreds-of-thousands-of-veterans-appeals-dragged-out-by-huge-backlog-1534935600) to receive a decision on their appeal. A significant minority of Veterans wait decades.

The major appeals processing system was first written and launched in the 1980s. Maintaining it was costly and we could see that other problems weren’t solely technical. In the decades since the appeals process was created, the system had grown large and complicated as policies and technologies changed.

#### Aligning on a mission to improve experiences for everyone

Before Nava joined this project, our colleagues from U.S. Digital Service started by aligning with VA on a mission statement with clear, agreed upon outcomes: Empower Board employees with technology to increase timely, accurate appeals decisions and improve the Veteran experience.

Agreeing on outcomes allowed us to step away from approaches that updated technology but did not improve the experience for Veterans or VA employees. Instead, we partnered with VA to research, prototype, and iterate our way to services which were both human-centered and technically sound.

One example: During research we found that 40 percent of cases arriving at the Board of Veteran Appeals had missing documents. And 33 percent of cases had data discrepancies that caused delays. Upon looking more closely, we discovered that a required part of the appeals process—filling out the [Form 8](https://www.va.gov/vaforms/va/pdf/VA8.pdf), signaling the appeal was officially at the Board for review—had become redundant. It was also a source of data discrepancies and productivity loss because it required manual data corroboration. Despite this research, the form couldn’t easily be removed from the caseworkers’ process without a change in regulations, a lengthy and infrequent process.

#### Prototyping to a change in policy

So, we quickly designed a prototype to demonstrate that automatically filling out the Form 8 would ease the burden of manual data entry and corroboration, while still meeting regulation and policy requirements. From that prototype, we built a working solution that focused on the caseworker’s task at hand, rather than satisfying the form itself. We also created documentation to train caseworkers on the updated process and rolled it out to 70 regional offices. Now, fewer than five percent of cases processed with Caseflow have data discrepancies. And, the requirement to fill out Form 8 has since been [removed from the regulations](https://www.govinfo.gov/content/pkg/FR-2019-01-18/pdf/2018-28350.pdf).

Form 8 was a small victory that ultimately made a big impact for Veterans. The design practices that illuminated a future without Form 8 also helped us build other tools for Veterans and VA employees, like a tracker for Veterans to see the status of their appeal.

Caseflow has been recognized by FCW, FedHealthIT, and other government technology associations for its commitment to better serving Veterans. And this year, Caseflow won [FedHealthIT's 2020 Innovation Award](https://www.fedhealthit.com/2020/02/fedhealthit-2020-innovation-award-winners-announced/). Our work catalyzed improvements that will not only benefit Veterans in the more immediate future but also for the long-run, as policies are updated to better meet their needs.
`}  
      ></Section>
      <ShoutoutSection></ShoutoutSection>
    </div>
  );
}

const PageHeader = ({ title, banner }) => {
  return (
    <div className="bg-gray-100 min-h-[50vh]">
      <div className="responsive-container-content py-2xl">
        <div className="pb-4xl pt-5xl mb-4xl">
          <h1 className={`font-sans text-navy-900 text-base font-black`}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

const MarkdownComponent = ({ content, isGreenBG }) => {
  return (
    <ReactMarkdown
      children={content}
      // todo add styling here for markdown
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        pre: ({ node, ...props }) => <div {...props}></div>,
        code: ({ node, ...props }) => (
          <p
            className="text-navy-900 font-serif py-md text-base"
            {...props}
          ></p>
        ),
        p: ({ node, ...props }) => (
          <p
            className="text-navy-900 font-serif py-md text-base"
            {...props}
          ></p>
        ),
        h1: ({ node, ...props }) => (
          <p className="text-3xl font-bold font-sans pt-md" {...props}></p>
        ),
        h2: ({ node, ...props }) => {
          return (
            <h2 className="text-2xl font-bold font-serif pt-md" {...props}></h2>
          );
        },
        h3: ({ node, ...props }) => (
          <p className="text-xl font-bold font-sans" {...props}></p>
        ),
        h4: ({ node, ...props }) => <p className="" {...props}></p>,
        a: ({ node, ...props }) => <LinkText {...props}></LinkText>,
        ul: ({ node, ...props }) => (
          <ul className="list-disc ml-2xl" {...props} />
        ),
        li: ({ node, ...props }) => <li className="" {...props}></li>,
        ol: ({ node, ...props }) => <ol className="" {...props}></ol>,
      }}
    />
  );
};

const IntroSection = ({ title, body }) => {
  // Includes Sha & rohan's signature that isn't in these
  return (
    <div className="bg-sage-50 py-2xl">
      <div className="responsive-container-content  ">
        <h2 className="text-3xl font-bold font-sans pt-md">{title}</h2>
        <MarkdownComponent content={body} />
      </div>
    </div>
  );
};

const Section = ({
  picture,
  picture_position,
  intro_title_text,
  intro_body,
  body,
  isWhiteBG,
}) => {
  return (
    <div className={`${!isWhiteBG && "bg-sage-50"}`}>
      <div className="responsive-container-content pt-2xl">
        <h2 className="text-3xl font-sans font-bold">{intro_title_text}</h2>
        <MarkdownComponent content={intro_body} />
      </div>
      <div
        className={`flex ${
          picture_position == "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 px-3xl">
          <MarkdownComponent content={body} />
        </div>
        <div className="w-1/2 ">
          <div className="sticky top-0 w-full">
            <Image src={picture} layout="responsive" objectFit="cover"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoutoutSection = ({ }) => {
  return (<div className="responsive-container-content py-2xl">
         <h2>Shoutouts</h2>
         <MarkdownComponent content = {`
At the end of every weekly all-staff meeting, it’s Nava tradition
to show appreciation by “shouting out” particularly special things Navanauts did
that week. It’s a privilege to close our week with gratitude for the work and
each other.  \n\nIt’s with great appreciation that we shout out the communities
that support us, teach us, and cheer us on. Thank you Nava staff, alums, partners,
the Navatots who were born this past year, and last but not least, Navapets for
making the work in this report possible. See below for our complete list of shoutouts
\U0001F389.  \n\nSpecial shoutout to [Brian Rea](http://www.brianrea.com/) for
the illustrations in this report.
         `}/>
         <Button> See all shoutouts </Button>
      </div>
    );
};



/*
const pbr2019data = `---
title: 2019 Public Benefit Report
seo_title: 'Nava: Public Benefit Reports: 2019 Think Long Term'
image: "/uploads/pb_report_thumbnail2019.jpg"
description: Building simple, effective, and accessible government services is an
  ongoing, continuous process. See how thinking long-term informs and strengthens
  our work.
banner: |
  # Public Benefit Report
  {: .h2 .u-color--brand-darkest .u-margin-bottom--0 .u-margin-top--4 }
subtitle: Think Long-term
overview: 'Making government services more responsive to the needs of millions of
  people is an ongoing, continuous process. See how thinking long-term informs and
  strengthens our work.'
url: "/public-benefit-reports/2019"
pdf: "/uploads/2019NavaPublicBenefitReport.pdf"
sections:
  section_1:
    position: 0
    picture: "/uploads/cloud_2019_web.jpg"
    picture_position: left
    intro_title_text: "Creating responsive health care services for 58 million people
      \n"
    intro_body: |-
      We’re partnering with Centers for Medicare & Medicaid Services (CMS) to modernize how Medicare pays doctors.


      Using a human-centered, agile approach, we’re improving the efficiency, flexibility, and reliability of claims processing. In turn, this will raise quality of care, facilitate smarter spending, and support a healthier Medicare population.
    
    main_body: "### Supporting first-class care\n{: .h4 .u-font-weight--medium}\n\nMedicare
      delivers critical health care services to more than [58 million people](https://www.cms.gov/files/document/2018-mdcr-enroll-ab-2.pdf)
      or 18% of the entire U.S. population. Most are [over the age of 65 and/or living
      with disabilities](https://www.cms.gov/files/document/2018-mdcr-enroll-ab-3.pdf).
      Medicare provides more than [$2 billion](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet)
      of vital services per day, or [$750.2 billion annually](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet),
      for vulnerable populations. Its value to the country, health care providers,
      and patients is enormous. \n\nThe payments for these services provide financial
      stability to our entire health care system. Health care providers—from big,
      urban hospitals to small, rural private practices—rely on this cash flow. But
      inflexibility of payment models and the work required to document and process
      claims prevent doctors from being able to provide the best possible care to
      their patients. \n\n#### Modernizing how Medicare pays doctors\n\nWe’re working
      on a project called Medicare Payment System Modernization (MPSM), which will
      help CMS modernize how Medicare pays doctors. MPSM supports innovative payment
      models, reduces the time doctors spend managing paperwork, and lets them focus
      on their patients. \n\nThe current system processes claims using a 40-year-old
      legacy system, built on the mainframe, using the out-dated programming language
      COBOL. It’s inflexible and can’t easily adapt to support things like alternative
      payment models. During our research, one doctor at a major health care provider
      lamented being unable to try in-home services for elderly patients with mobility
      difficulties because they weren’t confident that they would be reimbursed for
      it. Others told us that billing processes and mandatory data entry are a cause
      of burnout so severe that physicians are leaving smaller practices.\n\n####
      Improving quality of care with human-centered design   \n  \nOur
      vision for MPSM is to apply human-centered design to make claims processing
      painless, establish and promote API-first development, and support a larger
      transition from a Fee-for-Service to a Value-based Purchasing Program model.
      All of these things will support better quality of care, smarter spending, and
      a healthier Medicare population. For example, API-first development practices
      power tools like a service-pricing calculator app. As a result, providers are
      able to get quick and accurate pricing information, relieving some of the burden
      they’re currently facing. \n\nWe’re proud to support CMS’s ability, now and
      in the future, to deliver health care services with modern digital infrastructure,
      tools, and practices. "
  section_2:
    position: 1
    picture: "/uploads/vagov_2019_web.jpg"
    picture_position: right
    intro_title_text: Serving Veterans, their families, and caregivers
    intro_body: |-
      Nava worked with the Department of Veterans Affairs (VA) and several partners to make it easier for Veterans to find, understand, and use information about health care and benefits on VA’s websites.

      In a nine-month pilot, we built a new website and streamlined existing ones. Our work will guide VA’s multi-year product roadmap, ultimately improving the experience of VA’s 144 medical facilities’ websites.
    main_body: |-
      ### Making health care and benefits more accessible
      {: .h4 .u-font-weight--medium}

      More than 10 million Veterans and their caregivers visit 144 VA’s medical facilities’ websites every month. They come to make appointments, refill prescriptions, order hearing aid batteries, and more. But many can’t find what they need because information is organized according to VA’s internal structure, not Veterans’ needs. It should be easier for Veterans to access their health care and benefits.

      We partnered with the VA Office of Information Technology’s Digital Experience Product Office (DEPO), Veterans Health Administration (VHA) Digital Media, Agile Six, and CivicActions on a nine-month pilot. We consolidated top VA health services under just one website (*[va.gov](https://www.va.gov/)*), retired websites that had competing or outdated information, streamlined 300\+ webpages, and developed a new website for one of VA’s largest facilities, VA Pittsburgh Healthcare System.

      #### Delivering a better experience now and in the future

      This foundational work, which launched on January 29, 2020 at *[va.gov/pittsburgh-health-care](https://www.va.gov/pittsburgh-health-care/)*, will guide VA’s multi-year product roadmap to help deliver a better experience for Veterans, family members, and caregivers across VA’s medical facilities’ websites and 1,200 health care facilities.

      The new site is responsive, faster, more reliable, and flexible. It employs a modern tech stack and a custom Drupal content management system (CMS). The CMS supports a new information architecture (IA) that reflects the way Veterans search for information so they can find what they need more quickly.

      #### Prioritizing user needs

      As with any human-centered design project, we put users at the center of our work and began with research to understand their needs. DEPO surveyed more than 800 Veterans, asking them to complete 10 key tasks using the newly proposed IA. We used their results to organize content and make design prototypes. As an example, one significant finding was that Veterans identify with VA through their local or regional medical or office site. So we used that as a key principle to guide our organization.

      We regularly iterated on and improved the content and design by observing and listening to 76 Veterans, family members, caregivers, and patient advocates as they used the prototypes and described their experiences:

      "I’d be shocked if this were a VA page. It looks like a modern website. I’m no designer, but the whitespace here helps me find things quicker," said one Veteran.

      Prioritizing Veterans and considering their needs helped us deliver tools and systems to support VA content editors too. The CMS we built also provides guidelines for creating and publishing content so that it’s more clear and consistent across VA websites.

      "Serving Veterans is our priority. We want to sort out the distinctions on our end to get basic information intuitively on the websites so that VA personnel can use their time to support Veterans on more pressing health concerns," said a Pittsburgh staff member.

      When we began rewriting and redesigning content, we prioritized updates that would address the most significant pain points identified during our research. For example, navigation challenges caused stress and frustration, so we decluttered the design and reorganized content according to what Veterans need most.

      "Think about how people are accessing this information when they’re on their mobile devices and are in waiting rooms, trying to find information quickly–and it could be an emergency. This version is good for that. I’m not squinting and having to zoom in and out for everything, especially if I’m stressed," said one Veteran using a prototype with reorganized content.

      ![In this photograph, squares of yellow paper are neatly organized into columns. Each square has text on it to indicate a type of website content, like, “List of health care providers,” “Medical research," and “Shuttle schedule.” Similar information is organized within the same column. For example, “Becoming a patient” and “Set up an appointment” are both under “Health Care.”](/uploads/vagov_cardsort.jpg)
      *During research, one Veteran offered this organization of site content.*
      {: .caption }

      #### Making information clear with plain language

      As we got further into content auditing, consolidation, and rewriting for the VA Pittsburgh site, we doubled down on plain language practices. We wanted to make all of the information we published more consistent, conversational, clear, helpful, and empathetic. We conducted three rounds of paraphrase testing with 28 Veterans. The ultimate goal was to draft content that would better prepare Veterans for their medical visits. Overall, we reduced the total word count and site pages by 87 percent.

      "I like that it’s pretty simple. I can find things by scrolling rather than clicking on a million tabs," said one Veteran.

      As we cut words in some places, we added words in others. We learned that to help Veterans find information quickly, we needed to write in the second person. So, instead of, “The VA provides suicide prevention services,” we used “If you are a Veteran in crisis or concerned about one, connect with qualified responders for confidential help.”

      "I like that it’s very straight to the point—and I like that I can see all health services," said one Veteran.

      With help from our partners at VA Office of Information Technology’s Digital Experience Product Office (DEPO), Veterans Health Administration (VHA) Digital Media, CivicActions, and Agile 6, we were able to better understand the people we were designing for. By focusing on the experience of Veterans, we helped make it easier—as it should be—for them to access health care and benefits through *[va.gov](https://www.va.gov/)*.
  section_3:
    position: 2
    picture: "/uploads/IB_2019_web.jpg"
    picture_position: left
    parent_label: policy
    intro_title_text: Working to end entrenched poverty
    intro_body: "The effort to end entrenched poverty in the U.S. requires enduring
      work. Thankfully, we’ve found partners who are as committed as we are to building
      an equitable, accessible safety net. \n\nIn a multi-year project, we’re using
      a modular approach to unify Vermont’s extensive benefit system. Our goal is
      for people to understand, access, and maintain their benefits more easily, in
      one place."
    main_body: |-
      ### Building seamless access to public benefits for all in need
      {: .h4 .u-font-weight--medium}

      Over the last two years, we’ve worked with the State of Vermont to improve government services for people who find themselves living at or below the poverty line. The first pilot we worked on together is now a full-fledged service that supports the State’s health care and financial benefit programs. Building on that success, we worked together to bolster a long-term strategy that will ultimately help Vermonters seamlessly access public benefits from a single place.

      Vermont’s current benefit system includes up to 37 health care and financial benefit programs—that provide things like free or low-cost health care—for [thousands of Vermonters](https://spotlightonpoverty.org/states/vermont/). People who are living on low incomes, those who are over 65 years old, people with disabilities, and people who are pregnant and/or caring for young children are eligible for benefits.

      Vermont’s system is extensive. But even before we started working together, the State had identified opportunities to better support Vermonters. For example, there’s no single place for people to find, apply for, access, and maintain the benefits they’re eligible for. Health care and financial benefit programs require submitting the same information in multiple places. When the State did research, one Vermont resident said that managing their benefits was “extremely time-consuming and frustrating.”

      #### Approaching big problems with small, flexible tools

      Our approach to addressing large-scale problems like these is to build and release small, modular tools that can be reused and expanded upon. This enables us to quickly and consistently deliver services that help people now, while also building a foundation that supports the long-term vision of integrating all health care and financial benefit programs. Over time, Vermont will be able to replace inflexible and inefficient legacy systems safely, and with minimal impact to services.

      ![This image shows two parts of a clear and simple form. The headlines say “Tell us about yourself” and “Tell us about your spouse.” The questions ask things like, “What’s your first name? What’s your last name?”](/uploads/vt-mabd-app.gif){: .u-border--dark .u-border--1}
      *The online application makes it easier for health care applicants to submit information about themselves and their households.*
      {: .caption }

      #### Creating processes to support integration of new tools

      In our first pilot project (which we reported on [last year](https://www.navapbc.com/2018-public-benefit-report/)), we designed and built a tool for Vermonters to submit their eligibility documents electronically. This uploader saves people time and helps them submit documents more easily by using their phone or computer instead of by mail or traveling in person. Alongside the design and development of the tool, we also created a process that helped State staff integrate the uploader into their program’s operations, according to their timelines and priorities.

      By late 2019, the uploader was a reliable and robust official channel for Vermonters to apply to any of the 37 programs. And now, thousands of Vermonters have used the uploader. Fifty-five percent of users were able to upload documents within 24 hours, compared to just eleven percent before. And, 98 percent said they would use it again. One reported that it’s the “easiest and clearest website I’ve used in some time.” The immediate improvements are clear. But they’re also just the tip of the iceberg.

      #### Repeating success by solving common problems with reusable tools

      We built the uploader to solve a common problem across many benefit programs: time wasted while submitting documents by mail or in person. To build it, we used components or patterns that can be reused for other applications: front-end design and code that can be adapted for a range of eligibility documents; back-end code for securely formatting and storing submitted documents; and an automated uploader that reliably makes documents accessible to State staff. So, while the uploader was quickly adopted to meet Vermonters’ current needs, the State can continue to reuse and expand upon it to cover more benefit programs and quickly adapt as policies change.

      After the success of the uploader, we used the same strategy to start building Vermont’s first integrated online application. This second pilot serves a specific program, Medicaid for the Aged, Blind, or Disabled. But, like the uploader, it comprises components that can be reused and expanded upon to address a common problem: benefit applications are confusing and require entering the same information in multiple places. The new online application is clear and simple, and will also eventually serve all health care and financial benefit programs, ensuring a consistent and easy experience for benefit applicants. And we’re again working closely with State staffers on training processes and materials that enable adoption of the new service without interrupting current service delivery.

      Our strategy with these pilots has helped Vermont more quickly respond to Vermonters’ needs in the near term and will continue to do so efficiently and cost-effectively—even as policies and needs change—in the future. We’re looking forward to seeing this work continuously make it easier for people to get support and assistance from the government, quickly and efficiently. We’re grateful to our partners for helping us bridge best-in-class design, technical, product, and policy expertise to better serve Vermonters in times of need.
  section_4:
    position: 3
    picture: "/uploads/caseflow_2019_web-147555.jpg"
    picture_position: right
    intro_title_text: Illuminating policy futures
    intro_body: "Entrusted with modernizing the digital systems that power the appeals
      process for Veterans applying for benefits, Nava took a holistic, human-centered
      approach. \n\nWe researched, prototyped, and iterated, improving the technology
      *and* the experiences of Veterans and VA employees. Along the way, we also helped
      update an 85-year-old policy."
    main_body: |-
      ### Improving the appeals process for Veterans
      {: .h4 .u-font-weight--medium}

      Esteemed designer and educator Liz Danzico calls interaction design “the exploration of recently possible futures.” In government, you could say service design is the illumination of policy futures. Because policy change is a long, winding, and often circuitous route from writing to implementing a law, it’s not always easy to see what it will look like in real life. Design practices like user research, prototyping, testing, and mapping can help illuminate a variety of possibilities and build a case for the best one—a policy that meets the needs of those it serves.

      While working with the United States Digital Service (U.S. Digital Service) and U.S. Department of Veterans Affairs (VA) to build a suite of digital services called [Caseflow](https://www.usds.gov/report-to-congress/2017/fall/veterans-disability-claims/), we helped update an 85-year-old policy and improve the experiences of millions of Veterans and 380,000 civil servants by applying human-centered design practices.

      We were tasked with modernizing the information systems and digital tools behind the Veterans’ appeals process. This process allows Veterans to appeal decisions made about their benefits (compensation for medical conditions connected to military service, financial assistance for education, etc). In some cases, the appeals process is totally straightforward. But if any changes need to be made to a Veteran’s case, it can be delayed or derailed. As a result, [400,000 Veterans wait five years or longer](https://www.wsj.com/articles/hundreds-of-thousands-of-veterans-appeals-dragged-out-by-huge-backlog-1534935600) to receive a decision on their appeal. A significant minority of Veterans wait decades.

      The major appeals processing system was first written and launched in the 1980s. Maintaining it was costly and we could see that other problems weren’t solely technical. In the decades since the appeals process was created, the system had grown large and complicated as policies and technologies changed.

      #### Aligning on a mission to improve experiences for everyone

      Before Nava joined this project, our colleagues from U.S. Digital Service started by aligning with VA on a mission statement with clear, agreed upon outcomes: Empower Board employees with technology to increase timely, accurate appeals decisions and improve the Veteran experience.

      Agreeing on outcomes allowed us to step away from approaches that updated technology but did not improve the experience for Veterans or VA employees. Instead, we partnered with VA to research, prototype, and iterate our way to services which were both human-centered and technically sound.

      One example: During research we found that 40 percent of cases arriving at the Board of Veteran Appeals had missing documents. And 33 percent of cases had data discrepancies that caused delays. Upon looking more closely, we discovered that a required part of the appeals process—filling out the [Form 8](https://www.va.gov/vaforms/va/pdf/VA8.pdf), signaling the appeal was officially at the Board for review—had become redundant. It was also a source of data discrepancies and productivity loss because it required manual data corroboration. Despite this research, the form couldn’t easily be removed from the caseworkers’ process without a change in regulations, a lengthy and infrequent process.

      #### Prototyping to a change in policy

      So, we quickly designed a prototype to demonstrate that automatically filling out the Form 8 would ease the burden of manual data entry and corroboration, while still meeting regulation and policy requirements. From that prototype, we built a working solution that focused on the caseworker’s task at hand, rather than satisfying the form itself. We also created documentation to train caseworkers on the updated process and rolled it out to 70 regional offices. Now, fewer than five percent of cases processed with Caseflow have data discrepancies. And, the requirement to fill out Form 8 has since been [removed from the regulations](https://www.govinfo.gov/content/pkg/FR-2019-01-18/pdf/2018-28350.pdf).

      Form 8 was a small victory that ultimately made a big impact for Veterans. The design practices that illuminated a future without Form 8 also helped us build other tools for Veterans and VA employees, like a tracker for Veterans to see the status of their appeal.

      Caseflow has been recognized by FCW, FedHealthIT, and other government technology associations for its commitment to better serving Veterans. And this year, Caseflow won [FedHealthIT's 2020 Innovation Award](https://www.fedhealthit.com/2020/02/fedhealthit-2020-innovation-award-winners-announced/). Our work catalyzed improvements that will not only benefit Veterans in the more immediate future but also for the long-run, as policies are updated to better meet their needs.
shoutouts:
  intro_title_text: Shoutouts
  shoutouts_intro_body: "At the end of every weekly all-staff meeting, it’s Nava tradition
    to show appreciation by “shouting out” particularly special things Navanauts did
    that week. It’s a privilege to close our week with gratitude for the work and
    each other.  \n\nIt’s with great appreciation that we shout out the communities
    that support us, teach us, and cheer us on. Thank you Nava staff, alums, partners,
    the Navatots who were born this past year, and last but not least, Navapets for
    making the work in this report possible. See below for our complete list of shoutouts
    \U0001F389.  \n\nSpecial shoutout to [Brian Rea](http://www.brianrea.com/) for
    the illustrations in this report.\n{: .text-center}\n"
  toggle_title: See all shoutouts
  list:
    Navanauts: |-
      - Ross Aboff
      - Shannon Alexander Navarro
      - Jess Alves de Sa
      - Tomas Apodaca
      - Jenna Aronow
      - Barbara Ayala
      - Sheldon Bachstein
      - Rohan Bhobe
      - Alex Bisker
      - Arin Black
      - Zoe Blumenfeld
      - Sheena Bryant
      - Nicole Budzius
      - Jessi Bull
      - James Bursa
      - Chandra Carney
      - Mike Case
      - Melissa Chapman
      - Tiffany Chen
      - Eric Chiu
      - Michael Chouinard
      - Viviane Crosthwaite
      - Jim Delloso
      - Daniella DeVera
      - Carolyn Dew
      - Tanner Doshier
      - Stephan Dyson
      - Adrienne Era
      - Sean Fern
      - Domenic Fichera
      - Tamar Fox
      - Ana Garcia Jimenez
      - Austin Gardner
      - Genevieve Gaudet
      {:.l-sm-col-4}
      - Afia Genfi
      - David Goeke
      - Rutvika Gupta
      - Brian Hanley
      - Lisa Hardee
      - Jacob Harris
      - Jeffrey Her
      - Kelli Ho
      - Sawyer Hollenshead
      - Billy Powhatan Hunt III
      - James Hupp
      - Sha Hwang
      - Janelle James
      - Allison Johnson
      - Tim Jones
      - Amanda Kennedy
      - Meghana Khandekar
      - Joe Kleinschmidt
      - Yoom Lam
      - Roger Lam
      - Laura Lanford
      - Alice Lemieux
      - Jodi Leo
      - Wei Leong
      - Charlotte Lewis
      - Andrew Lomax
      - Sally Maki
      - Molly McLeod
      - Martha Michael
      - Kim Minnick
      - Christian Monaghan
      - Ed Mullen
      - Regina Neal
      - Brendan Neutra
      - Ivana Ng
      {:.l-sm-col-4}
      - Alisa Nguyen
      - Aaron Ogle
      - Stephanie Owens
      - Sneha Pai
      - Lauren Peterson
      - Ian Petruziello
      - Rebecca Piazza
      - Alsia Plybeah
      - Jessie Posilkin
      - Maya Praff
      - Alex Prokop
      - Angel Quicksey
      - JC Quirin
      - Oscar Ramirez
      - Geronimo Ramos
      - Rubaiyat Rashid
      - Amanda Robinson
      - Nichole Rosamilia
      - Jim Ruggiero
      - Frances Ruiz
      - Ryan Sibley
      - Mike Smorul
      - Joanne Stableford
      - Makaela Stephens
      - Anke Stohlmann
      - Cheryl Swirnow
      - Kat Tipton
      - Ferris Tseng
      - Kalvin Wang
      - Sharon Warner
      - Sarah White
      - Lowell Wood
      - Yang Yang
      - Kevin Yeh
      - Loren Yu
      {:.l-sm-col-4}
    Navalums: |-
      - Allison Newman
      - Elliot Truslow
      - Eli Kim
      - Jazmyn Latimer
      {:.l-sm-col-4}
      - Jia Huang
      - Kenshiro Nakagawa
      - Mari Puncel
      - Mark Benjamin
      {:.l-sm-col-4}
      - Sam Keller
      - Stephanie Lawrence
      - Sunil Sadasivan
      - Xena Ni
      - Marcos Torres
      {:.l-sm-col-4}
    Navapartners: |
      - 18F
      - Center on Budget and Policy Priorities
      - Centers for Medicare & Medicaid Services
      {:.l-sm-col-4}
      - Code for America
      - Department of Veterans Affairs
      - Digital Service at VA
      - Digital Services Coalition
      {:.l-sm-col-4}
      - State of Vermont
      - United States Digital Service
      - Veterans Affairs Office of Information Technology’s Digital Experience Product Office
      {:.l-sm-col-4}
    Navatots: |-
      - Audrey Isla Marie
      {:.l-sm-col-4}
      - Nathan Ari
      {:.l-sm-col-4}
    Navapets: |-
      - Adie
      - Albus Dumbledog
      - Annie
      - Augie
      - Beau
      - Beatrice
      - Belle
      - Benji
      - Blondie
      - Buffy
      - Charlie
      - Chloe
      - Cinder
      - Dante
      - Dori
      - Elizabeth
      - Ernest “Ernie” Hemingway
      - Finnegan
      - Fiona
      - Fisher
      - Frankie
      - Chloe
      - Garry
      {:.l-sm-col-4}
      - Garfield
      - Gatsby
      - Isabella
      - Jake Hemingway
      - Jasper
      - Jinx
      - Jinxxy
      - Kirby
      - Komi
      - Laika
      - Leeloo
      - Lucy
      - Luna
      - Luna
      - Mae
      - Mao
      - Marble
      - Martha
      - Max
      - Mitch
      - Muuaji
      - Neko
      - Newton
      - Oreo
      {:.l-sm-col-4}
      - Oscar
      - Penny
      - Polly
      - Posy
      - Precious
      - Radar
      - Rafaella
      - Ragnar
      - (Red) Sonja
      - Rose
      - Sasquatch (Sassy)
      - Scully
      - Shadow
      - Spock
      - Sue
      - Victoria
      - Waffie
      - Waffles
      - Wilbur
      - Xingfu
      - Yeti
      - Zatoichi
      - Zhi
      {:.l-sm-col-4}
join_us:
  title_text: Join us
  body: |
    Join us if you’d like to apply your skills to critical public services. We seek and value different perspectives and build with empathy and inclusion.

    To learn more about working at Nava, [browse open positions](/careers/open-roles).
layout: 2019_pbc_report
---
Body Text
`;
*/