import { Tooltip } from "react-tooltip"

interface Props {
    content: string | number
    tooltipID?: string
    tooltipContent?: string
    className: string
    useDangerousHTML?: boolean  
}

const UIParagraph = ({ content, tooltipID, tooltipContent, className, useDangerousHTML = false }: Props) => {
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
