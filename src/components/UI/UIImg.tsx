import { Tooltip } from 'react-tooltip'
import { UIImgProps } from '../../interfaces/interfacesUI'


const UIImg = ({tooltipID, tooltipContent, src}:UIImgProps) => {
    return (
        <>
            <img tabIndex={0} aria-labelledby="img-day" data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} data-tooltip-place="top" src={src} className='w-96 h-96 object-cover' alt="" loading="lazy" aria-label={tooltipID} />
            <Tooltip id={tooltipID} />

        </>
    )
}

export default UIImg