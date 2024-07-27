import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery2() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handleClickPrev() {
    setIndex(index - 1)
  }

  function handleClickNext() {
    setIndex(index + 1)
  }

  function handleClickShowMore() {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]
  return (
    <>
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleClickShowMore}>{showMore ? 'Hide' : 'Show'} Details</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}
