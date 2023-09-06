import Arrow from "./Arrow"

export interface NavigationArrowsInterface {
    color?: string ;
    handleNextSection;
    handlePrevSection;
}

const NavigationArrows = ({color, handleNextSection, handlePrevSection} : NavigationArrowsInterface) => {
    return (
        <div className={`flex flex-col gap-4`}>
            <button className={`flex flex-col w-5`} onClick={handleNextSection}>
                <div className={`-rotate-90`}>
                    <Arrow color={color} />
                </div>

                <div>
                    Next
                </div>
            </button>

            <button className={`flex flex-col w-5`} onClick={handlePrevSection}>
                <div className={`rotate-90`}>
                    <Arrow color={color} />
                </div>

                <div>
                    Previous
                </div>
            </button>
        </div>
    )
}

export default NavigationArrows