// TODO:
// Challenge 1 of 2: Synced inputs 
// These two iChallenge 1 of 2: Synced inputs 
// These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versanputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa

import { useState } from 'react';

const inputStyle = {
  display: 'block',
  marginBottom: '1em'
}

export default function SyncedInputs() {
  const [msg, setMsg] = useState('')

  function handleTextChange(e) {
    setMsg(e.target.value)
  }
  return (
    <>
      <Input label="First input"
        text={msg}
        onTextChange={handleTextChange}
      />
      <Input label="Second input"
        text={msg}
        onTextChange={handleTextChange}
      />
    </>
  );
}

function Input({ label, text, onTextChange }) {
  return (
    <label>
      {label}
      {' '}
      <input 
        style={inputStyle}
        value={text}
        onChange={onTextChange}
      />
    </label>
  );
}

