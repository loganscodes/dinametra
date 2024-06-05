import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { useNasaNotices } from '../hooks/useNasaNotices';

const Media = () => {
    const { notices, loading, error, setQuery } = useNasaNotices('moon');
    const [inputValue, setInputValue] = useState('moon');
    const [selectedNotice, setSelectedNotice] = useState<any>(null); // Estado para mantener la noticia seleccionada

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(inputValue);
    };

    const handleNoticeClick = (notice: any) => {
        setSelectedNotice(notice); // Establecer la noticia seleccionada al hacer clic en ella
    };

    const handleClose = () => {
        setSelectedNotice(null); // Cerrar la vista de la noticia seleccionada
    };

    return (
        <Layout>
            <h1 className='text-center text-4xl font-bold uppercase mt-10'>Media</h1>

            <form onSubmit={handleSearch} className='flex gap-5 ml-10 my-10'>
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search for Notices' />
                <button type='submit' className='bg-blue-500 text-white p-2 px-5 rounded-lg'>Search</button>
            </form>

            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 mx-5'>
                {notices.map((notice) => (
                    <div key={notice.data[0].nasa_id} className='border-2 border-red-500 px-5 rounded-2xl'>
                        <h2 className='font-bold text-center my-5  h-12'>{notice.data[0].title}</h2>
                        <div className='flex justify-center' onClick={() => handleNoticeClick(notice)}> {/* Agrega un manejador de clic para mostrar la noticia completa */}
                            {notice.links && notice.links.length > 0 ? (
                                <img src={notice.links[0].href} alt="" className='cursor-pointer w-80 h-80 object-cover ' />
                            ) : (
                                <img src='./NASA_logo.png' alt="" className='cursor-pointer w-80 h-80 object-cover ' />
                                
                            )}
                        </div>
                        <p className='text-center font-bold mt-5'>{new Date(notice.data[0].date_created).toLocaleDateString()}</p>
                    </div>

                ))}
            </div>

            {/* Mostrar la noticia completa si selectedNotice no es null */}
            {selectedNotice && (
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center">

                    <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">

                        <h2 className="text-xl font-bold mb-4">{selectedNotice.data[0].title}</h2>

                        <p className="mb-4">{selectedNotice.data[0].description}</p>
                        <p className='font-bold'>Keywords</p>
                        <div className='flex'>
                            <p>{selectedNotice.data[0].keywords}</p>
                        </div>

                        <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>


                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Media;
