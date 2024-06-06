import { useState } from "react";
import { Item } from "../interfaces/interfaces";
import { useNasaNotices } from "./useNasaNotices";

export const useMedia = () => {
    const { notices, loading, error, setQuery } = useNasaNotices('moon');
    const [inputValue, setInputValue] = useState('moon');
    const [selectedNotice, setSelectedNotice] = useState<any>(null); 
    const [selectedYear, setSelectedYear] = useState<string>(''); 

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(inputValue);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    const handleNoticeClick = (notice: any) => {
        setSelectedNotice(notice); 
    };

    const handleClose = () => {
        setSelectedNotice(null); 
    };

    const filterByYear = (notice: Item) => {
        if (!selectedYear) {
            
            return true;
        }
    
        const year = new Date(notice.data[0].date_created).getFullYear().toString();
    
        return year === selectedYear;
    };

    return{
        handleSearch,
        handleYearChange,
        handleNoticeClick,
        handleClose,
        filterByYear,
        notices,
        loading, 
        error,
        setInputValue,
        selectedNotice,
        inputValue,
        selectedYear
    }
}