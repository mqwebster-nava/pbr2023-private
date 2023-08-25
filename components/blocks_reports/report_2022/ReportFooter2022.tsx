import React from "react";
import ReportMenu from "./ReportNavbar/ReportMenu";

const ReportFooter2022 = ({reportSections, contentBlocks, activeStory}) => {
    return (
        <footer className={`${activeStory && `hidden`} bg-gray-100`}>
            <ReportMenu activeSection={reportSections} contentBlocks={contentBlocks} onClick={() => {}} />
        </footer>
    )
}

export default ReportFooter2022