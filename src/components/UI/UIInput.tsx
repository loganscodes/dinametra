import { ChangeEvent } from "react";
import { Tooltip } from "react-tooltip";

interface Props {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    tooltipID: string,
    tooltipContent: string
    placeholder: string
}

const UIInput = ({ value, onChange, tooltipID, tooltipContent, placeholder }: Props) => {
    return (
        <>
            <input
                data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} data-tooltip-place="top"
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='p-2 border-4 rounded-xl border-gray-700'
            />
            <Tooltip id={tooltipID} />
        </>
    )
}

export default UIInput