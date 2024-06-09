import { useEffect, useState } from "react";

interface Props {
    selectedNoticeHref: string;
}

export const useVideoNasa = ({ selectedNoticeHref }: Props) => {
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
