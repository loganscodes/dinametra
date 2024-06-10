import React from 'react';
import UITitle from '../UI/UITitle';
import UIImg from '../UI/UIImg';
import UIParagraph from '../UI/UIParagraph';
import { ApodProps } from '../../interfaces/interfaceApod';

const ApodDetails = ({ apod }: ApodProps) => {
    return (
        <div className="flex flex-col justify-center items-center lg:w-[60%] gap-5 shadow-2xl rounded-lg mb-28 py-10 bg-white">

            <UITitle tag='h1' tooltipID='sub-title' tooltipContent={apod?.title} className='font-bold text-2xl lg:text-4xl' title={apod?.title} />

            <UIImg tooltipID='img-day' tooltipContent='Image of the day' src={apod.url} />

            <UITitle tag='h4' tooltipID='info' tooltipContent='Information' className='text-2xl font-semibold' title='Information' />

            <UIParagraph tooltipID='author' tooltipContent={`Author: ${apod?.copyright} Date: ${apod?.date}`} content={`Author: ${apod?.copyright} Date: ${apod?.date}`} className='text-black' />

            <UITitle tag='h5' tooltipID='exp' tooltipContent='Explanation' className='text-3xl font-semibold' title='Explanation' />

            <UIParagraph tooltipID='desc' tooltipContent='Description of the img of the day' className='text-justify text-lg mx-5' content={apod?.explanation} />

        </div>
    );
};

export default React.memo(ApodDetails);
