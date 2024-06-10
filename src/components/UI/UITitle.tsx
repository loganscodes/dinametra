import { Tooltip } from 'react-tooltip';
import { UITitleProps } from '../../interfaces/interfacesUI';



const UITitle = ({ tag, title, tooltipID, tooltipContent, className }: UITitleProps) => {
    const Tag = tag; 

    return (
        <>
            <Tag tabIndex={0}
                data-tooltip-id={tooltipID}
                data-tooltip-content={tooltipContent}
                data-tooltip-place="top"
                className={className}
                aria-label={title}
            >
                {title}
            </Tag>
            <Tooltip id={tooltipID} />
        </>
    );
}

export default UITitle;
