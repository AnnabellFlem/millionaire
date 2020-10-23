import React, { useState } from 'react'
import './HeaderStyle.css'
import { ReactComponent as CloseIcon } from '../../../../Images/svg/close.svg'
import { ReactComponent as BurgerIcon } from '../../../../Images/svg/menu.svg'
import MoneyCell from '../../../MoneyCell'
import Media from 'react-media'

type Props = {
  handleBtnClick: () => void
}

const HeaderView: React.FC<Props> = ({ handleBtnClick }) => {
  const [closeIcon, setCloseIcon] = useState(false)
  const openText = 'Open list of money levels'
  const closeText = 'Close list of money levels'
  const iconClick = () => {
    setCloseIcon(!closeIcon)
    handleBtnClick()
  }

  const defaultHeaderClassName = 'Header'

  const DesktopMenu = () => {
    return (
      <nav className={ `${defaultHeaderClassName}__nav` }>
        <ul className={ `${defaultHeaderClassName}__list` }>
          <li className={ `${defaultHeaderClassName}__item` }>
            <MoneyCell>1111</MoneyCell>
          </li>
          <li className={ `${defaultHeaderClassName}__item` }>
            <MoneyCell>22222</MoneyCell>
          </li>
          <li className={ `${defaultHeaderClassName}__item` }>
            <MoneyCell>3333</MoneyCell>
          </li>
        </ul>
      </nav>
    )
  }

  const MobileMenu = () => {
    return (
      <>
        <button className={ `${defaultHeaderClassName}__menu` } aria-label={ closeIcon ? closeText : openText }
          onClick={ () => iconClick() } >
          { closeIcon ? <CloseIcon tabIndex={ 0 } /> : <BurgerIcon tabIndex={ 0 } /> }
        </button>
        { closeIcon && (<nav className={ `${defaultHeaderClassName}__nav` }>
          <ul className={ `${defaultHeaderClassName}__list` }>
            <li className={ `${defaultHeaderClassName}__item` }>
              <MoneyCell size='s'>1111</MoneyCell>
            </li>
            <li className={ `${defaultHeaderClassName}__item` }>
              <MoneyCell size='s'>22222</MoneyCell>
            </li>
            <li className={ `${defaultHeaderClassName}__item` }>
              <MoneyCell size='s'>3333</MoneyCell>
            </li>
          </ul>
        </nav>) }
      </>
    )
  }

  return (
    <header className={ defaultHeaderClassName }>
      <Media queries={{
        small: '(max-width: 920px)',
        large: '(min-width: 921px)'
      }}>
        { matches => (
          <>
            { matches.small && MobileMenu() }
            { matches.large && DesktopMenu() }
          </>
        ) }
      </Media>
    </header>
  )
}

export default HeaderView
