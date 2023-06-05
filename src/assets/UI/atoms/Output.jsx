import { React } from 'react'
import { useSelector } from 'react-redux'
import Calculate from './calculateAge'

const Output = () => {

    const {inputDay} = useSelector(state => state.input)
    const {inputMonth} = useSelector(state => state.input)
    const {inputYear} = useSelector(state => state.input)

    const inputs = {
        day: inputDay,
        month: inputMonth,
        year: inputYear
    }

    const difference = Calculate(inputs)
   
    return (
        <div>
            <div className="flex flex-col text-[50px] font-[900] italic text-center mt-[50px]">
                <div className="flex">
                    <p className="text-[#884cfd] mr-[10px]">{difference._year_calculated}</p>
                    <p>years</p>
                </div>
                <div className="flex">
                    <p className="text-[#884cfd] mr-[10px]">{difference._month_calculated}</p>
                    <p>months</p>
                </div>
                <div className="flex">
                    <p className="text-[#884cfd] mr-[10px]">{difference._day_calculated}</p>
                    <p>days</p>
                </div>
            </div>
        </div>
    )
}

export default Output