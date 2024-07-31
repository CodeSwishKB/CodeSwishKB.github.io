// TODO:
//Update the Person component we’ve been using above.
// Add two separate input fields for the first name and the last name. Either of these should be able to update the full name in the h1 element with every keystroke.
// There are many ways you can do this. Keep in mind what you’ve learned in this lesson while coding it out.

import { useState } from "react";

// 1. component for input
// 2. handler for typing the name
// 3. call it to parent component

function Input({ name, onChange }) {
  return (
    <input
      value={name}
      onChange={onChange}
    />
  )
}


export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const fullName = `${firstName} ${lastName}`
  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
  }

  return (
    <>
      <label htmlFor="">
        <input
          value={firstName}
          onChange={handleFirstName}
          placeholder="first name"
        />
      </label>
      <label htmlFor="">

        <input
          value={lastName}
          onChange={handleLastName}
          placeholder="last name"
        />

      </label>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

