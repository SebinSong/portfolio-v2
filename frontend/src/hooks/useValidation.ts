import React, { useState } from 'react'

type FormState = { [key: string]: any }
export type FormError = {
  key: string,
  msg: string
}

export type ValidationEntry = {
  key: string,
  check: (...arg: any[]) => any,
  msg: string
}

export default function useValidation (
  targetState: FormState = {},
  validationEntries: ValidationEntry[] = []
) {
  const [formError, setFormError] = useState<FormError | null>(null)

  const validateAll = () => {
    for (const { key, check, msg } of validationEntries) {
      if (!check(targetState[key], targetState)) {
        setFormError({ key, msg })

        const fieldEl = document.querySelector(`[data-vkey="${key}"]`)

        if (fieldEl && ('focus' in fieldEl)) {
          (fieldEl as HTMLInputElement).focus()
          fieldEl.scrollIntoView({
            block: 'center',
            inline: "nearest"
          })
        }

        return false
      }
    }

    return true
  }

  const clearFormError = () => setFormError(null)
  const isErrorActive = (key: string) => {
    return formError !== null && formError.key === key
  }

  return {
    validateAll,
    clearFormError,
    isErrorActive,
    formError
  }
}
