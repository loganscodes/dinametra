import React from 'react'
import { Tooltip } from 'react-tooltip'

const UITitle = () => {
    return (
        <>
            <h1 data-tooltip-id="title" data-tooltip-content="Astronomy Picture of the Day" data-tooltip-place="top" className="text-2xl lg:text-4xl font-bold text-center  my-10 text-white" data-tip={'astro'}>Astronomy Picture of the Day</h1>
            <Tooltip id="title" />

        </>

    )
}

export default UITitle