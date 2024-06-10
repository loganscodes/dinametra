import { Item } from "./interfaces"

export interface ImgCardProps {
    notice: Item
    tooltipID: string
    tooltipContent: string
}

export interface MediaDetailsProps {
    selectedNotice: Item;
    handleClose: () => void;
}

export interface NoticeCardsProps {
    notice: Item;
    handleNoticeClick: (notice: any) => void;
}

export interface SearchFormProps {
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}