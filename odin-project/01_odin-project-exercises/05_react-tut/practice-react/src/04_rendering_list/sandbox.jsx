/* RENDERING DATAS FROM ARRAY:  */
/* const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario Jose Molina-Pasquel: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chadrasekhar: astrophysicist'
]

export default function List() {
  const listItem = people.map(person => <li>{person}</li>)
  return <ul>{listItem}</ul>
}*/

function getImageUrl(person) {
  return ('https://i.imgur.com/' + person.imageId + 's.jpg')
}

/* FILTERING DATAS FROM ARRAY: */
const people2 = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

// export default function List2() {
//   const chemist = people2.filter(person => person.profession === 'chemist')
//   const chems = chemist.map(person =>
//     <li>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b> {person.name}</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   )
//   return <ul>{chems}</ul>
// }


/* keeping list items in order with key*/
export default function List3() {
  const listItems = people2.map(person => {
    return <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  })

  return <ul>{listItems}</ul>
}



























