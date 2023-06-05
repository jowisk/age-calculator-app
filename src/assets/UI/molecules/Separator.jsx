import React from 'react'

const Separator = ({ arrow }) => {
    return (
        <div className="h-[70px] w-full flex items-center justify-center relative mt-[20px]">
            <span className="absolute z-[1] border-b-[2px] w-full border-[#676767]h-[1px]"></span>
            <img src={arrow} className="bg-[#884cfd] p-[15px] font-bold h-full w-[70px] rounded-full absolute z-[2]" alt="Vite logo" />
        </div>
    )
}

export default Separator