import React from "react";
import ReportMenu from "./ReportNavbar/ReportMenu";

const ReportFooter2022 = ({reportSections, contentBlocks, activeSection, setActiveSection, activeStory, setActiveStory}) => {
    const menuItemClick = (e) => {
        let clickedItem = reportSections.find((section) => section.anchor === e.target.dataset.refid);

        if (clickedItem.type === "ReportIllustrationOverlaySubsection") {
            setActiveStory(null);

            setActiveSection(clickedItem.anchor);
        } else if (clickedItem.type === "story") {
            setActiveSection(clickedItem.parentAnchor);

            setActiveStory(clickedItem.anchor);

            setTimeout(() => {
            window.scrollTo({
                top: document.getElementById(clickedItem.anchor)?.offsetTop,
                behavior: "smooth",
            });
            }, 50)
        }
    }

    return (
        <footer className={`${activeStory && `hidden`} bg-gray-100`}>
            <ReportMenu activeSection={reportSections} contentBlocks={contentBlocks} onClick={(e) => menuItemClick(e)} />
        </footer>
    )
}

export default ReportFooter2022