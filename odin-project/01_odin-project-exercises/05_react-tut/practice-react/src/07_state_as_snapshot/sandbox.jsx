import { useState } from "react";

export function Form2() {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState("Hi!")

  if (isSent) {
    return <h1>Your message is on it's way!</h1>
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setIsSent(true)
        sendMessage(message)
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        name="" id=""></textarea>

      <button type="submit">Send</button>
    </form>
  )
}

function sendMessage(message) {

}

export function Form3() {
  const [to, setTo] = useState('Alice')
  const [message, setMessage] = useState("Hello")

  function handleSubmit(e) {
    e.preventDefault()
    setTimeout(() => {
      alert(`You said ${message} to ${to}`)
    }, 5000)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        To: {' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          name="" id="">
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        value={message}
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
        name="" id=""></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
          setCount(count + 1)
          setCount(count + 1)
        }}>+3</button>
    </>
  )
}
