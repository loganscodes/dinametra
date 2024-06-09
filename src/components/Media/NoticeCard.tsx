import React from 'react';
import { Tooltip } from 'react-tooltip';
import UITitle from '../UI/UITitle';
import UIParagraph from '../UI/UIParagraph';
import ImgCard from './ImgCard';
import { NoticeCardsProps } from '../../interfaces/interfacesMedia';



const NoticeCard = ({ notice, handleNoticeClick }: NoticeCardsProps) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleNoticeClick(notice);
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            data-tooltip-id="card"
            data-tooltip-content='Click To See Info'
            data-tooltip-place="top"
            className={`border-4 border-gray-700 px-5 rounded-2xl bg-white  ${notice.links && notice.links.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={notice.links && notice.links.length > 0 ? () => handleNoticeClick(notice) : undefined}
            onKeyDown={handleKeyDown}
        >
            <UITitle tag='h2' tooltipID='title-card' tooltipContent={notice.data[0].title} className='font-bold text-center my-5 h-12' title={notice.data[0].title} />

            <ImgCard notice={notice} tooltipID='img-card' tooltipContent='Image Card' />

            <UIParagraph tooltipID='date' tooltipContent={new Date(notice.data[0].date_created).toLocaleDateString()} className='text-center font-bold mt-5' content={new Date(notice.data[0].date_created).toLocaleDateString()} />
            <Tooltip id="card" />
        </div>
    );
};

export default React.memo(NoticeCard);
