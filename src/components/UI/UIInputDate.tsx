import React, { ChangeEvent } from 'react'

interface Props{
    title: string
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UIInputDate = ({ title, value, onChange }:Props) => {
    return (
        <div>
            <label className='text-white'>{title}: </label>
            <input
                type="date"
                id="startDatePicker"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default UIInputDate