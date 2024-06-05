import { useState, useEffect } from "react";
import { ApodData } from "../interfaces/interfaceApod";

export const useApod = () => {



    const [apod, setApod] = useState<ApodData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const apiKey = 'zQYQLVKCzaLktITM6kPXNc7H5Gr2g7ppSZEsmwQ3'


    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ApodData = await response.json();
                setApod(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchApod();
    }, []);



    return {
        apod,
        loading,
        error
    }
}