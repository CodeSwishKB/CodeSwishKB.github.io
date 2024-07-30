// TODO: 
// Challenge 4 of 4: Implement multiple selection 
// In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.
// Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.

import { useState } from 'react';
import { letters } from './data.js';
import Letter from './letters.jsx';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  // TODO: allow multiple selection
  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    const nextIds = new Set(selectedIds)
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId)
    } else {
      nextIds.add(toggledId)
    }
    setSelectedIds(nextIds)
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.has(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

