import { useEffect, useState } from "react";
import {  Item } from "../interfaces/interfaces";
import { API_URL_NOTICES } from "../api";

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
                const response = await fetch(API_URL_NOTICES + `${query}`);
                if (!response.ok) {
                    throw new Error('network down, please retry later');
                }
                const data = await response.json();
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
                    setError('an unknown error occurred, please contact support');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query]);

    return { notices, loading, error, setQuery };
};
