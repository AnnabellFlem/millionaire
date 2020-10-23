import React from 'react'
import './MainLayoutStyle.css'
// import SearchPanel from '../SearchPanel'
// import JokesList from '../JokesLIst'
import { JokesListType, RadioMode } from '../../../../Types'
import AnswerCell from '../../../AnswerCell'
// import Loader from '../Loader'

type Props = {
  // list: JokesListType
  // handleJokesList: (id: string) => void
  // handleCategories: (obj: RadioMode) => void
  // error: any
  // isLoaded: boolean
}

const MainLayoutView: React.FC = () => {
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

  const defaultMainLayoutClassName = 'MainLayout'

  return (
    <main>
      <section className="MainLayout">
        <form>
          <fieldset className="MainLayout__answers-fieldset">
            <legend className="MainLayout__answers-list">
              How old your elder brother was 10 years before you was born, mate?
            </legend>
            <ul className="MainLayout__answers-list">
              <li className="MainLayout__answers-item" >
                <AnswerCell variant="A" id='1' name="answ">aaa</AnswerCell>
              </li>
              <li className="MainLayout__answers-item" >
                <AnswerCell variant="B" id='2' name="answ">ddd</AnswerCell>
              </li>
              <li className="MainLayout__answers-item" >
                <AnswerCell variant="C" id='3' name="answ">fff</AnswerCell>
              </li>
              <li className="MainLayout__answers-item" >
                <AnswerCell variant="D" id='4' name="answ">ggg</AnswerCell>
              </li>
            </ul>
          </fieldset>
          <button type="button">Check</button>
        </form>

        { /* <SearchPanel handleCategories = { handleCategories } /> */ }
        { /* { renderJokeList() } */ }
      </section>
    </main>
  )
}

export default MainLayoutView
