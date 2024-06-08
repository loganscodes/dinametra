import { Tooltip } from 'react-tooltip';

interface Props {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" ;
    title: string;
    tooltipID: string
    tooltipContent: string;
    className: string
}

const UITitle = ({ tag, title, tooltipID, tooltipContent, className = '' }: Props) => {
    const Tag = tag; 

    return (
        <>
            <Tag tabIndex={0}
                data-tooltip-id={tooltipID}
                data-tooltip-content={tooltipContent}
                data-tooltip-place="top"
                className={className}
            >
                {title}
            </Tag>
            <Tooltip id={tooltipID} />
        </>
    );
}

export default UITitle;
