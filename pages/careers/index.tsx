import LargeHero from "components/row/LargeHero/LargeHero";

export default function Careers() {
  return (
    <div>
    <LargeHero 
      title={"Careers"} 
      subtitle={"Come help us build the services of a better future for millions of people."} 
      colorTheme={"green"} 
      ctaTitle={"Join a thoughtful, mission-oriented team"} 
      ctaBody={"Nava positively transforms the technology that helps millions of people access public services. We are a professional services company that works alongside our government clients to help them better serve their communities."} 
      ctaButtonText={"View Open Roles"}
      ctaButtonPath={""}
    />
      <a href="/careers/working-at-nava">Working At Nava</a> <br />
      <a href="/careers/open-roles">Open Roles</a>
    </div>
  );
}
