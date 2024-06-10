import { Tooltip } from "react-tooltip";
import { UIInputProps } from "../../interfaces/interfacesUI";

const UIInput = ({ value, onChange, tooltipID, tooltipContent, placeholder }: UIInputProps) => {
    return (
        <>
            <input
                data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} data-tooltip-place="top"
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='p-2 border-4 rounded-xl border-gray-700'
                aria-label={value}
            />
            <Tooltip id={tooltipID} />
        </>
    )
}

export default UIInput