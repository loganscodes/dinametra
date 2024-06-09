import React from "react";
import { Tooltip } from "react-tooltip";
import { PatentSearchProps } from "../../interfaces/interfacePatent";



const PatentSearch = ({ filter, handleFilterChange }: PatentSearchProps) => {
    return (
        <div className='flex justify-start ml-10 mb-5'>
            <input
                data-tooltip-id="search"
                data-tooltip-content='Type number of word Patent'
                data-tooltip-place="top"
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Filter patents"
                className='border-4 rounded-xl border-gray-700 p-2 '
            />
            <Tooltip id="search" />
        </div>
    )
}

export default React.memo(PatentSearch);