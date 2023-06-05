import React from 'react'
import Input from './Input'

const InputList = ({ inputArray }) => {
    return (

        <div className="flex justify-between">
            {inputArray.map((input, index) => (
                <Input
                    key={index}
                    name={input.name}
                    placeholder={input.placeholder}
                    min={input.min}
                    max={input.max}
                    handler={input.handler}
                />
            ))}
        </div>
    )
}

export default InputList