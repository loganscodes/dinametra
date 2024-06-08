import { Tooltip } from "react-tooltip"
import { Item } from "../../interfaces/interfaces"

interface Props {
    notice: Item
    tooltipID: string
    tooltipContent: string
}

const ImgCard = ({ notice, tooltipID, tooltipContent }: Props) => {
    return (
        <>
            <div tabIndex={0} data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} className={`flex justify-center`} >
                {notice.links && notice.links.length > 0 ? (
                    <img src={notice.links[0].href} alt="" className='w-80 h-80 object-cover' loading='lazy' />
                ) : (
                    <img src='./NASA_logo.png' alt="" className='w-72 object-cover opacity-40' loading='lazy' />
                )}
            </div>
            <Tooltip id={tooltipID} />
        </>

    )
}

export default ImgCard