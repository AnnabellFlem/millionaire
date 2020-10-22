import React from 'react'
 import MainPage from '../Pages/MainPage'
// import MoneyCell from '../MoneyCell'
import './App.css'
import StartPage from '../Pages/StartPage'

const App: React.FC = () => {
  return (
    <div className="App">
      { /* <MainPage /> */ }
      {/*<MoneyCell disabled size='s' >$1,000,000</MoneyCell>*/}
      <StartPage />
    </div>
  )
}

export default App
