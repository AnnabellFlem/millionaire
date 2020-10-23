import React, { useState } from 'react'
import MainLayout from '../MainLayout'
import Header from '../Header'
import Footer from '../Footer'
import ChuckNorrisService from '../../../../Services/chucknorris-service'

const MainPage: React.FC = () => {
  // const chuckNorrisService = new ChuckNorrisService()
  const [openFavList, setOpenFavList] = useState(false)

  // const getStorageList = (key: string) => {
  //   const initList = window.localStorage.getItem(key)
  //   if (initList) {
  //     return [...JSON.parse(initList as string)]
  //   }
  //   return []
  // }
  // const [favList, setFavList] = useState(getStorageList('favList') as FavListType)
  // const [list, setList] = useState([] as JokesListType)
  // const [jokeList, setJokeList] = useState([] as JokesListType)
  // const [error, setError] = useState(null)
  // const [isLoaded, setIsLoaded] = useState(false)

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

export default MainPage
