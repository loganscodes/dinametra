import React from 'react'
import RangePicker from './RangePicker'
import LineGraphic from './LineGraphic'
import { useGrapic } from '../../hooks/useGrapic'
import BarGraphic from './BarGraphic'
import UITitle from '../UI/UITitle'

const Graphic = () => {

    const { startDate, setStartDate, endDate, error, asteroidData, setEndDate } = useGrapic()


    return (
        <>
            <UITitle title='Near-Earth asteroids' />


            {error && <p className='text-red-500 text-center uppercase font-bold'>{error}</p>}


            <div className='flex flex-col items-center justify-center gap-10 pb-20'>


                <div className='w-[90%] xl:w-[70%]'>
                    <RangePicker startDateI={startDate} onChange={(e) => setStartDate(e.target.value)} endDateI={endDate} onChangeEnd={(e) => setEndDate(e.target.value)} />
                    <LineGraphic data={asteroidData} />
                </div>


                <BarGraphic data={asteroidData} />

            </div>




        </>
    )
}

export default Graphic