import { useEffect, useState } from "react";
import { PatentData } from "../interfaces/interfacePatent";
import { API_URL_PATENT } from "../api";

export const usePattent = () => {

    const [patentData, setPatentData] = useState<PatentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const fetchPatentData = async () => {
            try {
                const response = await fetch(
                    API_URL_PATENT
                );
                if (!response.ok) {
                    throw new Error('network down, please retry late');
                }
                const data = await response.json();
                if (data.results && Array.isArray(data.results)) {
                    const parsedData = data.results.map((result: any) => ({
                        id: result[0],
                        title: result[2],
                        patent: result[1],
                        abstract: result[3],
                        contact: result[10],
                        date: result[12],
                    }));

                    console.log(parsedData)
                    setPatentData(parsedData);
                } else {
                    throw new Error('Invalid data format received');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching patent data:', error);
            }
        };

        fetchPatentData();
    }, []);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    const filteredPatents = patentData.filter(patent => 
        patent.patent.toLowerCase().includes(filter.toLowerCase())
    )


    return{
        patentData,
        setPatentData,
        loading,
        setLoading,
        filter,
        handleFilterChange,
        filteredPatents
    }




}