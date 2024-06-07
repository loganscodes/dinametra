import React from 'react';
import SpinerLoading from './SpinerLoading';
import { usePattent } from '../hooks/usePatten';
import { Tooltip } from 'react-tooltip';
import UITitle from './UI/UITitle';

const PatentComponent: React.FC = () => {
    const { loading, filter, handleFilterChange, filteredPatents } = usePattent();

    if (loading) {
        return <SpinerLoading />;
    }

    return (
        <div>
            
            <UITitle title="Patent Data"/>


            <div className='flex justify-start ml-10 mb-5'>
                <input
                    data-tooltip-id="search" 
                    data-tooltip-content='Type number of word Patent' 
                    data-tooltip-place="top"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter patents"
                    className='border-2 border-gray-300 p-2 rounded'
                />
                <Tooltip id="search"/>

            </div>

            {filteredPatents.length === 0 ? (
                <p className="text-center text-2xl font-bold my-10 text-white">Not found pattents</p>
            ) : (
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5'>
                    {filteredPatents.map(patent => (
                        <li  key={patent.id} data-tooltip-id="patent-description" data-tooltip-content='Description Patent NASA' data-tooltip-place="top" className='border-4 border-purple-800 rounded-2xl p-5 bg-white'>
                            <h3 className='text-3xl font-bold'  dangerouslySetInnerHTML={{ __html: patent.title }} />
                            <p className='font-bold' >{new Date(patent.date).toLocaleDateString()}</p>
                            <p className='text-2xl font-bold'>Patent: {patent.patent}</p>
                            <p className='h-64 py-5 overflow-auto'  dangerouslySetInnerHTML={{ __html: patent.abstract }} />
                            <img data-tooltip-id="patent-img" data-tooltip-content='Image patent' data-tooltip-place="top" src={patent.contact} alt="" />
                            
                            <Tooltip id="patent-description"/>

                        </li>
                    ))}
                    <Tooltip id="patent"/>

                </ul>
            )}
        </div>
    );
};

export default PatentComponent;
