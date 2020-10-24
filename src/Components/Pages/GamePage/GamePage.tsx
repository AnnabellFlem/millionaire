import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Header from './Header'
import Footer from './Footer'

const GamePage: React.FC<any> = ({ handleEndGame }) => {
  const [openFavList, setOpenFavList] = useState(false)

  const handleBtnClick = () => {
    setOpenFavList(!openFavList)
  }

  return (
    <>
      <Header handleBtnClick={() => handleBtnClick()} />
      <MainLayout handleEndGame={handleEndGame} />
      <Footer />
    </>
  )
}

export default GamePage
