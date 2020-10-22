import React from 'react'
import './MainLayoutStyle.css'
// import SearchPanel from '../SearchPanel'
// import JokesList from '../JokesLIst'
import { JokesListType, RadioMode } from '../../../../Types'
// import Loader from '../Loader'

type Props = {
  list: JokesListType
  handleJokesList: (id: string) => void
  handleCategories: (obj: RadioMode) => void
  error: any
  isLoaded: boolean
}

const MainLayoutView: React.FC<Props> = ({ list, handleJokesList, handleCategories, error, isLoaded }) => {
  // const renderJokeList = () => {
  //   if (!error && isLoaded) {
  //     return <JokesList handleJokesList={ handleJokesList }
  //       list={ list } />
  //   } else if (list.length > 0 && !isLoaded) {
  //     return <Loader />
  //   } else if (error) {
  //     return <img className="error" src="./chuck-error.png" alt="Something went wrong" />
  //   }
  // }

  return (
    <main>
      <section className="main">
        <h2 className="main__title">
          <strong>Hey!</strong>
          Let’s try to find a joke for you:
        </h2>
        { /* <SearchPanel handleCategories = { handleCategories } /> */ }
        { /* { renderJokeList() } */ }
      </section>
    </main>
  )
}

export default MainLayoutView
