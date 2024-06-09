import { Tooltip } from "react-tooltip"
import { UIParProps } from "../../interfaces/interfacesUI";



const UIParagraph = ({ content, tooltipID, tooltipContent, className, useDangerousHTML = false }: UIParProps) => {
    const renderContent = useDangerousHTML ? (
        <p tabIndex={0} data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} className={className} dangerouslySetInnerHTML={{ __html: content.toString() }} />
    ) : (
        <p tabIndex={0} data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} className={className}>{content}</p>
    );

    return (
        <>
            {renderContent}
            <Tooltip id={tooltipID} />
        </>
    );
}

export default UIParagraph;
