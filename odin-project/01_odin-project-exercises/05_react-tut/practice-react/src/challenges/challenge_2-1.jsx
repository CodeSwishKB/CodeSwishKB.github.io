const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'inherit',
    color: 'pink',
    fontSize: '1.5rem',
    fontFamily: 'monospace'
  },
  imgStyle: {
    borderRadius: '50%'
  }
}

export default function TodoList2() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img className="avatar" style={person.imgStyle} src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fueled engine</li>
      </ul>
    </div>
  )
}
