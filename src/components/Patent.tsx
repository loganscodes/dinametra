import React from 'react';
import SpinerLoading from './SpinerLoading';
import { usePattent } from '../hooks/usePatten';

const PatentComponent: React.FC = () => {
    const { loading, filter, handleFilterChange, filteredPatents } = usePattent();

    if (loading) {
        return <SpinerLoading />;
    }

    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-10'>Patent Data</h2>

            <div className='flex justify-center mb-5'>
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter patents"
                    className='border-2 border-gray-300 p-2 rounded'
                />
            </div>

            {filteredPatents.length === 0 ? (
                <p className="text-center text-2xl font-bold my-10">Not found pattents</p>
            ) : (
                <ul className='grid grid-cols-2 gap-5 mx-5'>
                    {filteredPatents.map(patent => (
                        <li key={patent.id} className='border-2 border-red-500 rounded-2xl p-5'>
                            <h3 className='text-3xl font-bold' dangerouslySetInnerHTML={{ __html: patent.title }} />
                            <p className='font-bold'>{new Date(patent.date).toLocaleDateString()}</p>
                            <p className='text-2xl font-bold'>Patent: {patent.patent}</p>
                            <p className='h-64 py-5 overflow-auto' dangerouslySetInnerHTML={{ __html: patent.abstract }} />
                            <img src={patent.contact} alt="" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PatentComponent;
