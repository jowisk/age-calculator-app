import { createSlice } from "@reduxjs/toolkit";

const outputSlice = createSlice({
    name: 'output',
    initialState: {
        calcOutput: []
    },
    reducers: {
        calculate(state, action) {
            const output = [
                {
                    outputYear: Math.abs(action.payload.inputYear),
                    outputMonth: Math.abs(action.payload.inputMonth),
                    outputDay: Math.abs(action.payload.inputDay)
                }
            ];
            state.calcAge = output;
        }
    }
})

export const { calculate } = outputSlice.actions;
export const outputReducer = outputSlice.reducer;