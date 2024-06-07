import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SpinerLoading from './UI/UISpinerLoading';

const Vidios = () => {

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const collectionUrl = params.get('collectionUrl');

    const [collectionData, setCollectionData] = useState(null);

    useEffect(() => {
        if (collectionUrl) {
            fetch(collectionUrl)
                .then(response => response.json())
                .then(data => {
                    setCollectionData(data);
                })
                .catch(error => {
                    console.error('Error al obtener los datos:', error);
                });
        }
    }, [collectionUrl]);
    return (
        <>
            {collectionData ? (
                <div className=' w-[83%] m-auto'>

                    <video controls>
                        <source src={collectionData[0]} type="video/mp4" />
                        No supported video tag, please update your browser
                    </video>

                </div>
            ) : (
                <SpinerLoading />
            )}

        </>

    )
}

export default Vidios