
const Footer = () =>{
    return (<div className={"bg-navy-dark "}>
        <div className="responsive-nav pb-md">

        <hr className="h-2 bg-navy-light"/>
        <div className="flex flex-wrap text-white  my-16 ">
        <div className="md:w-1/3 font-sans">
           
        </div>
        <div className=" w-1/2 md:w-1/6 font-sans py-sm">
           
                <h4 className="font-bold">Mission</h4>
                <a href={"/impact"}>Impact </a><br/>
                <a>Values</a><br/>
         
          
        </div>
        <div className="w-1/2 md:w-1/6 font-sans py-sm">
            <ul>
                <li className="font-bold">Work</li>
                <li>Services </li>
                <li>Case studies</li>
                <li>Toolkits</li>
            </ul>
        </div>
        <div className="w-1/2 md:w-1/6 font-sans py-sm">
        <ul>
                <li className="font-bold">About</li>
                <li>Our Story</li>
                <li>Our People</li>
                <li>Diversity, Equity, & Inclusion</li>
                <li>News</li>
            </ul>
        </div>
        <div className="w-1/2 md:w-1/6 font-sans py-sm">
           <ul>
                <li className="font-bold">Career</li>
                <li>Working At Nava </li>
                <li>Open roles</li>
            </ul>
        </div>
       
        </div>
        <hr className=" bg-white"/>
        <div>
           <p className="text-white font-sans text-xs">©2021 NavaPBC. All rights reserved.</p>
        </div>

        </div>
    </div>
    )
}
export default Footer;

