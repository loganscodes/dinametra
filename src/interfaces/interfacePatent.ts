export interface PatentData {
    id: string;
    title: string;
    patent: string;
    abstract: string;
    contact: string;
    date: number;
}

export interface PatentListProps {
    patents: PatentData[]
}

export interface PatentSearchProps {
    filter: string;
    handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}