import React from 'react'
import { Tooltip } from 'react-tooltip'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, ResponsiveContainer } from 'recharts'

interface Props {
    data: any
}

const LineGraphic = ({ data }: Props) => {
    return (

        <div className='border-4 border-purple-800 rounded-2xl bg-white'>
            <ResponsiveContainer width='100%' height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="asteroides" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineGraphic