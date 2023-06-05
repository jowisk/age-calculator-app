import { React, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'


const Input = ({ name, placeholder, min, max, handler } = props) => {
    
    const dispatch = useDispatch()
    const inputRef = useRef()

    const onChangeHandler = (e) => {
        dispatch(handler(e.target.value))
    }

    return (
        <div className="flex flex-col w-[90px]">
            <label className="uppercase font-[700] text-[#676767] tracking-[3px] text-[14px] mb-[5px]" >{name}
                <input 
                    onChange={onChangeHandler} 
                    className="flex items-center w-full border-[1px] rounded-[10px] font-[700] text-[25px] pl-[10px] pb-[8px] pt-[5px]" 
                    type="number" 
                    name={name} 
                    min={min} 
                    max={max}
                    placeholder={placeholder}
                    ref={inputRef}
                />
            </label>

        </div>
    )
}

export default Input