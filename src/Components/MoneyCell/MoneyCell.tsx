import React from 'react'
import classNames from 'classnames'
import './MoneyCell.css'

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & Partial<{
  size: 's' | 'm'
  active: boolean
  disabled: boolean
}>

const MoneyCell: React.FC<Props> = ({ size, active, disabled, children, ...rest }) => {
  const defaultCellClassName = 'money-cell'
  const cellTextClassName = `${defaultCellClassName}__text`

  const buttonClassNames = classNames(defaultCellClassName, {
    [`${defaultCellClassName}--${size}`]: size,
    [`${defaultCellClassName}--active`]: active,
    [`${defaultCellClassName}--disabled`]: disabled
  })

  return (
    <div className={ buttonClassNames } { ...rest }>
      <span className={ cellTextClassName }>{ children }</span>
    </div>
  )
}

export default MoneyCell
