import React from 'react'
import './ResultPage.css'
import Button from '../../BaseComponents/Button'
import { ReactComponent as ThumbsUpLogo } from '../../../Images/svg/thumbs-up.svg'
import Media from 'react-media'

type Props = Partial<{
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement | HTMLElement>) => void
}>

const ResultPage: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <main>
      <section className="main">
        <div className="main__wrapper">
          <div className="main__image">
            <ThumbsUpLogo />
          </div>
          <div className="main__text">
            <h2 className="main__title-total">Total score:</h2>
            <h3 className="main__title">$8,000 earned</h3>
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
                      Try again
                    </Button>
                  )}
                  {matches.large && (
                    <Button onClick={onButtonClick}>Try again</Button>
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

export default ResultPage
