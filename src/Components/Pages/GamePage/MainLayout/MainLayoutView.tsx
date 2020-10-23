import React from 'react'
import './MainLayoutStyle.css'
// import SearchPanel from '../SearchPanel'
// import JokesList from '../JokesLIst'
import { JokesListType, RadioMode } from '../../../../Types'
import AnswerCell from '../../../AnswerCell'
import Button from '../../../Button'
import Media from 'react-media'
// import Loader from '../Loader'

type Props = {
  // list: JokesListType
  // handleJokesList: (id: string) => void
  // handleCategories: (obj: RadioMode) => void
  // error: any
  // isLoaded: boolean
}

const MainLayoutView: React.FC = () => {
  const defaultMainLayoutClassName = 'MainLayout'
  const maxQuery = '(max-width: 600px)'
  const minQuery = '(min-width: 601px)'

  const DesktopList = () => {
    return (
      <>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell variant="A" id="1" name="answ">
            aaa
          </AnswerCell>
        </li>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell variant="B" id="2" name="answ">
            ddd
          </AnswerCell>
        </li>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell variant="C" id="3" name="answ">
            fff
          </AnswerCell>
        </li>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell variant="D" id="4" name="answ">
            ggg
          </AnswerCell>
        </li>
      </>
    )
  }

  const MobileList = () => {
    return (
      <>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell sizeCell="s" variant="A" id="1" name="answ">
            aaa
          </AnswerCell>
        </li>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell sizeCell="s" variant="B" id="2" name="answ">
            ddd
          </AnswerCell>
        </li>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell sizeCell="s" variant="C" id="3" name="answ">
            fff
          </AnswerCell>
        </li>
        <li className={`${defaultMainLayoutClassName}__answers-item`}>
          <AnswerCell sizeCell="s" variant="D" id="4" name="answ">
            ggg
          </AnswerCell>
        </li>
      </>
    )
  }

  return (
    <main>
      <section className={defaultMainLayoutClassName}>
        <form className={`${defaultMainLayoutClassName}__answers-form`}>
          <div
            role="group"
            className={`${defaultMainLayoutClassName}__answers-fieldset`}
          >
            <legend className={`${defaultMainLayoutClassName}__answers-text`}>
              How old your elder brother was 10 years before you was born, mate?
            </legend>
            <ul className={`${defaultMainLayoutClassName}__answers-list`}>
              <Media
                queries={{
                  small: maxQuery,
                  large: minQuery,
                }}
              >
                {matches => (
                  <>
                    {matches.small && MobileList()}
                    {matches.large && DesktopList()}
                  </>
                )}
              </Media>
            </ul>
          </div>
          <Media
            queries={{
              small: maxQuery,
              large: minQuery,
            }}
          >
            {matches => (
              <>
                {matches.small && (
                  <Button type="button" size="s">
                    Check
                  </Button>
                )}
                {matches.large && <Button type="button">Check</Button>}
              </>
            )}
          </Media>
        </form>

        {/* <SearchPanel handleCategories = { handleCategories } /> */}
        {/* { renderJokeList() } */}
      </section>
    </main>
  )
}

export default MainLayoutView
