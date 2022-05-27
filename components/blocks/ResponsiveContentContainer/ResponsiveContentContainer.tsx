import classNames from "classnames";

type Alignment = "left" | "center";

interface Props {
    padding?:string
    alignment?:Alignment
}
const ResponsiveContentContainer : React.FC<Props> = ({children, padding="", alignment="left"}) => {
    const alignmentStyle = classNames({
        "mx-auto":alignment=="center",
        "mr-auto":alignment=="left"
    });
    
    return (<div className={`responsive-container ${padding}`}>
        <div className = {`xl:max-w-4xl ${alignmentStyle}`}>
            {children}
        </div>
    </div>
    )
}

export default ResponsiveContentContainer;