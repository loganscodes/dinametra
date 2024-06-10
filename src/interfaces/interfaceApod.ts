export interface ApodData {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
    copyright: string;
}

export interface ApodProps {
    apod: {
        title: string;
        url: string;
        copyright: string;
        date: string;
        explanation: string;
    };
}