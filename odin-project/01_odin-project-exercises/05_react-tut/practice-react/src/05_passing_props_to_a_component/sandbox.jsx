import { getImageUrl } from "./utils"

// Passing a prop to a component
export default function Profile() {
  return (
    <div>
      <Card> {/* passing jsx as a children*/}
        <Avatar
          size={100}
          person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        />
        <Avatar
          size={80}
          person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
        />
        <Avatar
          person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
          size={50}
        />
      </Card>
    </div>
  )
}

const avatarStyle = {
  borderRadius: '50%',
  padding: '0 1em'
}

function Avatar({ person, size }) {
  return (
    <img style={avatarStyle} src={getImageUrl(person)} alt={person.name} width={size} height={size} />
  )
}

// passing jsx as children
const cardStyle = {
  padding: '1em',
  border: '1px solid gray',
  borderRadius: '5px',
  width: 'fit-content'
}

function Card({ children }) {
  return (
    <div style={cardStyle}>
      {children}
    </div>
  )
}

















