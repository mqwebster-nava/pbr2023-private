import React from "react";
import ReportMenu from "./ReportNavbar/ReportMenu";

const ReportFooter2022 = ({reportSections, contentBlocks}) => {
    return (
        <footer className="bg-gray-100">
            <ReportMenu activeSection={reportSections} contentBlocks={contentBlocks} />
        </footer>
    )
}

export default ReportFooter2022