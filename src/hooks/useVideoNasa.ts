import { useEffect, useState } from "react";
import { VideoNasaProps } from "../interfaces/interfacesHooks";



export const useVideoNasa = ({ selectedNoticeHref }: VideoNasaProps) => {
    const [collectionData, setCollectionData] = useState<any>(null);

    useEffect(() => {
        if (selectedNoticeHref) {
            fetch(selectedNoticeHref)
                .then(response => response.json())
                .then(data => {
                    setCollectionData(data);
                })
                .catch(error => {
                    console.error('Error al obtener los datos:', error);
                });
        }
    }, [selectedNoticeHref]);

    return {
        collectionData,
    };
};
