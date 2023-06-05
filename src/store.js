import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { calculate, outputReducer } from './assets/UI/atoms/outputSlice'
import { setInputDay, setInputMonth, setInputYear, inputReducer } from './assets/UI/atoms/inputSlice.js'


const store = configureStore({
    reducer: {
            input: inputReducer,
            output: outputReducer
    },

});


export { store, setInputDay, setInputMonth, setInputYear, calculate}