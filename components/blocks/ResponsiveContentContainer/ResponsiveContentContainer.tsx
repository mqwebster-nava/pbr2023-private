import classNames from "classnames";

type Alignment = "left" | "center" | "right";

interface Props {
    padding?:string
    alignment?:Alignment
    bgColor?:string;
}
const ResponsiveContentContainer : React.FC<Props> = ({children, padding="", alignment="left", bgColor=""}) => {
    const alignmentStyle = classNames({
        "mx-auto":alignment=="center",
        "mr-auto":alignment=="left",
        "ml-auto":alignment=="right",
        
    });
    
    return (<div className={`responsive-container ${padding} ${bgColor} flex`}>
        <div className = {`w-full lg:w-3/4 xl:w-2/3 xl:max-w-4xl ${alignmentStyle}`}>
            {children}
        </div>
    </div>
    )
}

export default ResponsiveContentContainer;