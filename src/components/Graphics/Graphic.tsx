import React from 'react'
import RangePicker from './RangePicker'
import LineGraphic from './LineGraphic'
import { useGrapic } from '../../hooks/useGrapic'
import BarGraphic from './BarGraphic'

const Graphic = () => {

    const { startDate, setStartDate, endDate, error, asteroidData, setEndDate } = useGrapic()


    return (
        <>

            <h2>Asteroides cercanos a la Tierra</h2>

            <RangePicker startDateI={startDate} onChange={(e) => setStartDate(e.target.value)} endDateI={endDate} onChangeEnd={(e) => setEndDate(e.target.value)} />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <BarGraphic/>

            <LineGraphic data={asteroidData} />



        </>
    )
}

export default Graphic