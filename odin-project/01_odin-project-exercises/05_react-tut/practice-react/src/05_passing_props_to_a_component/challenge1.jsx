/* TODO:
  Challenge 1 of 3: Extract a component 
  This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
*/

import { getImageUrl } from "./utils";

const sectionStyle = {
  border: '1px solid gray',
  borderRadius: '1em',
  padding: '.75em',
  margin: '.75em 0'
}


const people = [
  {
    imageId: 'szV5sdG',
    name: 'Maria Skłodowska-Curie',
    profession: 'physicist and chemist',
    awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
    discoverd: 'polonium (chemical element)'
  },
  {
    imageId: 'YfeOqp2',
    name: 'Katsuko Saruhashi',
    profession: 'geochemist',
    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discoverd: 'a method for measuring carbon dioxide in seawater'
  }

]

function Profile({ name, imageId, size = 70, profession, awards, awardsDesc, discoverd }) {
  return (
    <section style={sectionStyle}>
      <>
        <h2>{name}</h2>
        <img style={imgStyle} src={getImageUrl(imageId)} alt={name} width={size} height={size} />
        <ul>
          <li><b>Profession:</b> {profession}</li>
          <li><b>Awards: {awards.length}</b> {awards.join(', ')}</li>
          <li><b>Discovery: </b>{discoverd}</li>
        </ul>
      </>
    </section>
  )
}

export default function Gallery() {
  return (
    <>
      <h1>Notable Scientist</h1>
      {people.map(person =>
        <Profile
          name={person.name}
          imageId={person}
          profession={person.profession}
          awards={person.awards}
          discoverd={person.discoverd}
        />
      )}
    </>
  )
}
