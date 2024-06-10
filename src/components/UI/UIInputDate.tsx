import { UIInputDateProps } from '../../interfaces/interfacesUI'



const UIInputDate = ({ title, value, onChange }:UIInputDateProps) => {
    return (
        <div>
            <label className='text-white'>{title}: </label>
            <input
                type="date"
                id="startDatePicker"
                value={value}
                onChange={onChange}
                aria-label={value}
            />
        </div>
    )
}

export default UIInputDate