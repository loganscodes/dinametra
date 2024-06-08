import { MouseEventHandler } from "react"
import { Tooltip } from "react-tooltip"

interface Props{
    onClick?: MouseEventHandler<HTMLButtonElement>
    text?: string
    tooltipID?: string
    tooltipContent?: string
    type?: "submit" | "reset" | "button"
    className?: string
    
}

const UIButton = ({ onClick, text, tooltipID, tooltipContent, type, className }:Props) => {
  return (
    <>
      <button type={type} onClick={onClick} data-tooltip-id={tooltipID} data-tooltip-content={tooltipContent} data-tooltip-place="top"  className={className}>{text}</button>
      <Tooltip id={tooltipID} />
    </>
  )
}

export default UIButton