import {
  LargeHero,
  SectionHeader,
  LeftRepeater,
  RightRepeater,
  ThreeColumnGrid
} from "components/row/index";
import {
  ListCard
} from "components/atom/index";
import Image from "next/image";
import careersImg1 from "public/images/careers-presentation-img.png";
import careersImg2 from "public/images/careers-outdoor.png";
import careersImg3 from "public/images/careers-couch.png";
import careersImg4 from "public/images/careers-team.png";
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
      <LargeHero
        title={"Careers"}
        subtitle={
          "Come help us build the services of a better future for millions of people."
        }
        colorTheme={colorTheme}
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
      <LeftRepeater
        title={"Nava is a public benefit corporation"}
        buttonText={"Learn about our mission"}
        buttonPath={"/mission"}
        image={careersImg1}
        colorTheme={colorTheme}
      >
        This means we’re accountable to our social mission: to make it easier
        for people to access social safety net programs.
      </LeftRepeater>
      <hr />
      <RightRepeater
        title={"Our values guide how we serve the public"}
        image={careersImg3}
        buttonPath={"/mission/values"}
        buttonText="See our values"
        colorTheme={colorTheme}
      >
        Every day we make countless decisions that inform our ability to improve
        how government serves everyone, and we don’t take that lightly.
      </RightRepeater>
      <hr />
      <LeftRepeater
        title={"Our teams must reflect the communities we serve"}
        buttonText={"Read our DE&I report"}
        buttonPath={"/mission"}
        colorTheme={colorTheme}
        image={careersImg2}
      >
        By 2025, we hope Nava better matches the representation of race and
        ethnicity in the US by comprising majority Black, Indigenous, and People
        of Color.
      </LeftRepeater>
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
      <ThreeColumnGrid>
       <ListCard
       colorTheme={colorTheme}
        title={"Generous health benefits"}
        items={[
          "Highly competitive medical, dental and vision benefits",
          "Unlimited sick time",
          "16 weeks of fully paid parental leave, including weekly meal deliveries, for eligible new birth, adoption, or foster parents",
          "Life insurance and short- and long-term disability"
        ]}
       />
       <ListCard
       colorTheme={colorTheme}
        title={"Competitive compensation"}
        items={[
          "Highly competitive medical, dental and vision benefits",
          "Unlimited sick time",
          "16 weeks of fully paid parental leave, including weekly meal deliveries, for eligible new birth, adoption, or foster parents",
          "Life insurance and short- and long-term disability"
        ]}
       />
       <ListCard
       colorTheme={colorTheme}
        title={"Room for personal growth"}
        items={[
          "Highly competitive medical, dental and vision benefits",
          "Unlimited sick time",
          "16 weeks of fully paid parental leave, including weekly meal deliveries, for eligible new birth, adoption, or foster parents",
          "Life insurance and short- and long-term disability"
        ]}
       />
      </ThreeColumnGrid>
      <div className="mx-3xl my-xl">
        <Image 
        className="max-w-full"
        src={careersImg4} 
        ></Image>
      </div>
    </div>
  );
}