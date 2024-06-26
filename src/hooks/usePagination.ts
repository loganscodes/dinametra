import { useState } from "react";
import { PagProps } from "../interfaces/interfacesHooks";



export const usePagination = ({notices, filterByYear}:PagProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;


    const filteredNotices = notices.filter(filterByYear);
    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
    const currentItems = filteredNotices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };


    return{
        currentPage,
        currentItems,
        totalPages,
        handleNextPage,
        handlePreviousPage
    }
}