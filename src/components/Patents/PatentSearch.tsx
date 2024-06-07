import React from "react";
import { Tooltip } from "react-tooltip";

interface Props {
    filter: string;
    handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PatentSearch = ({ filter, handleFilterChange }: Props) => {
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