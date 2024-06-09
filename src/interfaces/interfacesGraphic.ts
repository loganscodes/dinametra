import { ChangeEvent } from "react";

export interface GrapProps {
    data: any
}


export interface RangePickerProps {
    startDateI: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    endDateI: string
    onChangeEnd: (event: ChangeEvent<HTMLInputElement>) => void;
}