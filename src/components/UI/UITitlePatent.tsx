import { Tooltip } from 'react-tooltip'

interface Props{
    tooltipContent: string
    content: string
    tooltipID: string 
}

const UITitlePatent = ({tooltipContent, content, tooltipID}:Props) => {
    return (
        <>
            <h3 tabIndex={0}
                data-tooltip-id={tooltipID}
                data-tooltip-content={tooltipContent}
                data-tooltip-place="top"
                className='text-3xl font-bold'
                dangerouslySetInnerHTML={{ __html: content }} />
            <Tooltip id={tooltipID} />
        </>

    )
}

export default UITitlePatent