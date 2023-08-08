import React from "react";
import ReportMenu from "./ReportNavbar/ReportMenu";

const ReportFooter2022 = ({reportSections, contentBlocks, openStory}) => {
    return (
        <footer className={`bg-gray-100 ${openStory && `hidden`}`}>
            <ReportMenu activeSection={reportSections} contentBlocks={contentBlocks} />
        </footer>
    )
}

export default ReportFooter2022