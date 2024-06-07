import { Tooltip } from 'react-tooltip'

interface Props{
    title: string
    tooltipContent: string
}

const UITitle = ({title, tooltipContent}:Props) => {
    return (
        <>
            <h1 data-tooltip-id="title" data-tooltip-content={tooltipContent} data-tooltip-place="top" className="text-2xl lg:text-4xl font-bold text-center  my-10 text-white" data-tip={'astro'}>{title}</h1>
            <Tooltip id="title" />
        </>

    )
}

export default UITitle