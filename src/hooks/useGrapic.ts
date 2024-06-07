import { useState, useEffect } from "react";
import { getAsteroidsAPIUrl } from "../api";

export const useGrapic = () => {


    const [asteroidData, setAsteroidData] = useState<any[]>([]);
    const [startDate, setStartDate] = useState<string>('2024-06-01'); 
    const [endDate, setEndDate] = useState<string>('2024-06-07'); 
    const [error, setError] = useState<string | null>(null);

    const apiUrl = getAsteroidsAPIUrl({ startDate, endDate });

    useEffect(() => {
        const fetchData = async () => {
            const dateDifference = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
            const oneDay = 1000 * 60 * 60 * 24;
            const daysDifference = Math.ceil(dateDifference / oneDay);

            if (startDate > endDate || daysDifference > 7) {
                setError('The date range must be a maximum of 7 days and the start date must be before or equal to the end date.');
                return;
            }

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                let asteroidData: { date: string; asteroides: number }[] = [];

                for (let date in data.near_earth_objects) {
                    const nearEarthObjects = data.near_earth_objects[date];
                    const asteroidCount = nearEarthObjects ? nearEarthObjects.length : 0;
                    asteroidData.push({ date, asteroides: asteroidCount });
                }

                setAsteroidData(asteroidData);
                setError(null); 
            } catch (error) {
                console.error('Error fetching data from NASA API:', error);
                setError('There was an error loading data. Please try again later.');
            }
        };

        fetchData();
    });

    return{
        startDate,
        setStartDate,
        endDate,
        error,
        asteroidData,
        setEndDate
    }



}