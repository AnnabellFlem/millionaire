import React, { useEffect, useState } from 'react'
import MainLayout from '../GamePage/MainLayout'
import Header from '../GamePage/Header'
import Footer from '../GamePage/Footer'
import FavouriteList from '../GamePage/FavouriteList/FavouriteListView'
import { FavListType, JokesListType, JokeType, RadioMode, RadioTypes } from '../../../Types'
import ChuckNorrisService from '../../../Services/chucknorris-service'

const MainPageView: React.FC = () => {
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

  return (<>
    <Header handleBtnClick={ () => handleBtnClick() } />
    { /* <MainLayout list={ jokeList } */ }
    { /*  error={ error } isLoaded={ isLoaded } /> */ }
    <FavouriteList openFavList={ openFavList } />
    <Footer />
  </>)
}

export default MainPageView
