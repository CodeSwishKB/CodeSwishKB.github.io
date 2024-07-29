import { useState } from "react";

// Avoid deeply nested state
import { initialTravelPlan } from "./places";

export function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan)

  function handleComplete(parentId, childId) {
    const parent = plan[parentId]

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    }

    setPlan({
      ...plan,
      [parentId]: nextParent
    })
  }

  const root = plan[0]
  const planetIds = root.childIds

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  )

}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id]
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(parentId, id)
      }}>Complete</button>
      <ol>
        {childIds.map(childId => (
          <PlaceTree
            key={childId}
            id={childId}
            parentId={id}
            placesById={placesById}
            onComplete={onComplete}
          />
        ))}
      </ol>
    </li>
  )
}


// Avoid duplication state
const initialItems = [
  { title: 'prezels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 }
]

export function Menu() {
  const [items, setItems] = useState(initialItems)
  const [selectedId, setSelectedId] = useState(0)

  const selectedItem = items.find(item =>
    item.id === selectedId
  )

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value
        }
      } else {
        return item
      }
    }))
  }

  return (
    <>
      <h2>Whats your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id)
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem?.title}</p>
    </>
  )
}


// Avoid redundant state
export function Form4() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const fullName = `${firstName} ${lastName}`

  function handleFirstNameChange(e) {
    e.preventDefault()
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    e.preventDefault()
    setLastName(e.target.value)
  }

  return (
    <>
      <h2>Lets check you in</h2>
      <label>
        First Name: {' '}
        <input
          onChange={handleFirstNameChange}
          value={firstName}
          type="text" />
      </label>
      <label>
        Last Name: {' '}
        <input
          onChange={handleLastNameChange}
          value={lastName}
          type="text" />
      </label>

      <p>The ticket will be issue to: <b>{fullName}</b></p>
    </>
  )
}

// Avoid contradictions on state
export function FeedbackForm3() {
  const [text, setText] = useState(' ')
  const [status, setStatus] = useState('typing')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    await sendMessage(text)
    setStatus('sent')
  }

  const isSending = status === 'sending'
  const isSent = status === 'sent'

  if (isSent) {
    return <h1>Thanks for feedback</h1>
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
        name="" id=""></textarea>
      <br />
      <button disabled={isSending} type="submit">Send</button>
      {isSending && <p>Sending...</p>}
    </form>
  )


}

function sendMessage() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
}

export function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        })
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh'
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: '-10',
          top: '-10',
          width: '20',
          height: '20'
        }} />
    </div>
  )
}
