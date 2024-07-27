// TODO:
// Challenge 2 of 4: Fix stuck form inputs 
// When you type into the input fields, nothing appears. It’s like the input values are “stuck” with empty strings. The value of the first <input> is set to always match the firstName variable, and the value for the second <input> is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don’t seem to “remember” their values between re-renders. Fix this by using state variables instead.

import { useState } from "react"

export default function Form() {
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <form action="" onSubmit={e => e.preventDefault()}>
      <input value={firstName} type="text" placeholder="First Name" onChange={handleFirstNameChange} />
      <input value={lastName} type="text" placeholder="Last Name" onChange={handleLastNameChange} />
      <h1>Hi {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  )
}
