import React, { useEffect, Suspense } from 'react';
import { useMedia } from '../../hooks/useMedia';
import SearchForm from './SearchForm';
import SpinerLoading from '../UI/UISpinerLoading';
import UITitle from '../UI/UITitle';
import NoticeCard from './NoticeCard';
import UIErrorText from '../UI/UIErrorText';
import UISearchYear from '../UI/UISearchYear';
import { usePagination } from '../../hooks/usePagination';
import UIPagination from '../UI/UIPagination';

const MediaDetails = React.lazy(() => import('./MediaDetails'));

const Media = () => {
    
    const { handleSearch, inputValue, setInputValue, selectedYear, handleYearChange, notices, loading, error, filterByYear, handleNoticeClick, selectedNotice, handleClose } = useMedia();

    const { currentPage, totalPages, currentItems, handleNextPage, handlePreviousPage } = usePagination({notices, filterByYear})


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);

    return (
        <>
            <UITitle tag='h1' className='text-2xl lg:text-4xl font-bold text-center my-10 text-white' tooltipID='title' title="Media from Nasa" tooltipContent='Media from Nasa' />

            <div className='flex flex-wrap items-center justify-around mb-10 lg:mb-10'>
                <SearchForm handleSearch={handleSearch} inputValue={inputValue} setInputValue={setInputValue} />
                <div className='flex justify-center items-center gap-5 '>
                    <UISearchYear selectedYear={selectedYear} onChange={handleYearChange} notices={notices} />
                </div>
            </div>

            {loading && <SpinerLoading />}
            {error && <UIErrorText />}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-5'>
                {currentItems.map((notice) => (
                    <NoticeCard key={notice.data[0].nasa_id} notice={notice} handleNoticeClick={handleNoticeClick} />
                ))}
            </div>

            <UIPagination onClickPrevPage={handlePreviousPage} currentPage={currentPage} totalPages={totalPages} onClickNextPage={handleNextPage} />

            {selectedNotice && (
                <Suspense fallback={<SpinerLoading />}>
                    <MediaDetails selectedNotice={selectedNotice} handleClose={handleClose} />
                </Suspense>
            )}
        </>
    );
};

export default Media;
