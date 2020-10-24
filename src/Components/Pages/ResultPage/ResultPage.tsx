import React from 'react'
import './ResultPage.css'
import Button from '../../BaseComponents/Button'
import { ReactComponent as ThumbsUpLogo } from '../../../Images/svg/thumbs-up.svg'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../Constants/MediaQueries'

type Props = Partial<{
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement | HTMLElement>) => void
}>

const ResultPage: React.FC<Props> = ({ onButtonClick }) => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)

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
            {isWide ? (
              <Button onClick={onButtonClick} value="retry">
                Try again
              </Button>
            ) : (
              <Button onClick={onButtonClick} size="s" fullWidth value="retry">
                Try again
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResultPage
