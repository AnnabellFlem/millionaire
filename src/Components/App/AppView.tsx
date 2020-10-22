import React from 'react'
// import MainPage from '../Pages/MainPage'
import MoneyCell from '../MoneyCell'
import './AppStyles.css'

const AppView: React.FC = () => {
  return (
    <div className="App">
      { /* <MainPage /> */ }
      <MoneyCell>MoneyCell</MoneyCell>
    </div>
  )
}

export default AppView
