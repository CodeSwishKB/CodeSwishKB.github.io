// TODO:
// Challenge 1 of 4: Splitting a list in two 
// This example shows a list of all people.
// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'

import getImageUrl from "./utils";
import { people } from "./datas";

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accoplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  )
}

export default function ListChallenge() {
  const chemist = datas.filter(person => person.profession === 'chemist')
  const nonChemist = datas.filter(person => person.profession !== 'chemist')

  return (
    <article>
      <h1>Scientist</h1>
      <ListSection
        title="Chemist"
        people={chemist}
      />
      <ListSection
        title="Everyone Else"
        people={nonChemist}
      />
    </article>
  )
}
