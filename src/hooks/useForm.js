import { useEffect, useState } from 'react'
import { useEffectUpdate } from './useEffectUpdate'

export const useForm = (initialFields, cb, isAsync = false) => {
  const [fields, setFields] = useState(initialFields)

  let asyncFields

  const getAsyncFields = async () => {
    asyncFields = await initialFields
    setFields(asyncFields)
  }

  useEffect(() => {
    if (isAsync) getAsyncFields()
  }, [])

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.type === 'number' ? +target.value || '' : target.value
    if (target.type === 'file') value = target.files[0]
    setFields((prevFields) => ({ ...prevFields, [field]: value }))
  }

  const resetFields = () => {
    const emptyFields = {}
    for (let field in fields) {
      emptyFields[field] = ''
    }
    setFields(emptyFields)
  }

  const changeFields = (fields) => {
    setFields(fields)
  }

  useEffectUpdate(() => {
    if (cb) cb(fields)
  }, [fields])

  // onChange={handleChange} type="text" id="model" name="model" value={model}
  const register = (
    field,
    label,
    placeholder = '',
    type = 'text'
  ) => {
    return {
      onChange: handleChange,
      type,
      id: field,
      name: field,
      value: type === 'file' ? '' : fields[field] || '',
      placeholder,
      label

    }
  }

  return [register, fields, resetFields, changeFields]
}
