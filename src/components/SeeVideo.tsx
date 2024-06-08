import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

interface Props {
    selectedNotice: string
}

const SeeVideo = ({ selectedNotice }: Props) => {
    return (
        <>
            <div className='flex justify-center py-5 '>
                <Link data-tooltip-id="video" data-tooltip-content='Click To See Video ' data-tooltip-place="top" className=' font-bold  text-gray-700 text-4xl' to={{
                    pathname: '/vidios',
                    search: `?collectionUrl=${encodeURIComponent(selectedNotice)}`
                }}>
                    See Video
                </Link>
                <Tooltip id="video" />
            </div>

        </>

    )
}

export default SeeVideo