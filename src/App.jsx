import { useState } from 'react'
import arrow from '/icon-arrow.svg'
import './App.css'
import AgeCalculator from './assets/UI/organisms/AgeCalculator'
import { store } from './store.js'
import { Provider } from 'react-redux'
function App() {


  return (
    <Provider store={store}>
      <div className="bg-[#f0f0f0] px-[16px] flex items-center h-screen">
        <AgeCalculator
          arrow={arrow}
        />
      </div>
    </Provider>
  )
}

export default App
