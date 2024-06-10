import { useState, useEffect } from "react";
import { ApodData } from "../interfaces/interfaceApod";
import { API_URL_APOD } from "../api";

export const useApod = () => {



    const [apod, setApod] = useState<ApodData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch(API_URL_APOD);
                if (!response.ok) {
                    throw new Error('network down, please retry later');
                }
                const data: ApodData = await response.json();
                setApod(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('an unknown error occurred, please contact support');
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