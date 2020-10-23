import React from 'react'
import './StartPage.css'
import Button from '../../Button'
import { ReactComponent as ThumbsUpLogo } from '../../../Images/svg/thumbs-up.svg'
import Media from 'react-media'

type Props = Partial<{
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement | HTMLElement>) => void
}>

const StartPage: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <main>
      <section className="main">
        <div className="main__wrapper">
          <div className="main__image">
            <ThumbsUpLogo />
          </div>
          <div className="main__text">
            <h1 className="main__title">Who wants to be a millionaire?</h1>
            <Media
              queries={{
                small: '(max-width: 600px)',
                large: '(min-width: 601px)',
              }}
            >
              {matches => (
                <>
                  {matches.small && (
                    <Button onClick={onButtonClick} size="s" fullWidth>
                      Start
                    </Button>
                  )}
                  {matches.large && (
                    <Button onClick={onButtonClick}>Start</Button>
                  )}
                </>
              )}
            </Media>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StartPage
