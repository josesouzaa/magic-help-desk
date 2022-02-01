import { useState } from 'react'

export function useForm(initialState) {
  const [form, setForm] = useState(initialState)

  function handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value
    })
  }

  return { form, setForm, handleChange }
}
