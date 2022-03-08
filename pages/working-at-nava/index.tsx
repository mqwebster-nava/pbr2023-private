import {
  LargeHero,
  SectionHeader,
  LeftRepeater,
  RightRepeater,
  ThreeColumnGrid,
  ContentBlockLinkToPage,
  ContentBlockText,
  ContentBlockText2,
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/row/index";
import { ContentCard } from "components/atom/index";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import React from "react";
// import careersImg1 from "public/images/careers-presentation-img.png";
// import careersImg2 from "public/images/careers-outdoor.png";
// import careersImg3 from "public/images/careers-couch.png";
// import careersImg4 from "public/images/careers-team.png";
//https://www.digitalocean.com/community/tutorials/react-axios-react

/*
In the open positions page, we are getting Nava's open positions from Lever's API,
since all the roles are updated there.

We use axios to call the api at page load and display them in groupings.

*/

export default function Careers() {
  const colorTheme = "purple";
  return (
    <div>
      <PlaceholderPageHeader
        title={"Working at Nava"}
        subtitle={"Make a positive impact"}
      />
      <hr />
      <SectionHeader
        title={"Work on projects with a positive impact"}
        colorTheme={colorTheme}
      >
        Nava positively transforms the technology that helps people access
        public benefits. As a client services company, are clients are states
        and federal agencies. We help them improve how people apply for
        benefits, navigate their healthcare, and much more.
      </SectionHeader>

      <hr />
      <ContentBlockLinkToPage
        title={"Nava is a public benefit corporation"}
        buttonText={"Learn about our mission"}
        buttonPath={"/mission"}
      >
        This means we’re accountable to our social mission: to make it easier
        for people to access social safety net programs.
      </ContentBlockLinkToPage>
      <hr />
      <ContentBlockLinkToPage
        title={"Our values guide how we serve the public"}
        buttonPath={"/mission/values"}
        buttonText="See our values"
      >
        Every day we make countless decisions that inform our ability to improve
        how government serves everyone, and we don’t take that lightly.
      </ContentBlockLinkToPage>

      <hr />
      <ContentBlockLinkToPage
        title={"Our teams must reflect the communities we serve"}
        buttonText={"Read our DE&I report"}
        buttonPath={"/mission"}
      >
        By 2025, we hope Nava better matches the representation of race and
        ethnicity in the US by comprising majority Black, Indigenous, and People
        of Color.
      </ContentBlockLinkToPage>
      <hr />
      <SectionHeader
        title={"Focus on your future, too"}
        colorTheme={colorTheme}
      >
        We offer excellent compensation and benefits because we value our
        peoples’ health, futures, and lives outside of work. Nava has generous
        and flexible work and leave policies so that you can take care of
        yourself and your loved ones when you need to.
      </SectionHeader>
      <hr />
      <ContentBlockText2 title={"Generous health benefits"}>
        <ul className="list-disc">
          {[
            "Highly competitive medical, dental and vision benefits",
            "Unlimited sick time",
            "16 weeks of fully paid parental leave, including weekly meal deliveries, for eligible new birth, adoption, or foster parents",
            "Life insurance and short- and long-term disability",
          ].map((item) => (
            <li key={item.length} className="font-sans text-base">
              {item}
            </li>
          ))}
        </ul>
      </ContentBlockText2>
      <hr />
      <ContentBlockText2 title={"Competitive compensation"}>
        <ul className="list-disc">
          {[
            "Highly competitive medical, dental and vision benefits",
            "Unlimited sick time",
            "16 weeks of fully paid parental leave, including weekly meal deliveries, for eligible new birth, adoption, or foster parents",
            "Life insurance and short- and long-term disability",
          ].map((item) => (
            <li key={item.length} className="font-sans text-base">
              {item}
            </li>
          ))}
        </ul>
      </ContentBlockText2>
      <hr />
      <ContentBlockText2 title={"Room for personal growth"}>
        <ul className="list-disc">
          {[
            "Highly competitive medical, dental and vision benefits",
            "Unlimited sick time",
            "16 weeks of fully paid parental leave, including weekly meal deliveries, for eligible new birth, adoption, or foster parents",
            "Life insurance and short- and long-term disability",
          ].map((item) => (
            <li key={item.length} className="font-sans text-base">
              {item}
            </li>
          ))}
        </ul>
      </ContentBlockText2>
      <hr />
      <SectionHeader
        title={"Learn more about working at Nava"}
        colorTheme={colorTheme}
      >
        See what an average day at Nava looks like for people in different
        roles, what kinds of things we’re learning about, and how our interview
        process works.
      </SectionHeader>
      <hr />
      <ContentBlockArticleList
        title={"A day  at Nava"}
        buttonText={"Read more"}
        buttonPath={""}
        body={
          "New projects, challenges, and opportunities mean no two days at Nava are alike."
        }
      >
        <ContentCard
          title={"A day at Nava as an infrastructure engineer"}
          path={"/"}
        >
          A day at Nava with Wei Leong, an infrastructure engineer working on
          the Medicare Payment System Modernization team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a program strategist"} path={"/"}>
          A day at Nava with Martelle Esposito, a program strategist working on
          the Massachusetts Paid Family and Medical Leave team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a software engineer"} path={"/"}>
          A day at Nava with Sharon Warner, a software engineer working on the
          Vermont Integrated Benefits team.
        </ContentCard>
      </ContentBlockArticleList>
      <hr />
      <ContentBlockArticleList
        title={"What we’re learning"}
        buttonText={"Read more"}
        buttonPath={""}
        body={
          "People at Nava have opportunities to grow their skills holistically as we solve complex problems for our government partners."
        }
      >
        <ContentCard
          title={"A day at Nava as an infrastructure engineer"}
          path={"/"}
        >
          A day at Nava with Wei Leong, an infrastructure engineer working on
          the Medicare Payment System Modernization team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a program strategist"} path={"/"}>
          A day at Nava with Martelle Esposito, a program strategist working on
          the Massachusetts Paid Family and Medical Leave team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a software engineer"} path={"/"}>
          A day at Nava with Sharon Warner, a software engineer working on the
          Vermont Integrated Benefits team.
        </ContentCard>
      </ContentBlockArticleList>
      <hr />
      <ContentBlockArticleList
        title={"Interviewing at Nava"}
        buttonText={"Read more"}
        buttonPath={""}
        body={
          "If you’re interested in applying to work at Nava, here’s what the process will look like. "
        }
      >
        <ContentCard
          title={"A day at Nava as an infrastructure engineer"}
          path={"/"}
        >
          A day at Nava with Wei Leong, an infrastructure engineer working on
          the Medicare Payment System Modernization team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a program strategist"} path={"/"}>
          A day at Nava with Martelle Esposito, a program strategist working on
          the Massachusetts Paid Family and Medical Leave team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a software engineer"} path={"/"}>
          A day at Nava with Sharon Warner, a software engineer working on the
          Vermont Integrated Benefits team.
        </ContentCard>
      </ContentBlockArticleList>
      <Newsletter/>
    </div>
  );
}

