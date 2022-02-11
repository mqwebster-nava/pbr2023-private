
import LargeHero from "components/row/LargeHero/LargeHero";
export default function Work() {
    return ( <div>
       <LargeHero 
      title={"Work"} 
      subtitle={"Come help us build the services of a better future for millions of people."} 
      colorTheme={"gold"} 
    />
       <div>
         <a href="/work/case-studies">Case Studies</a> <br />
         <ul>
           <li> <a href="/case-studies/supporting-veterans-with-virtual-tele-hearings">Supporting Veterans With Virtual Tele-Hearings</a></li>
         </ul>
       </div>
       </div>  );
}
  