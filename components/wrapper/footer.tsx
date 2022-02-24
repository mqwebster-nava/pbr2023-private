
const Footer = () =>{
    return (<div className={"bg-navy-dark flex gap-10 text-white px-10 py-16 "}>
        <div className="md:w-1/4 font-sans">
            <ul>
                <li>Careers</li>
                <li>Team </li>
                <li>Case studies</li>
                <li>Services</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="md:flex-grow font-sans"> 
               <h4 className="pb-3 text-lg font-bold">Contact Us</h4>
               <p className="text-base">We’d love to talk to you if you’re facing similar challenges at any level of government, or if you’d just like to say hi at hello@navapbc.com.<br/>Nava is a public benefit corporation that is headquartered in Washington, DC with offices in San Francisco and New York.</p>
        </div>
        <div className="md:flex-grow font-sans"> 
        <h4 className="pb-3 text-lg font-bold">Stay Up to Date</h4>
        <p className="text-base"> Sign up for our newsletter for occasional emails where we share our experiences working with government systems and structures as we learn and grow.</p>
        </div>
            
    </div>
    )
}
export default Footer;

