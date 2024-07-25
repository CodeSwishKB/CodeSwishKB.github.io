// TODO:
// Challenge 4 of 4: List with a separator 
// This example renders a famous haiku by Tachibana Hokushi, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:
// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article
//

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
}

export default function Poem() {
  return (
    <article>
      {poem.lines.map((item, idx) =>
        <>
          {idx > 0 && <hr />}
          <p>{item}</p>
        </>
      )}
    </article>
  )
}
