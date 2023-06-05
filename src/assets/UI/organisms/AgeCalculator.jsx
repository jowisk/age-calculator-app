import React from 'react'
import InputList from '../atoms/InputList'
import Separator from '../molecules/Separator'
import Output from '../atoms/Output'
import { setInputDay, setInputMonth, setInputYear } from '../atoms/Inputslice'

const AgeCalculator = ({ arrow }) => {

    const inputArray = [
        {
            name: "day",
            placeholder: "DD",
            min: 1,
            max: 31,
            handler: setInputDay
        },
        {
            name: "month",
            placeholder: "MM",
            min: 1,
            max: 12,
            handler: setInputMonth
        },
        {
            name: "year",
            placeholder: "YYYY",
            min: 1900,
            max: 2023,
            handler: setInputYear
        },
    ]


    return (
        <div className="bg-white w-full h-[600px] px-[20px] py-[40px] rounded-br-[130px] rounded-[25px] flex flex-col">
            <InputList
                inputArray={inputArray}
            />
            <Separator
                arrow={arrow}
            />

            <Output />
        </div>
    )
}

export default AgeCalculator