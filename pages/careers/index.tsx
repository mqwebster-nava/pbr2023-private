import {
  LargeHero,
  SectionHeader,
  LeftRepeater,
  RightRepeater,
} from "components/row/index";
import Image from "next/image";
import careersImg1 from "public/images/careers-presentation-img.png";
import careersImg2 from "public/images/careers-outdoor.png";
import careersImg3 from "public/images/careers-couch.png";

export default function Careers() {
  const colorTheme = "pink";
  return (
    <div>
      <LargeHero
        title={"Careers"}
        subtitle={
          "Come help us build the services of a better future for millions of people."
        }
        colorTheme={colorTheme}
        ctaTitle={"Join a thoughtful, mission-oriented team"}
        ctaBody={
          "Nava positively transforms the technology that helps millions of people access public services. We are a professional services company that works alongside our government clients to help them better serve their communities."
        }
        ctaButtonText={"View Open Roles"}
        ctaButtonPath={""}
      />
      <hr/>
      <SectionHeader
        title={"Work on projects with a positive impact"}
        colorTheme={colorTheme}
      >
        Nava positively transforms the technology that helps people access
        public benefits. As a client services company, are clients are states
        and federal agencies. We help them improve how people apply for
        benefits, navigate their healthcare, and much more.
      </SectionHeader>
      <hr/>
      <LeftRepeater
        title={"Nava is a public benefit corporation"}
        buttonText={"Learn about our mission"}
        buttonPath={"/mission"}
        image={careersImg1}
      >
        This means we’re accountable to our social mission: to make it easier
        for people to access social safety net programs.
      </LeftRepeater>
      <hr/>
      <RightRepeater
        title={"Our values guide how we serve the public"}
        image={careersImg3}
      >
        Every day we make countless decisions that inform our ability to improve
        how government serves everyone, and we don’t take that lightly.
      </RightRepeater>
      <hr/>
      <LeftRepeater
        title={"Our teams must reflect the communities we serve"}
        buttonText={"Learn about our mission"}
        buttonPath={"/mission"}
        image={careersImg2}
      >
        By 2025, we hope Nava better matches the representation of race and
        ethnicity in the US by comprising majority Black, Indigenous, and People
        of Color.
      </LeftRepeater>
      <hr/>
      <SectionHeader
        title={"Focus on your future, too"}
        colorTheme={colorTheme}
      >
        We offer excellent compensation and benefits because we value our
        peoples’ health, futures, and lives outside of work. Nava has generous
        and flexible work and leave policies so that you can take care of
        yourself and your loved ones when you need to.
      </SectionHeader>
      <hr/>
      <div className="mx-3xl w-full">
        <Image className={`w-screen object-cover`} src={careersImg2}></Image>
      </div>
    </div>
  );
}
