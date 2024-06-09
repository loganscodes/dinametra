import UIInputDate from "../UI/UIInputDate";
import { RangePickerProps } from "../../interfaces/interfacesGraphic";



const RangePicker = ({ startDateI, onChange, endDateI, onChangeEnd }: RangePickerProps) => {
    return (
        <div className=" flex items-center flex-wrap justify-center text-center mb-7 mt-10 gap-5">

            <UIInputDate title="Start Date" value={startDateI} onChange={onChange}/>
            <UIInputDate title="End Date" value={endDateI} onChange={onChangeEnd}/>

        </div>
    )
}

export default RangePicker