/* TODO:  
  Challenge 3 of 3: Passing JSX in a children prop 
  Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
*/

function Card({ children }) {
  return (
    <div style={cardStyle}>
      <div className="cardContent">
        {children}
      </div>
    </div>
  )
}

const cardStyle = {
  border: '1px solid gray',
  borderRadius: '1em',
  padding: '1em'
}

export default function Profile3() {
  return (
    <>
      <Card>
        <h1>Photo</h1>
        <img src="https://i.imgur.com/OKS67lhm.jpg" alt="Aklilu Lemma" width={70} height={70} />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis. </p>
      </Card>
    </>
  )
}
