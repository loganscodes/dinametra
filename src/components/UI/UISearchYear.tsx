import {  ChangeEventHandler } from "react";
import { Item } from "../../interfaces/interfaces"
import { Tooltip } from "react-tooltip";

interface Props{
    selectedYear: string
    notices: Item[]
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

const UISearchYear = ({selectedYear, notices, onChange}:Props) => {
    return (
        <>
            <p className='font-semibold text-md text-white'>Select Year to Filter</p>
            <select  data-tooltip-id="searchyear" data-tooltip-content='Search by year' data-tooltip-place="top" value={selectedYear} onChange={onChange} className='p-2 rounded-lg border-4 border-gray-700'>
                <option value="">All years</option>
                {Array.from(new Set(notices.map((notice) => new Date(notice.data[0].date_created).getFullYear()))).map((year) => (
                    <option key={year} value={year.toString()}>{year}</option>
                ))}
            </select>
            <Tooltip id="searchyear" />


        </>

    )
}

export default UISearchYear