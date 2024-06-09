import React from 'react';
import { Link } from 'react-router-dom';
import { useMeteors } from '../hooks/useMeteors';
import UITitle from './UI/UITitle';

const MeteorsMap = () => {
    const { mapContainer } = useMeteors();

    return (
        <>
            <div
                ref={mapContainer}
                style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
            />

            <div className="absolute top-5 left-0 w-full flex justify-between items-center px-5">
                <Link tabIndex={0} to="/" className='relative cursor-pointer'>
                    <img src="./back-arrow.svg" alt="regresar" className='bg-white w-10 h-10' />
                </Link>

                <UITitle tag='h1' tooltipID='title' tooltipContent='Wait for all resouse charged' className='text-white text-4xl font-bold' title='Track Meteors around the world' />
                
                <div style={{ width: "40px" }}></div> 
            </div>
        </>
    );
};

export default MeteorsMap;
