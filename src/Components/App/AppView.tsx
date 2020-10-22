import React from 'react'
// import MainPage from '../Pages/MainPage'
import MoneyCell from '../MoneyCell'
import './AppStyles.css'

const AppView: React.FC = () => {
  return (
    <div className="App">
      { /* <MainPage /> */ }
      <MoneyCell disabled size='s' >$1,000,000</MoneyCell>
    </div>
  )
}

export default AppView
