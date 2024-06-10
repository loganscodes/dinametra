import { Tooltip } from 'react-tooltip'
import { UITitlePatentProps } from '../../interfaces/interfacesUI'



const UITitlePatent = ({tooltipContent, content, tooltipID}:UITitlePatentProps) => {
    return (
        <>
            <h3 tabIndex={0}
                data-tooltip-id={tooltipID}
                data-tooltip-content={tooltipContent}
                data-tooltip-place="top"
                className='text-3xl font-bold'
                dangerouslySetInnerHTML={{ __html: content }}
                aria-label={content} />
            
            <Tooltip id={tooltipID} />
        </>

    )
}

export default UITitlePatent