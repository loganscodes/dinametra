import React from 'react';
import { Tooltip } from 'react-tooltip';

interface Props{
    apod: {
        title: string;
        url: string;
        copyright: string;
        date: string;
        explanation: string;
    };
}

const ApodDetails = ({ apod }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center lg:w-[60%] gap-5 shadow-2xl rounded-lg mb-28 py-10 bg-white">
            <h1 data-tooltip-id="sub-title" data-tooltip-content={apod?.title} data-tooltip-place="top" className="font-bold text-2xl lg:text-4xl">
                {apod?.title}
            </h1>
            <Tooltip id="sub-title" />

            <img
                data-tooltip-id="img-day"
                data-tooltip-content="Image of the day"
                data-tooltip-place="top"
                src={apod?.url}
                className='w-96 h-96 object-cover'
                alt=""
                loading="lazy"
            />
            <Tooltip id="img-day" />

            <h4 className="text-2xl font-semibold">Information</h4>
            <p>
                <span className="font-semibold">Author:</span> {apod?.copyright} <span className="font-semibold">Date:</span> {apod?.date}
            </p>

            <h5 className="text-3xl font-semibold">Explanation</h5>
            <p data-tooltip-id="desc" data-tooltip-content="Description of the img of the day" data-tooltip-place="top" className="text-justify text-lg mx-5">
                {apod?.explanation}
            </p>
            <Tooltip id="desc" />
        </div>
    );
};

export default React.memo(ApodDetails);
