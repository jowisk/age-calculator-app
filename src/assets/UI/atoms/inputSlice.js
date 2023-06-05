import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
    name: 'input',
    initialState: {
        inputDay: new Date().getDate(),
        inputMonth: (new Date().getMonth() + 1),
        inputYear: new Date().getFullYear(),
    },

    reducers: {
        setInputDay(state, action) { 
            state.inputDay = action.payload
        },
        setInputMonth(state, action) {
            state.inputMonth = action.payload
        },
        setInputYear(state, action) {
            state.inputYear = action.payload
        }
    }
});
export const { setInputDay, setInputMonth, setInputYear } = inputSlice.actions;
export const inputReducer = inputSlice.reducer;


