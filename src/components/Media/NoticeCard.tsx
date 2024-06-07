import React from 'react';
import { Tooltip } from 'react-tooltip';
import {  Item } from '../../interfaces/interfaces';

interface Props {
    notice: Item;
    handleNoticeClick: (notice: any) => void; 
}

const NoticeCard = ({ notice, handleNoticeClick }: Props) => {
    return (
        <div data-tooltip-id="card" data-tooltip-content='Click To See Info' data-tooltip-place="top" className={`border-4 border-gray-700 px-5 rounded-2xl bg-white  ${notice.links && notice.links.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={notice.links && notice.links.length > 0 ? () => handleNoticeClick(notice) : undefined}>
            <h2 className='font-bold text-center my-5 h-12'>{notice.data[0].title}</h2>
            <div className={`flex justify-center`} >
                {notice.links && notice.links.length > 0 ? (
                    <img src={notice.links[0].href} alt="" className='w-80 h-80 object-cover' loading='lazy' />
                ) : (
                    <img src='./NASA_logo.png' alt="" className='w-72 object-cover opacity-40' loading='lazy' />
                )}
            </div>
            <p className='text-center font-bold mt-5'>{new Date(notice.data[0].date_created).toLocaleDateString()}</p>
            <Tooltip id="card" />
        </div>
    );
};

export default React.memo(NoticeCard);
