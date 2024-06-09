import { MouseEventHandler, ReactNode } from "react";

export interface MenuProps{
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface ItemNavProps{
    path: string;
    name: string
}

export interface LayoutProps {
    children: ReactNode
}