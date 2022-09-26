import { Button } from "components/atom";
import Image from "next/image";
import banner from "public/images/pbrs/2019-head.png"
import ReportHeaderHero2019 from "./ReportHeaderHero2019";
import ReportHeader2018 from "./ReportHeader2018";
import ReportHeader2020 from "./ReportHeader2020";
import ReportHero2021 from "../NewReportSection/ReportHero2021";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";


const ReportHeader = (props:PageHeaderInterface) => {
    const variant = props.variant;
    return (variant==="2018"? <ReportHeader2018 {...props}/>
         : variant==="2019" ? <ReportHeaderHero2019  {...props}/>
         //: variant==="2020" ?  <ReportHeader2020  {...props}/>
         : variant==="2021" ? <ReportHero2021  {...props}/>
         : null );
    
};

export default ReportHeader;
