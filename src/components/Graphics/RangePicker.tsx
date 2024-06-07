import { ChangeEvent } from "react";

interface Props{
    startDateI: string,
    onChange:  (event: ChangeEvent<HTMLInputElement>) => void;
    endDateI: string
    onChangeEnd: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RangePicker = ({ startDateI, onChange, endDateI, onChangeEnd }:Props) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <label htmlFor="startDatePicker">Fecha de inicio:</label>
            <input
                type="date"
                id="startDatePicker"
                value={startDateI}
                onChange={onChange}
            />
            <label htmlFor="endDatePicker">Fecha de fin:</label>
            <input
                type="date"
                id="endDatePicker"
                value={endDateI}
                onChange={onChangeEnd}
            />
        </div>
    )
}

export default RangePicker