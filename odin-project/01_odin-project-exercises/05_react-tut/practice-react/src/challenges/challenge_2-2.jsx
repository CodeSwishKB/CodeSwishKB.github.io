import TodoList2 from "./challenge_2-1"

{ /* 
  Challenge 2 of 3: Extract information into an object 
  Extract the image URL into the person object. 
*/ }

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
    padding: '12%'
  },
  img: {
    src: 'https://i.imgur.com/7vQD0fPs.jpg',
    alt: 'Gregorio Y. Zara',
    className: 'avatar'
  }
}

export default function TodoList3() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img src={person.img.src} alt={person.img.alt} className={person.img.className} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lecture</li>
        <li>Work on the alcohol-fueled engine</li>
      </ul>
    </div>
  )
}


