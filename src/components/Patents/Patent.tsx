import React, { Suspense } from 'react';
import SpinerLoading from '../UI/UISpinerLoading';
import { usePattent } from '../../hooks/usePatten';
import UITitle from '../UI/UITitle';

const PatentSearch = React.lazy(() => import('./PatentSearch'));
const PatentList = React.lazy(() => import('./PatentList'));




const Patent = () => {
    const { loading, filter, handleFilterChange, filteredPatents } = usePattent();

    if (loading) {
        return <SpinerLoading />;
    }

    return (
        <>
            <UITitle tag='h1' title="Patent Data" tooltipContent='Patent Data' tooltipID='title' className='text-2xl lg:text-4xl font-bold text-center my-10 text-white'   />
            <PatentSearch filter={filter} handleFilterChange={handleFilterChange} />
            {filteredPatents.length === 0 ? (
                <p className="text-center text-2xl font-bold my-10 text-white">Not found patents</p>
            ) : (
                <Suspense fallback={<SpinerLoading />}>
                    <PatentList patents={filteredPatents} />
                </Suspense>
            )}

            
        </>
    );
};

export default Patent;
