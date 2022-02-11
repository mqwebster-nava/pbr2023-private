import LargeHero from "components/row/LargeHero/LargeHero";
export default function About() {
    return (  <div>
       <LargeHero 
      title={"About"} 
      subtitle={"Come help us build the services of a better future for millions of people."} 
      colorTheme={"plum"} 
    />
    <div>
      
         <a href="/about/news">News</a><br />
         <a href="/about/team">Team</a>
         <a href="/about/contact">Contact Us</a> <br />
    </div>
       </div> );
}
