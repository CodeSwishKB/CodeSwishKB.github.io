// TODO: 
// Challenge 1 of 4: Complete the gallery 
// When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.
// After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.

import { useState } from "react";
import { sculptureList } from "./data";

export default function GalleryChallenge() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  let hasPrev = index > 0
  let hasNext = index < sculptureList.length - 1

  function handleClickPrev() {
    if (hasPrev) {
      setIndex(index - 1)
    }
  }

  function handleClickNext() {
    if (hasNext) {
      setIndex(index + 1)

    }
  }

  function handleClickShowMore() {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]
  return (
    <>
      <button disabled={!hasPrev} onClick={handleClickPrev}>Prev</button>
      <button disabled={!hasNext} onClick={handleClickNext}>Next</button>
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

