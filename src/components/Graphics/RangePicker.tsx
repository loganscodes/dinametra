import { ChangeEvent } from "react";
import UIInputDate from "../UI/UIInputDate";

interface Props {
    startDateI: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    endDateI: string
    onChangeEnd: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RangePicker = ({ startDateI, onChange, endDateI, onChangeEnd }: Props) => {
    return (
        <div className=" flex items-center flex-wrap justify-center text-center mb-7 mt-10 gap-5">

            <UIInputDate title="Start Date" value={startDateI} onChange={onChange}/>
            <UIInputDate title="End Date" value={endDateI} onChange={onChangeEnd}/>

        </div>
    )
}

export default RangePicker