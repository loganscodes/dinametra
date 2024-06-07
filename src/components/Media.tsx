import React, { useEffect } from 'react'
import { useMedia } from '../hooks/useMedia'
import SpinerLoading from './SpinerLoading'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import UITitle from './UI/UITitle'

const Media = () => {

    const { handleSearch, inputValue, setInputValue, selectedYear, handleYearChange, notices, loading, error, filterByYear, handleNoticeClick, selectedNotice, handleClose } = useMedia()

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

            <UITitle title="Media from Nasa"/>


            <div className='flex flex-wrap items-center justify-around mb-10 lg:mb-10'>

                <SearchForm handleSearch={handleSearch} inputValue={inputValue} setInputValue={setInputValue} />


                <div className='flex justify-center  items-center gap-5 '>
                    <p className='font-semibold text-md text-white'>Select Year to Filter</p>
                    <select value={selectedYear} onChange={handleYearChange} className='p-2 rounded-lg'>
                        <option value="">All years</option>
                        {Array.from(new Set(notices.map((notice) => new Date(notice.data[0].date_created).getFullYear()))).map((year) => (
                            <option key={year} value={year.toString()}>{year}</option>
                        ))}
                    </select>
                </div>

            </div>

            {
                loading &&
                <SpinerLoading />
            }

            {error && <div>Error...</div>}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-5'>
                {notices.filter(filterByYear).map((notice) => (
                    <div key={notice.data[0].nasa_id} data-tooltip-id="card" data-tooltip-content='Clck To See Info' data-tooltip-place="top" className={`border-4 border-purple-800 px-5 rounded-2xl bg-white  ${notice.links && notice.links.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={notice.links && notice.links.length > 0 ? () => handleNoticeClick(notice) : undefined}>
                        <h2 className='font-bold text-center my-5 h-12'>{notice.data[0].title}</h2>
                        <div className={`flex justify-center`} >
                            {notice.links && notice.links.length > 0 ? (
                                <img src={notice.links[0].href} alt="" className='w-80 h-80 object-cover' />
                            ) : (
                                <img src='./NASA_logo.png' alt="" className='w-80 h-80 object-cover opacity-40' />
                            )}
                        </div>
                        <p className='text-center font-bold mt-5'>{new Date(notice.data[0].date_created).toLocaleDateString()}</p>
                    </div>
                    
                ))}
                    <Tooltip id="card"/>
            </div>



            {selectedNotice && (
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center  overflow-y-auto">
                    <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">{selectedNotice.data[0].title}</h2>
                        
                        <p className="mb-4 text-justify">{selectedNotice.data[0].description}</p>

                        <div className='flex justify-center py-5 '>
                            <Link data-tooltip-id="video" data-tooltip-content='Clck To See Video ' data-tooltip-place="top" className=' font-bold  text-blue-500 text-4xl' to={{
                                pathname: '/vidios',
                                search: `?collectionUrl=${encodeURIComponent(selectedNotice.href)}`
                            }}>
                                See Video
                            </Link>
                            <Tooltip id="video"/>
                        </div>



                        <p className='font-bold'>Keywords</p>
                        <div className='flex'>
                            <p className='text-blue-500' dangerouslySetInnerHTML={{ __html: selectedNotice.data[0].keywords }} />
                        </div>

                        <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>
                    </div>
                </div>
            )}


        </>
    )
}

export default Media