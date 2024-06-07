
import React, { useEffect, Suspense } from 'react';
import { Tooltip } from 'react-tooltip';
import { useMedia } from '../../hooks/useMedia';
import SearchForm from './SearchForm';
import SpinerLoading from '../UI/UISpinerLoading';
import UITitle from '../UI/UITitle';
import NoticeCard from './NoticeCard';
import UIErrorText from '../UI/UIErrorText';

const MediaDetails = React.lazy(() => import('./MediaDetails'));

const Media = () => {
    const { handleSearch, inputValue, setInputValue, selectedYear, handleYearChange, notices, loading, error, filterByYear, handleNoticeClick, selectedNotice, handleClose } = useMedia();

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
            <UITitle title="Media from Nasa" />

            <div className='flex flex-wrap items-center justify-around mb-10 lg:mb-10'>
                <SearchForm handleSearch={handleSearch} inputValue={inputValue} setInputValue={setInputValue} />
                <div className='flex justify-center items-center gap-5 '>
                    <p className='font-semibold text-md text-white'>Select Year to Filter</p>
                    <select value={selectedYear} onChange={handleYearChange} className='p-2 rounded-lg'>
                        <option value="">All years</option>
                        {Array.from(new Set(notices.map((notice) => new Date(notice.data[0].date_created).getFullYear()))).map((year) => (
                            <option key={year} value={year.toString()}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>

            {loading && <SpinerLoading />}
            {error && <UIErrorText/>}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-5'>
                {notices.filter(filterByYear).map((notice) => (
                    <NoticeCard key={notice.data[0].nasa_id} notice={notice} handleNoticeClick={handleNoticeClick} />
                ))}
                <Tooltip id="card" />
            </div>

            {selectedNotice && (
                <Suspense fallback={<SpinerLoading />}>
                    <MediaDetails selectedNotice={selectedNotice} handleClose={handleClose} />
                </Suspense>
            )}
        </>
    );
};

export default Media;
