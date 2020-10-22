import React from 'react'
import classNames from 'classnames'
import './AnswerCell.css'
import AnswerCellIcon from '../../assets/AnswerCellIcon'

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & Partial<{
  size: 's' | 'm'
  active: boolean
  correct: boolean
  wrong: boolean
}> & { variant: string }

const MoneyCell: React.FC<Props> = ({ size = 'm', variant, active, correct, wrong, children, ...rest }) => {
  const defaultCellClassName = 'answer-cell'
  const cellTextClassName = `${defaultCellClassName}__text`
  const cellVariantClassName = `${defaultCellClassName}__variant`

  const buttonClassNames = classNames(defaultCellClassName, {
    [`${defaultCellClassName}--${size}`]: size,
    [`${defaultCellClassName}--active`]: active,
    [`${defaultCellClassName}--correct`]: correct,
    [`${defaultCellClassName}--wrong`]: wrong
  })

  return (
    <div className={ buttonClassNames } { ...rest }>
      <hr className={ `${defaultCellClassName}__line` } />
      <AnswerCellIcon className={ `${defaultCellClassName}__icon` } iconSize={ size } />
      { variant && <span className={ cellVariantClassName }>{ variant }</span> }
      <span className={ cellTextClassName }>{ children }</span>
    </div>
  )
}

export default MoneyCell
