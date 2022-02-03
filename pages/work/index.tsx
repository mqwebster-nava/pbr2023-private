
import LargeHero from "components/row/LargeHero/LargeHero";
export default function Work() {
    return ( <div>
       <LargeHero 
      title={"Work"} 
      subtitle={"Come help us build the services of a better future for millions of people."} 
      colorTheme={"orange"} 
      ctaTitle={"Join a thoughtful, mission-oriented team"} 
      ctaBody={"Nava positively transforms the technology that helps millions of people access public services. We are a professional services company that works alongside our government clients to help them better serve their communities."} 
      ctaButtonText={"View Open Roles"}
      ctaButtonPath={""}
    />
       <div>
         <a href="/work/case-studies">Case Studies</a> <br />
         <ul>
           <li> <a href="/case-studies/supporting-veterans-with-virtual-tele-hearings">Supporting Veterans With Virtual Tele-Hearings</a></li>
         </ul>
       </div>
       </div>  );
}
  