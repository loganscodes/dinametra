import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react"
import { Item } from "./interfaces"

export interface UIButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement>
    text?: string
    tooltipID?: string
    tooltipContent?: string
    type?: "submit" | "reset" | "button"
    className?: string
}

export interface UIImgProps{
    tooltipID: string,
    tooltipContent: string,
    src: string
}

export interface UIInputProps {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    tooltipID: string,
    tooltipContent: string
    placeholder: string
}

export interface UIInputDateProps{
    title: string
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface UIPaginationProps {
    onClickPrevPage: MouseEventHandler<HTMLButtonElement>;
    onClickNextPage: MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
    totalPages: number;
    
}

export interface UIParProps {
    content: string | number
    tooltipID?: string
    tooltipContent?: string
    className: string
    useDangerousHTML?: boolean  
}

export interface UISearchProps{
    selectedYear: string
    notices: Item[]
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

export interface UITitleProps {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" ;
    title: string;
    tooltipID: string
    tooltipContent: string;
    className: string
}

export interface UITitlePatentProps{
    tooltipContent: string
    content: string
    tooltipID: string 
}

export interface UIVideoProps {
    source: string
}
