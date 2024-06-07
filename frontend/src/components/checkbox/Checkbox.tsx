import { ReactNode } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

type CheckboxProps = {
  classes?: string,
  checked: boolean,
  label?: string,
  onChange?: (a: any) => void,
  children?: ReactNode
}

export default function Checkbox ({
  classes = '',
  label = '',
  checked,
  children,
  onChange
}: CheckboxProps) {
  const checkLabel = label || children || ''

  // methods
  const changeHandler = (e: any) => {
    onChange && onChange(e.target.checked)
  }

  return (
    <label className={cn('checkbox-container', Boolean(checked) && 'is-active',  classes)} tabIndex={0}>
      <span className='checkbox-wrapper'>
        <input type='checkbox' checked={checked}
          onChange={changeHandler} />

        <span className='checkbox-inner'></span>
      </span>

      <span className='checkbox-text'>{checkLabel}</span>
    </label>
  )
}
