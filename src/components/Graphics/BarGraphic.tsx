import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraphic = () => {
    const [asteroidData, setAsteroidData] = useState<any[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('2024-06-01'); // Fecha inicial

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${selectedDate}&end_date=${selectedDate}&api_key=YOUR_API_KEY`);
                const data = await response.json();
                const nearEarthObjects = data.near_earth_objects[selectedDate];
                const asteroidCount = nearEarthObjects ? nearEarthObjects.length : 0;
                setAsteroidData([{ date: selectedDate, asteroides: asteroidCount }]); // Cambiamos "count" por "asteroides"
            } catch (error) {
                console.error('Error fetching data from NASA API:', error);
            }
        };

        fetchData();
    }, [selectedDate]);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="datePicker">Seleccione una fecha:</label>
                <input type="date" id="datePicker" value={selectedDate} onChange={handleDateChange} />
            </div>
            <div style={{ height: '400px', width: '600px' }}>
                <BarChart width={600} height={400} data={asteroidData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="asteroides" fill="#8884d8" /> {/* Cambiamos "count" por "asteroides" */}
                </BarChart>
            </div>
        </div>
    );
};

export default BarGraphic;
