import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import {  Item } from '../../interfaces/interfaces';

interface Props {
    selectedNotice: Item;
    handleClose: () => void; 
}

const MediaDetails = ({ selectedNotice, handleClose }: Props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center  overflow-y-auto">
            <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">
                {selectedNotice.data.map((datum, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-bold mb-4 text-center">{datum.title}</h2>
                        <p className="mb-4 text-justify">{datum.description}</p>
                        <div className='flex justify-center py-5 '>
                            <Link data-tooltip-id="video" data-tooltip-content='Click To See Video ' data-tooltip-place="top" className=' font-bold  text-blue-500 text-4xl' to={{
                                pathname: '/vidios',
                                search: `?collectionUrl=${encodeURIComponent(selectedNotice.href)}`
                            }}>
                                See Video
                            </Link>
                            <Tooltip id="video" />
                        </div>
                        <p className='font-bold'>Keywords</p>
                        <div className='flex'>
                            <p className='text-blue-500' dangerouslySetInnerHTML={{ __html: datum.keywords.join(', ') }} />
                        </div>
                    </div>
                ))}
                <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>
            </div>
        </div>
    );
};

export default MediaDetails;
