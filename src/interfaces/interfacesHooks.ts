import { Item } from "./interfaces";

export interface PagProps{
    notices: Item[];
    filterByYear: (notice: Item) => boolean 
}

export interface VideoNasaProps {
    selectedNoticeHref: string;
}