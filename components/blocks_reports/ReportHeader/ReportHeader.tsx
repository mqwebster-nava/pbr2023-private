import ReportHeaderHero2019 from "./ReportHeader2019";
import ReportHeader2018 from "./ReportHeader2018";
import ReportHeader2020 from "./ReportHeader2020";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";
import ReportHeader2021 from "./ReportHeader2021";


const ReportHeader = (props:PageHeaderInterface) => {
    const variant = props.variant;
    return (variant==="2018"? <ReportHeader2018 {...props}/>
         : variant==="2019" ? <ReportHeaderHero2019  {...props}/>
         : variant==="2020" ?  <ReportHeader2020  {...props}/>
         : variant==="2021" ? <ReportHeader2021  {...props}/>
         : null );
    
};

export default ReportHeader;
