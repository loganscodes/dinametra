import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMeteors } from '../hooks/useMeteors';
import UITitle from './UI/UITitle';

const MeteorsMap = () => {
    const { mapContainer } = useMeteors();
    const [showLoadingText, setShowLoadingText] = useState(true);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoadingText(false);
            setTimerFinished(true); // Marca que el temporizador ha terminado
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='h-screen relative'>
            <div
                ref={mapContainer}
                style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
            />

            {showLoadingText && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
                    Espera mientras los recursos cargan
                </div>
            )}

            <div className="absolute top-5 left-0 w-full flex justify-between items-center px-5">
                <Link tabIndex={0} to="/" className='relative cursor-pointer'>
                    <img src="./back-arrow.svg" alt="regresar" className='bg-white w-10 h-10' />
                </Link>

                <UITitle tag='h1' tooltipID='title' tooltipContent='Wait for all resouse charged' className='text-white text-4xl font-bold' title='Track Meteors around the world' />
                
                <div style={{ width: "40px" }}></div> {/* Espacio para compensar la posición de la flecha */}
            </div>

            {/* Opcional: Un mensaje para indicar que el temporizador ha terminado */}
            {timerFinished && (
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
                    El temporizador ha terminado
                </div>
            )}
        </div>
    );
};

export default MeteorsMap;
