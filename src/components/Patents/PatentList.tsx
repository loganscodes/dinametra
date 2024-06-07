import React from "react";
import { Tooltip } from "react-tooltip";
import { PatentData } from "../../interfaces/interfacePatent";

interface Props {
    patents: PatentData[]
}

const PatentList = ({ patents }: Props) => {
    return (
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5'>
            {patents.map(patent => (
                <li key={patent.id} data-tooltip-id="patent-description" data-tooltip-content='Description Patent NASA' data-tooltip-place="top" className='border-4 border-gray-700 rounded-2xl p-5 bg-white'>
                    <h3 className='text-3xl font-bold' dangerouslySetInnerHTML={{ __html: patent.title }} />
                    <p className='font-bold'>{new Date(patent.date).toLocaleDateString()}</p>
                    <p className='text-2xl font-bold'>Patent: {patent.patent}</p>
                    <p className='h-64 py-5 overflow-auto' dangerouslySetInnerHTML={{ __html: patent.abstract }} />
                    <img data-tooltip-id="patent-img" data-tooltip-content='Image patent' data-tooltip-place="top" src={patent.contact} alt="" loading="lazy" />
                    <Tooltip id="patent-description" />
                </li>
            ))}
            <Tooltip id="patent" />
        </ul>
    )
}

export default React.memo(PatentList);