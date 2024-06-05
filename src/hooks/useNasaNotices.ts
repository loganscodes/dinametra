import { useEffect, useState } from "react";
import {  Item } from "../interfaces/interfaces";

export const useNasaNotices = (initialQuery: string) => {
    const [notices, setNotices] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>(initialQuery);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Ordenar las noticias por fecha de creación de mayor a menor
                const sortedNotices = data.collection.items.sort((a: Item, b: Item) => {
                    const dateA = new Date(a.data[0].date_created);
                    const dateB = new Date(b.data[0].date_created);
                    return dateB.getTime() - dateA.getTime();
                });
                setNotices(sortedNotices);
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

        fetchImages();
    }, [query]);

    return { notices, loading, error, setQuery };
};
