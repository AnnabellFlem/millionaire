import React from 'react'
import './StartPage.css'
import Button from '../../Button'

type Props = {
  // list: JokesListType
  // handleJokesList: (id: string) => void
  // handleCategories: (obj: RadioMode) => void
  // error: any
  // isLoaded: boolean
}

const StartPage: React.FC<Props> = ({ ...rest }) => {
  return (
    <main>
      <section className="main">
        <div className="main__image">
          <img alt="Thumbs up" src="../../../Images/svg/thumbs-up.svg" width="453" height="357" />
        </div>
        <div className="main__text">
        <h1 className="main__title">
          Who wants to be a millionaire?
        </h1>
          <Button>Start</Button>
        </div>
      </section>
    </main>
  )
}

export default StartPage
