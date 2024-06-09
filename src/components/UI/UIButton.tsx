import { Tooltip } from "react-tooltip"
import { UIButtonProps } from "../../interfaces/interfacesUI"



const UIButton = ({ onClick, text, tooltipID, tooltipContent, type, className }:UIButtonProps) => {
  return (
    <>
      <button type={type} onClick={onClick} data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} data-tooltip-place="top"  className={className}>{text}</button>
      <Tooltip id={tooltipID} />
    </>
  )
}

export default UIButton