import { memo } from 'react'
function FormErrorMessage ({
  formKey, formError
}: { formKey: string, formError: any }) {
  return formError && formError.key === formKey
    ? <p className='form-error'>{formError.msg}</p>
    : null
}

export default memo(FormErrorMessage)
