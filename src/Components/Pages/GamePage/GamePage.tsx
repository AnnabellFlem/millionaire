import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Header from './Header'
import Footer from './Footer'

const GamePage: React.FC = () => {
  const [openFavList, setOpenFavList] = useState(false)

  const handleBtnClick = () => {
    setOpenFavList(!openFavList)
  }

  return (
    <>
      <Header handleBtnClick={() => handleBtnClick()} />
      <MainLayout />
      <Footer />
    </>
  )
}

export default GamePage
