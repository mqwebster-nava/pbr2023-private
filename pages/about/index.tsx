import LargeHero from "components/row/LargeHero/LargeHero";
export default function About() {
    return (  <div>
       <LargeHero 
      title={"About"} 
      subtitle={"Come help us build the services of a better future for millions of people."} 
      colorTheme={"plum"} 
      ctaTitle={"Join a thoughtful, mission-oriented team"} 
      ctaBody={"Nava positively transforms the technology that helps millions of people access public services. We are a professional services company that works alongside our government clients to help them better serve their communities."} 
      ctaButtonText={"View Open Roles"}
      ctaButtonPath={""}
    />
    <div>
      
         <a href="/about/news">News</a><br />
         <a href="/about/team">Team</a>
         <a href="/about/contact">Contact Us</a> <br />
    </div>
       </div> );
}
  