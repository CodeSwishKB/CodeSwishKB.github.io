/* TODO:
Challenge 3 of 3: Refactor a series of ? : to if and variables 
This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.
 */


function Drink({ name }) {
  let part
  let caffine
  let age

  if (name === 'tea') {
    part = 'leaf'
    caffine = '15-70 mg/cup'
    age = '4,000+ years'
  } else if (name === 'coffee') {
    part = 'bean'
    caffine = '80-185 mg/cup'
    age = '1,000+ years'
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of Plant</dt>
        <dd>{part}</dd>
        <dt>Caffine content</dt>
        <dd>{caffine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  )
}

