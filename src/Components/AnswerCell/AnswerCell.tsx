import React from 'react'
import classNames from 'classnames'
import './AnswerCell.css'
import AnswerCellIcon from '../../assets/AnswerCellIcon'

type Props = React.HTMLProps<HTMLInputElement> & Partial<{
  sizeCell: 's' | 'm'
  active: boolean
  correct: boolean
  wrong: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> & { variant: string; id: string }

const AnswerCell: React.FC<Props> = ({ sizeCell = 'm', id, onChange, variant, active, correct, wrong, children, ...rest }) => {
  const defaultCellClassName = 'answer-cell'
  const cellTextClassName = `${defaultCellClassName}__text`
  const cellVariantClassName = `${defaultCellClassName}__variant`

  const cellClassNames = classNames(defaultCellClassName, {
    [`${defaultCellClassName}--${sizeCell}`]: sizeCell,
    [`${defaultCellClassName}--active`]: active,
    [`${defaultCellClassName}--correct`]: correct,
    [`${defaultCellClassName}--wrong`]: wrong
  })

  return (
    <div className={ cellClassNames }>
      <div className={ `${defaultCellClassName}__wrapper` }>
        <input
          type="checkbox"
          onChange={ onChange }
          className={ `${defaultCellClassName}__input` }
          id={ id }
          { ...rest }
        />
        <label htmlFor={ id } className={ `${defaultCellClassName}__label` }>
          <AnswerCellIcon className={ `${defaultCellClassName}__icon` } iconSize={ sizeCell } />
          <span className={ cellTextClassName }>{ variant && <span className={ cellVariantClassName }>{ variant }</span> }{ children }</span>
        </label>
        <hr className={ `${defaultCellClassName}__line` } />
      </div>
    </div>
  )
}

export default AnswerCell
