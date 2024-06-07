import { useState, useEffect } from "react";
import { getAsteroidsAPIUrl } from "../api";

export const useGrapic = () => {


    const [asteroidData, setAsteroidData] = useState<any[]>([]);
    const [startDate, setStartDate] = useState<string>('2024-06-01'); // Fecha inicial del rango
    const [endDate, setEndDate] = useState<string>('2024-06-07'); // Fecha final del rango
    const [error, setError] = useState<string | null>(null);

    const apiUrl = getAsteroidsAPIUrl({ startDate, endDate });

    useEffect(() => {
        const fetchData = async () => {
            // Validar las fechas antes de hacer la solicitud a la API
            const dateDifference = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
            const oneDay = 1000 * 60 * 60 * 24;
            const daysDifference = Math.ceil(dateDifference / oneDay);

            if (startDate > endDate || daysDifference > 7) {
                setError('El rango de fechas debe ser de máximo 7 días y la fecha de inicio debe ser anterior o igual a la fecha de fin.');
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
                setError(null); // Limpiar cualquier mensaje de error anterior
            } catch (error) {
                console.error('Error fetching data from NASA API:', error);
                setError('Hubo un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.');
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