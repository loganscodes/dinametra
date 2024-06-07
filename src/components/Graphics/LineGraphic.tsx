import React from 'react'
import { Tooltip } from 'react-tooltip'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts'

interface Props {
    data: any
}

const LineGraphic = ({ data }: Props) => {
    return (
        <div style={{ height: '400px', width: '600px', margin: '0 auto' }}>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="asteroides" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default LineGraphic